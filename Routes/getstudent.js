const express = require('express');
const router = express.Router();
const { Student } = require('../models/student');

router.get("/", async (req, res) => {
    try {
        const students = await Student.find(); // Wait for the query to resolve
        console.log("Successfully fetched");
        res.json(students); // Send the resolved data as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching students");
    }
});

module.exports = router;
