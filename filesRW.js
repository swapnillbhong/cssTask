const fs = require('fs');

async function readFileAsync() {
    try {
        const data=await fs.readFile('example.txt','utf8');
        console.log('File content:',data);
    } catch (error) {
        console.error('error occured',error);
    }
}

readFileAsync();

5 == '5' //true