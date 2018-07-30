class ControlOption{
    constructor(){
    }
    createOption(typeJSON,id,typeOption,validity,strike,optioner,quantity){
        const generatorOption = require('./createOption');
        const newOption = new generatorOption(typeJSON,id,typeOption,validity,strike,optioner,quantity);
        const generatorOptionJSON = require('./createOptionJSON');
        const newOptionJSON = new generatorOptionJSON(newOption._option);
        newOptionJSON.generateOptionJSON()
    }
    checkOptionUpdate(typeOption,validity,strike,newOptioner,quantity){
        const checkOption = require('./checkOptionJSON');
        const checkOptionJSON = new checkOption();
        checkOptionJSON.findOptions(typeOption,validity,strike,newOptioner,quantity);
    };
};

runApp = new ControlOption();
// runApp.createOption('option','BRLUSD4754','call','12/08/2018','100','user',1000);
// runApp.checkOptionUpdate('call','12/08/2018','100','Felipe',150);
// runApp.checkOptionUpdate('call','12/08/2018','100','OLAAA',200);
// runApp.createOption('option','BRLUSD4854','put','12/08/2018','100','user',1000);
runApp.checkOptionUpdate('put','12/08/2018','100','OLAAA',200);