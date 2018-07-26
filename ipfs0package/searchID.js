class searchID {
    constructor() {
        this._found = null;
    }
    newSearch(id) {
        this._hello = 'Hello';
        const fs = require('fs')
        this._found = null;
        fs.readFile('pathIDHash.json', function (err, data) {
            if(err) {
                throw err}
            var pathIDHash = JSON.parse(data);
            for(var e in pathIDHash) {
                var pathIDHashi = pathIDHash[e];
                if (pathIDHash.hasOwnProperty(e)) {
                    for (var i = 0; i <= 3; i++) {
                        if(pathIDHashi[i]['id'] == id){
                            this._found = 'Found option ' + id + ' in path: '+ e;
                            console.log(this._found);
                                };
                            };
                        };
                    };
            });
        console.log(this._found);
        };
    };

module.exports = searchID;