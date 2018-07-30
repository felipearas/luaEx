class Option {

    constructor(typeJSON,id,typeOption,validity,strike,optioner,quantity) {

      this._option = {
        _typeJSON:typeJSON,
        _id:id,
        _typeOption:typeOption,
        _validity:validity,
        _strike:strike,
        _optioners:[{_optioner:optioner,_quantity:quantity}]
      };
    };
  };
  

module.exports = Option;