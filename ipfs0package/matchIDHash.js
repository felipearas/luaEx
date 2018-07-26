class MatchData{
    constructor() {
    }
    getFiles(optionsJSON,Hash){
        this._optionsJSON = optionsJSON;
        this._Hash = Hash;
        var optionsID = [];
        for(var key in this._Hash) {
            this._Hash = this._Hash[key].hash;
        }
        for (var key in this._optionsJSON){
            optionsID.push({
                id:   this._optionsJSON[key]._id
            });
        }
        this._optionsID = optionsID;
        this.createMatchIDHash();
    }
    createMatchIDHash(){
        var HashID = {};
        var Hash = this._Hash;
        HashID[Hash] = this._optionsID;
        this._HashID = HashID
        const addIDHash = require('./addIDHash.js');
        addIDHash(this._optionsID,this._Hash);
    };

};
module.exports = MatchData;