const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const URL_KENOS_DESIGN =
    'https://raw.githubusercontent.com/TelefonicaAR/kenos-design/master/tokens/tokens.json?token=GHSAT0AAAAAACEGYNRV5ADYOJ7WAZ7XH4J4ZEVXERA';

const writeFile = (outDir, content) => {
    return fs.writeFile(outDir, content, (err) => {
        if (err) throw err;
        console.log(`The file has been saved! 
Path: ${outDir}`);
    });
};

const OUT_DIR = path.join(__dirname + '/tokens-movistar.ts');

function fetchToken() {
    fetch(URL_KENOS_DESIGN)
        .then((res) => res.json())
        .then((res) => {
            const parsedData = JSON.stringify(res);
            const content = `const tokensMovistar = 
               ${parsedData} 
            
            
            export default tokensMovistar
            `;
            writeFile(OUT_DIR, content);
        });
}

fetchToken();
