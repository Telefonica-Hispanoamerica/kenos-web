const {join} = require('path');
const {environment} = require('./environment');

const {FILE_NAME, BRANCH, REPO_URL} = environment;

const JUMPS = {
    ONE: '\n',
    TWO: '\n \n',
};
const TABS = {
    ONE: '    ',
    TWO: '        ',
    THREE: '            ',
    FOUR: '                ',
};

const PATH_REPO_ROOT = join(__dirname, '..', '..', '..');
const PATH_CACHE = join(__dirname, '..', 'node_modules', '.cache');
const PATH_KENOS_DESIGN_REPO = join(PATH_CACHE, 'kenos-design');
const PATH_KENOS_DESIGN_TOKENS_JSON = join(PATH_KENOS_DESIGN_REPO, 'tokens/app-mi-movistar.json');
const PATH_OUTPUT = join(PATH_REPO_ROOT, 'src', 'skins');
const OUT_PATH = join(PATH_OUTPUT, FILE_NAME);
const GIT_KENOS_DESIGN_BRANCH = BRANCH;
const GIT_KENOS_DESIGN = REPO_URL;

module.exports = {
    PATH_REPO_ROOT,
    PATH_CACHE,
    PATH_KENOS_DESIGN_REPO,
    PATH_KENOS_DESIGN_TOKENS_JSON,
    PATH_OUTPUT,
    GIT_KENOS_DESIGN_BRANCH,
    GIT_KENOS_DESIGN,
    FILE_NAME,
    JUMPS,
    OUT_PATH,
    TABS,
};
