function addIDHash(optionsID,Hash,fail) {
    const fs = require('fs')

    fs.readFile('pathIDHash.json', function (err, data) {
        if(err) {
            console.log('[Writing path to pathIDHash.json]: ' + err);
              if (fail)
                fail(err);
          } else {
            var pathIDHash = JSON.parse(data);
            pathIDHash[Hash] = optionsID;
            fs.writeFile("pathIDHash.json", JSON.stringify(pathIDHash),function(err) {
                if(err) {
                  console.log('[write auth]: ' + err);
                    if (fail)
                      fail(err);
                } else {
                    console.log('[Writing path to pathIDHash.json]: sucess');
          };
        });
    };
  });
};

module.exports = addIDHash;