const jsonConcat = require("json-concat");

const glob = require('glob');

class ConcatOption{
    constructor(){

    }
    concat(){
        glob("**/*.json", function (err, files) {
            if (err) throw err;
            // const searchOptionJSON = require('./searchOptionJSON')
            // const newSearch = new searchOptionJSON()
            jsonConcat({
                src: files,
                dest: "./Options.json"
            }, function (json) {
                console.log(json);
            });
        });
    };
};

const ge = new ConcatOption();
ge.concat()