const mkdirp = require('mkdirp');
const fs = require('fs');
const {execSync} = require('child_process');
const {join} = require('path');
const rimraf = require('rimraf');
const util = require('util');
const fse = require('fs-extra');

const PATH_REPO_ROOT = join(__dirname, '..', '..');
const PATH_CACHE = join(__dirname, 'node_modules', '.cache');
const PATH_KENOS_DESIGN_REPO = join(PATH_CACHE, 'kenos-design');
const PATH_KENOS_DESIGN_TOKENS_JSON = join(PATH_KENOS_DESIGN_REPO, 'tokens/app-mi-movistar.json');
const PATH_OUTPUT = join(PATH_REPO_ROOT, 'src', 'generated/kenos-design-tokens');
// const PATH_OUTPUT_INDEX_FILENAME = join(PATH_OUTPUT, 'index.tsx.txt');
const GIT_KENOS_DESIGN_BRANCH = 'develop';
const GIT_KENOS_DESIGN = 'https://github.com/TelefonicaAR/kenos-design.git';

const checkoutKenosDesignRepo = () => {
    console.log(PATH_REPO_ROOT);
    mkdirp.sync(PATH_CACHE);

    if (!fs.existsSync(PATH_KENOS_DESIGN_REPO)) {
        console.log(`git clone ${GIT_KENOS_DESIGN} ${PATH_KENOS_DESIGN_REPO}`);
        execSync(`git clone ${GIT_KENOS_DESIGN} ${PATH_KENOS_DESIGN_REPO}`, {
            cwd: PATH_CACHE,
            stdio: 'inherit',
        });
    }

    execSync(`git fetch`, {
        cwd: PATH_KENOS_DESIGN_REPO,
        stdio: 'inherit',
    });
    console.log('2');

    execSync(`git checkout ${GIT_KENOS_DESIGN_BRANCH}`, {
        cwd: PATH_KENOS_DESIGN_REPO,
        stdio: 'inherit',
    });

    execSync(`git pull`, {
        cwd: PATH_KENOS_DESIGN_REPO,
        stdio: 'inherit',
    });
};

checkoutKenosDesignRepo();

const dataTokens = fs.readFileSync(PATH_KENOS_DESIGN_TOKENS_JSON, 'utf-8');
const dataTokensParsed = JSON.parse(dataTokens);
const dataKeys = Object.keys(dataTokensParsed);

rimraf.sync(PATH_OUTPUT);
mkdirp.sync(PATH_OUTPUT);

const key = 'App Mi Movistar';
const OUT_PATH = join(PATH_OUTPUT, `app-mi-movistar.ts`);
const dataStringify = util.inspect(dataTokensParsed[key], false, 5, false);
// console.log(util.inspect(dataTokensParsed[key], false, 5, false))
const content = `const appMiMovistarTokens = 
        ${dataStringify}


export default appMiMovistarTokens
`;

// fse.outputJsonSync(OUT_PATH, content);

fs.writeFileSync(OUT_PATH, content, {flag: 'w'});

// const content = Object.keys(dataTokensParsed[key])

// content.forEach(elem => {
//     fs.writeFileSync(OUT_PATH, `${elem}\n`, {flag: 'a'})
// })
console.log(`File with key: ${key} created`);
