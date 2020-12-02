const neatCsv = require('neat-csv');
const fs = require('fs');
const path = require('path');

module.exports = {

    ShowChart: async (req, res) => {
        const filePath = path.join(__dirname, 'Data.csv');

        fs.readFile(filePath, (error, data) => {
            if (error) {
                return console.log('error reading file');
            }
            neatCsv(data)
                .then((parsedData) => {
                    //    console.log(parsedData)
                    res.status(200).json({ "success": true, data: parsedData })

                });
        });
    }
}
