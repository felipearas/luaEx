const ipfs = require('./ipfsapi');

const fs = require('fs');

class OrganizeOptions {
  constructor() {
    this.optionsCall = [];
    this.optionsPut = [];
  }
  createOption(identity,type,validity,strike) {
    const Option = require('./createOption.js');

    if(type == 'call'){
      var newOption = new Option();
      newOption.id = identity;
      newOption.type = type;
      newOption.validity = validity;
      newOption.strike = strike;
      this.optionsCall.push(newOption);
      console.log(this.optionsCall);
    }
    else if (type == 'put'){
      var newOption = new Option();
      newOption.id = identity;
      newOption.type = type;
      newOption.validity = validity;
      newOption.strike = strike;
      this.optionsPut.push(newOption);
      console.log(this.optionsPut);      
    }
  }
  createJSONOptions() {
    const createJSON = require('./createJSON.js');
    if (this.optionsCall.length >= 20){
      createJSON(this.optionsCall,'callOptions.json');
    }
    else if(this.optionsPut.length >= 2){
      createJSON(this.optionsPut,'putOptions.json');
    }
  }
  IPFSsendJSON(callputJSON){
    const ipfsSend = require('./ipfsSendGet.js');
    var addFileIPFS = new ipfsSend();
    if (callputJSON == 'callOptions.json'){
      addFileIPFS.sendFileIPFS(callputJSON);
    }
    if (callputJSON == 'putOptions.json'){
      addFileIPFS.sendFileIPFS(callputJSON);
    }
  }
  sayHello() {
    console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
  }
}

var newOrganization = new OrganizeOptions();
newOrganization.createOption('BRLUSD4554','call','12/08/2018','100');
newOrganization.createOption('BRLUSD9932','put','12/10/2018','150');
newOrganization.createOption('BRLUSD3237','put','15/10/2018','200');
newOrganization.createJSONOptions()
newOrganization.IPFSsendJSON('putOptions.json')