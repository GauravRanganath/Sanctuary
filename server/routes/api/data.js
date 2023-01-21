// routes/api/data.js

const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const { json } = require('body-parser');
dotenv.config();
const Axios = require('axios').default;

const config = {
  headers: { Authorization: `Bearer ${process.env.BEARER_KEY}` }
};

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('data route testing!'));

// -------------------> Sanctuary Endpoints Below

router.get('/records', async (req, res) => {
  // Step 1: Retrieve filter Parameters
  // console.log(req.query);
  const disease = req.query.disease;
  const sex = req.query.sex;
  const age = req.query.age;
  const race = req.query.race;

  // Step 2: Retrieve all individual options (collection names)
  let diseaseData = [];
  let sexData = [];
  let ageData = [];
  let raceData = [];

  if (disease) {
    diseaseData = disease.split(",");
  }
  if (sex) {
    sexData = sex.split(",");
  }
  if (age) {
    ageData = age.split(",");
  }
  if (race) {
    raceData = race.split(",");
  }

  console.log("disease", disease, diseaseData);
  console.log("sex", sex, sexData);
  console.log("age", age, ageData);
  console.log("race", race, raceData);

  let allOptions = [];
  allOptions = allOptions.concat(diseaseData);
  allOptions = allOptions.concat(sexData);
  allOptions = allOptions.concat(ageData);
  allOptions = allOptions.concat(raceData);

  console.log(allOptions);

  // Step 3: Map collection name to collection key
  let resp = await Axios.get('https://api.estuary.tech/collections/', config);
  let allCollections = resp.data;
  
  let collectionIds = [];
  allCollections.forEach(x => {
    if (allOptions.includes(x.name)) {
      collectionIds.push(x.uuid);
    }
  });

  console.log("collectionIds:", collectionIds); // all collection ids

  // Step 4: create an array or array of CIDS
  
  let collectionsAndContents = [];
  let urls = [];
  collectionIds.forEach(async x => {
    let url = "https://api.estuary.tech/collections/" + x;
    urls.push(url);
  });

  const requests = urls.map((url) => axios.get(url, config));

  axios.all(requests).then((responses) => {
    responses.forEach(resp => {
      // console.log("resp.data:", resp.data);
      let temp = resp.data;
      let arrayOfIds = []
      temp.forEach(x => {
        arrayOfIds.push(x.cid);
      });
      collectionsAndContents.push(arrayOfIds);
    });
  }).then(x => {
    console.log("collectionsAndContents:", collectionsAndContents);

    // Step 5: Intersect and return data
    function intersect(array1, array2) {
      return array1.filter(value => array2.includes(value));
    }

    let result = collectionsAndContents[0];
    // console.log("first", result);

    collectionsAndContents.forEach(arr => {
      result = intersect(result, arr);
      // console.log("in progress", result);
    });

    console.log("result:", result);
    res.send(result);
  });
});

// -------------------> Leaving code below for reference

// Load Book model
const Book = require('../../models/Book');
const { default: axios } = require('axios');

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;
