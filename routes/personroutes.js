const express = require("express");
const router = express.Router();
const Person = require("../models/person");

// POST: Add a new person
router.post("/", async (req, res) => {
  try {
    const newperson = new Person(req.body);
    await newperson.save();
    res.status(201).send({ message: "Person added", newperson });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// GET: Get all personsA
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET by work type
/*router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (["chef", "manager", "waiter"].includes(workType)) {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});*/


  
  // Get person by name
  /*router.get("/name/:name", async (req, res) => {
    const { name } = req.params;
    const result = await Person.find({ name });
    res.json(result);
  });*/
  
  // Get person by age
  /*router.get("/age/:age", async (req, res) => {
    const age = parseInt(req.params.age);
    const result = await Person.find({ age });
    res.json(result);
  });
  
  // Get person by email
  router.get("/email/:email", async (req, res) => {
    const { email } = req.params;
    const result = await Person.findOne({ email });
    res.json(result);
  });*/
  // for update we use put or patch
  router.put('/:id',async(req,res)=>{

    try {
        const personId =req.params.id//extract the id from url parameter
      
        const updatedPersonData = req.body;// jo bhi data client bhej rha  h usko req.body  m save krta h
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true ,// return the updated document
            runValidators: true, // run mongoose  validation


        })
        if (!response){
            return res.status(404).json({error: "person not found"});

        }
        console.log("data updated");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});

    }
  })

module.exports = router;
