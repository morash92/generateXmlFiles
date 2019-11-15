const fs = require('fs');
const parser = require('xml2json');

function generateFiles(amountOfFiles, filename) {
    return new Promise(function(resolve,reject){
            fs.readFile( `./${filename}.xml`, function(err, data) {
                const json = JSON.parse(parser.toJson(data, { reversible: true }));
                let num = 0;
                for (let i =0; i < amountOfFiles; i ++) {
                    // console.log(json.NewsML.NewsItem.NewsManagement.StatusWillChange.DateAndTime.$t)
                    num++;
                    if (num <= 30) {
                        json.NewsML.NewsItem.NewsManagement.StatusWillChange.DateAndTime.$t = `201911${num}T212334+0000`;
                    } else {
                        num = 0;
                    }
                    json.NewsML.NewsItem.Identification.NewsIdentifier.NewsItemId.$t = `10000${i}`;
                    json.NewsML.NewsItem.NewsComponent.NewsLines.HeadLine.$t = `201911${num}T212334+0000`;
                    const stringified = JSON.stringify(json);
                    const xml = parser.toXml(stringified);
                    fs.writeFile(`10000${i}.xml`, xml, function(err, data) {
                        if (err) {
                            console.log(err);
                            reject(err)
                        }
                        else {
                            console.log(`updated file 10000${i}.xml`);
                        }
                    });
                }
            });
        resolve()
    });
}

// generateFiles(250, 100001);

module.exports = generateFiles;
