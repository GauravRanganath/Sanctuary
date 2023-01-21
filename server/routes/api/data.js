// routes/api/data.js

const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
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
  console.log(req.query);
  const disease = req.query.disease;
  const sex = req.query.sex;
  const age = req.query.age;
  const race = req.query.race;

  console.log("disease", disease);
  console.log("sex", sex);
  console.log("age", age);
  console.log("race", race);

  // Step 2: Retrieve all individual collection data
  let diseaseData = [];
  let sexData = [];
  let ageData = [];
  let raceData = [];

  // Step 3: Select data to be returned
  console.log(config);
  let temp = await Axios.get('https://api.estuary.tech/collections/', config);

  console.log(temp.data);

  res.send('returning records!');
});

// -------------------> Leaving code below for reference

// Load Book model
const Book = require('../../models/Book');

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
