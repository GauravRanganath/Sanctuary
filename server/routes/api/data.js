// routes/api/data.js

const FormData = require('form-data')
const express = require('express');
const editJsonFile = require("edit-json-file");
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();
const Axios = require("axios").default;
const fetch = require("node-fetch");
const fileUpload = require('express-fileupload');
const router = express.Router();
const { json } = require('body-parser');
const config = {
  headers: { Authorization: `Bearer ${process.env.BEARER_KEY}` }
};
console.log(__dirname)
router.use(fileUpload());
router.use(
  "/public", express.static(__dirname+"/public")
);

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('data route testing!'));

// -------------------> Sanctuary Endpoints Below
async function moveFile(
  imageFile, filepath
){
  return imageFile.mv(filepath).then(
    data => {
      return "uploaded"
    }
  ).catch(
    error => console.log(error)
  );
}

async function uploadFile(
  imageFile, filename, filepath
){
  const form = new FormData()
  await form.append('data', fs.createReadStream(filepath))
  await form.append('filename', filename)
  return Axios.post("https://api.estuary.tech/content/add", form, {headers: {
    Authorization: `Bearer ${process.env.BEARER_KEY}`,
    'Content-Type': 'multipart/form-data',
  }})
  .then(data => {
    return data.data
  })
}

// async addToConnections()

router.post("/upload", async (req, res, next) =>{
  const bearer_key = process.env.BEARER_KEY;
  
  var myHeaders = new fetch.Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append(
    "Authorization",
    `Bearer ${bearer_key}`
  );
  let imageFile = req.files.file;
  var new_filepath = `${__dirname}/public/${req.body.filename}`
  let collection_names = await Axios.get("https://api.estuary.tech/collections", config);
  collection_names = collection_names.data.map(value => Object({"name":value.name,"id":value.uuid}))
  var disease_tags = JSON.parse(req.body.disease_tags)
  var demographic_tags = JSON.parse(req.body.demographic_tags)
  var sex_tags = JSON.parse(req.body.sex_tags)
  var age_tags = JSON.parse(req.body.age_tags)
  var all_tags = [disease_tags, demographic_tags, sex_tags, age_tags]
  
  await moveFile(imageFile, new_filepath)
  var resp = await uploadFile(imageFile, req.body.filename, new_filepath);
  var contentId = resp.estuaryId;
  all_tags.map(
    async (specific_tags) => {
      specific_tags.map(
        async (tag) => {
          tag_id = collection_names.find(col_name_id => col_name_id.name==tag).id
          post_body = {
            "contentIDs":[contentId]
          }
          Axios.post(`https://api.estuary.tech/collections/${tag_id}`, post_body, {
            headers: { Authorization: `Bearer ${process.env.BEARER_KEY}` }
          }).then(
            data => {
              console.log(data)
            }
          ).catch(
            error => console.log(error.data)
          )
        }
      )
    }
  )
  res.send("Completed")

})

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

  let mapCidToName = {};

  const requests = urls.map((url) => Axios.get(url, config));

  Axios.all(requests).then((responses) => {
    // console.log(responses);
    responses.forEach(resp => {
      // console.log("resp.data:", resp.data);
      if (resp.data) {
        let temp = resp.data;
        // console.log(temp);
        let arrayOfIds = []
        resp.data.forEach(x => {
          mapCidToName[x.cid] = x.name;
          arrayOfIds.push(x.cid);
        });
        collectionsAndContents.push(arrayOfIds);
      } else {
        collectionsAndContents.push([]);
      }
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

    let finalResult = [];

    result.forEach((x) => {
      finalResult.push([x, mapCidToName[x]]);
    })

    console.log("finalResult:", finalResult);

    res.send(finalResult);
  });
});

router.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var log_in_attempt;
  if (username=="admin@utoronto.ca" && password=="uofthacks"){
    log_in_attempt = "success"
  }
  else{
    log_in_attempt = "failure"
  }
  console.log(log_in_attempt, "aefsawiuQB")
  if (log_in_attempt=="success"){
    var file = editJsonFile(`${__dirname}/login.json`);
    file.set("logged_in", true)
    file.save()
  }
  res.send(log_in_attempt);
})

router.get("/login_status", (req, res) => {
  var jsonString = JSON.parse(fs.readFileSync(`${__dirname}/login.json`))
  res.send(jsonString.logged_in)
})
router.post("/login_status", (req, res) => {
  var file = editJsonFile(`${__dirname}/login.json`);
  var jsonString = JSON.parse(fs.readFileSync(`${__dirname}/login.json`))
  var logged_in = jsonString.logged_in
  if (logged_in==false){
    file.set("logged_in", true)
  }
  file.save()
  jsonString = JSON.parse(fs.readFileSync(`${__dirname}/login.json`))
  res.send(jsonString.logged_in)
})
router.post("/signout", (req, res) => {
  var file = editJsonFile(`${__dirname}/login.json`);
  var jsonString = JSON.parse(fs.readFileSync(`${__dirname}/login.json`))
  var logged_in = jsonString.logged_in
  if (logged_in==true){
    file.set("logged_in", false)
  }
  file.save()
  jsonString = JSON.parse(fs.readFileSync(`${__dirname}/login.json`))
  res.send(jsonString.logged_in)
})


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
