const glob = require('glob');

const fs = require('fs')

class CheckOptionJSON{
    constructor(){

    }
    findOptions(typeOption,validity,strike,newOptioner,quantity){
        glob("**/*.json", function (err, files) {
            if (err) throw err;
            const searchOptionJSON = require('./searchOptionJSON')
            const newSearch = new searchOptionJSON()
            newSearch.searchOption(files,typeOption,validity,strike,newOptioner,quantity);
        });
    };
};

module.exports = CheckOptionJSON;