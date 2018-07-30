const fs = require('fs');

class SearchOptionJSON{
    constructor(){

    }

    searchOption(files,typeOption,validity,strike,newOptioner,quantity){

        for (var i in files){

            fs.readFile(files[i], function(err,data){
                if (!err) {
                    var JSONOption = JSON.parse(data)
                    if (JSONOption._typeOption == typeOption){
                        if (JSONOption._validity == validity){
                            if (JSONOption._strike == strike){

                                const updateOptionJSON = require('./updateOptionJSON')
                                const newUpdate = new updateOptionJSON(JSONOption,newOptioner,quantity)
                                newUpdate.updateOptionJSON()
                                
                            }
                        }
                    }
            } else {
                console.log(err);
    }
});
        };
    };
};

module.exports = SearchOptionJSON;