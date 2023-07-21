const mkdirp = require('mkdirp');
const fs = require('fs');

const {join} = require('path');
const rimraf = require('rimraf');
const util = require('util');

const {PATH_KENOS_DESIGN_TOKENS_JSON, PATH_OUTPUT} = require('./lib/const');

const {checkoutKenosDesignRepo} = require('./lib/functions');

checkoutKenosDesignRepo();

const dataTokens = fs.readFileSync(PATH_KENOS_DESIGN_TOKENS_JSON, 'utf-8');

const dataTokensParsed = JSON.parse(dataTokens);

rimraf.sync(PATH_OUTPUT);
mkdirp.sync(PATH_OUTPUT);

const key = 'App Mi Movistar';
const OUT_PATH = join(PATH_OUTPUT, `app-mi-movistar.ts`);
const dataStringify = util.inspect(dataTokensParsed[key], false, 5, false);

const content = `const appMiMovistarTokens = 
        ${dataStringify}


export default appMiMovistarTokens
`;

fs.writeFileSync(OUT_PATH, content, {flag: 'w'});

console.log(`File with key: ${key} created`);
