const fs = require('fs');
const pageTemplate = require('./template.js');

// generate HTML with user input
const generatePage = content => {
    fs.writeFile('./dist/my-team.html', content, err => {
        if (err) throw err;
        console.log('✶ Team Profile Complete! ✶');
    });
};

// copy css file
const copyCSS = file => {
    let dir = './dist';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet copied!'
            });

        });
    });
};

module.exports = { generatePage, copyCSS };