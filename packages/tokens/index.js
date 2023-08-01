require('dotenv').config();

const {checkoutKenosDesignRepo, createSkinFile} = require('./lib/functions');
const {environment} = require('./lib/environment');

checkoutKenosDesignRepo();

createSkinFile();

console.log(` `);
console.log(`Step 2 - DONE:`);
console.log(`File: ${environment.FILE_NAME} was successfully created`);
