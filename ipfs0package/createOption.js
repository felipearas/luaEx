class Option {
    constructor() {
    }
    set id(identity){
      this._id = identity;
    }
    set type(callput) {
      this._callput = callput;
    }
    set validity(validity) {
      this._validity = validity;
    }
    set strike(strike) {
      this._strike = strike;
    }
    confirmOption() {
      console.log(this);
    }
  }
  

module.exports = Option;