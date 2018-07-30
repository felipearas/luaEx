class UpdateOptionJSON{
    constructor(option,newOptioner,quantity){

        this._option = option;
        this._newOptioner = newOptioner;
        this._quantity = quantity;      

    }

    updateOptionJSON(){
        const generatorOptionJSON = require('./createOptionJSON');
        const newOptionJSON = new generatorOptionJSON(this._option);
        this._option._optioners.push({_optioner:this._newOptioner,_quantity:this._quantity});
        newOptionJSON.generateOptionJSON()
    }
}

module.exports = UpdateOptionJSON;