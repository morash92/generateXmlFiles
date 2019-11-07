const fs = require('fs');
const parser = require('xml2json');

function generateFiles(amountOfFiles, filename){
    return new Promise(function(resolve,reject){
            fs.readFile( `./${filename}.xml`, function(err, data) {
                const json = JSON.parse(parser.toJson(data, {reversible: true}));
                for (let i =0; i < amountOfFiles; i ++) {
                    json.NewsML.NewsItem.Identification.NewsIdentifier.NewsItemId.$t = `10000${i}`;
                    json.NewsML.NewsItem.NewsComponent.NewsLines.HeadLine.$t = `story no ${i}`;
                    const stringified = JSON.stringify(json);
                    const xml = parser.toXml(stringified);
                    fs.writeFile(`10000${i}.xml`, xml, function(err, data) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log('updated!');
                        }
                    });
                }
            });
        resolve()
    });
}

generateFiles(150, 100001);
