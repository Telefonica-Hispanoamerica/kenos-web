const {join} = require('path');

const PATH_REPO_ROOT = join(__dirname, '..', '..', '..');
const PATH_CACHE = join(__dirname, '..', 'node_modules', '.cache');
const PATH_KENOS_DESIGN_REPO = join(PATH_CACHE, 'kenos-design');
const PATH_KENOS_DESIGN_TOKENS_JSON = join(PATH_KENOS_DESIGN_REPO, 'tokens/app-mi-movistar.json');
const PATH_OUTPUT = join(PATH_REPO_ROOT, 'src', 'generated/kenos-design-tokens');
const GIT_KENOS_DESIGN_BRANCH = 'develop';
const GIT_KENOS_DESIGN = 'https://github.com/TelefonicaAR/kenos-design.git';

module.exports = {
    PATH_REPO_ROOT,
    PATH_CACHE,
    PATH_KENOS_DESIGN_REPO,
    PATH_KENOS_DESIGN_TOKENS_JSON,
    PATH_OUTPUT,
    GIT_KENOS_DESIGN_BRANCH,
    GIT_KENOS_DESIGN,
};
