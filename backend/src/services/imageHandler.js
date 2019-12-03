const fs = require('fs');

const {publicImagesPath, baseImageLink} = require('../options.json');

async function saveImage(imageName, base64image) {
    if (!fs.existsSync(publicImagesPath))
        fs.mkdirSync(publicImagesPath);

    const imageFileName = await new Promise((res, rej) => {
        console.log('Saving file as ', imageName,':',base64image);


        //TODO: FIX BLACK IMAGE2


        fs.writeFile(`${publicImagesPath}/${imageName}.png`, base64image, 'base64', err => {
            if (err) {
                console.error(err);
                return rej(err);
            }
            console.log('success!')
            return res(`${imageName}.png`);
        });
    });
    console.log(imageFileName);
    return `${baseImageLink}/${imageFileName}`;
}


module.exports = {
    saveImage,
};