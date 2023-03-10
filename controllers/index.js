const csvtojson = require('csvtojson');
const fs = require('fs');
const csvfilepath = 'users.csv';
const csvRecords = require('../models/Csv');

//creating the csv file and parse it into the json file and then saving it into the DB
exports.createCsv = async(req, res) => {
//convert csvfile to jsonArray
    try {
        //finding the document using fileName and setting csvData as the jsonObj
        csvtojson().fromFile(csvfilepath)
        .then((jsonObj) => {
            //saving the data into the db
            csvRecords.insertMany(jsonObj).then()

        // log the JSON array
            fs.writeFile('users.json', JSON.stringify(jsonObj, null, 4), (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON array is saved.");
            });
            return res.status(200).json(jsonObj)
        }
    )} catch(err) {
        next(err);
    }
}
