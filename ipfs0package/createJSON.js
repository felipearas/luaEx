function createJSON(data,nameFile, success, fail) {
    const fs = require('fs');
    fs.writeFile(nameFile, JSON.stringify(data), function(error) {
      if(error) { 
        console.log('[Writing  '+ namefile + ']: ' + err);
          if (fail)
            fail(error);
      } else {
        console.log('[Write JSON ' + nameFile + ' ]: success');
          if (success)
            success();
      }
    });
  }

module.exports = createJSON;