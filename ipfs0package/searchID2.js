class searchID {
    constructor(){
        this.id = null;
    }

    loadPath(id){
        const fs = require('fs')
        fs.readFile('pathIDHash.json',function (err, data) {
            if(err) {
                throw err}
        this._data = data
        console.log(this._data)
        // this.newSearch(id)

        });
    }
    newSearching(){
        var pathIDHash = JSON.parse(this._data);
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
    };
};

module.exports = searchID;
