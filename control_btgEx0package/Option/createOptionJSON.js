class CreateOptionJSON{
    constructor(option){
        this._option = option;
    }
    generateOptionJSON(){
        const fs = require('fs');
        fs.writeFile(this._option._id + '.json', JSON.stringify(this._option),function(err){
            if (err){
                throw err;
            }
            console.log('[Wrote file]')
        })
    }
}

module.exports = CreateOptionJSON;