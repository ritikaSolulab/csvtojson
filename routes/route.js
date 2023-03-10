const express = require('express');
const {
    createCsv
} = require('../controllers/index')
const router = express.Router();


//CREATE
router.post("/upload-csv", createCsv);

module.exports = router;