const {execSync} = require('child_process');
const mkdirp = require('mkdirp');
const fs = require('fs');

const {
    PATH_REPO_ROOT,
    PATH_CACHE,
    PATH_KENOS_DESIGN_REPO,
    GIT_KENOS_DESIGN_BRANCH,
    GIT_KENOS_DESIGN,
} = require('./const');

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

module.exports = {checkoutKenosDesignRepo};
