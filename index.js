const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

const csvFilePath = path.join(__dirname, 'customer-data.csv')
const jsonFilePath = path.join(__dirname, 'customer-data.json')

let json = ''

csv()
  .fromFile(csvFilePath)
  .on('data', function(chunk) {
    json += chunk
  })
  .on('done', function(error) {
    if (error) {
      console.log(`error message on \'done\' event: `, {$error})
    } else {
      fs.writeFileSync(jsonFilePath, json)
    }
  })
  .on('error', function(error) {
    console.log(`error message on \'error\' event: `, {$error})
  })
