const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const url =
    'https://raw.githubusercontent.com/TelefonicaAR/kenos-design/master/tokens/tokens.json?token=GHSAT0AAAAAACEGYNRVGEZKGFYS3IR75VG4ZETMPVQ';

console.log('hola');

const path_out = path.join(__dirname + '/tokensMovistar.js');
console.log(path_out);
function fetchToken() {
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            const objectParsed = JSON.stringify(res);
            const content = `const tokensMovistar = 
               ${objectParsed} 
            
            
            export default tokensMovistar
            `;
            fs.writeFile(path_out, content, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        });
    // .then((res) =>
    //
    // );
}

fetchToken();
