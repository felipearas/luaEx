//Required modules
const ipfs = require('./ipfsapi');
//const express = require('express');

class addFile {
  constructor() {
    this.id = 'BRLUSD574';
    this._file = null;
    this._data = null;
  }
  sendFileIPFS(nameFile) {
    var fs = require("fs");

    fs.readFile(nameFile,function(err,data){
        console.log('Error reading '+ nameFile + ': ' + err);
        console.log(data);
        ipfs.files.add(data, function (err, file) {
          if (err) {
            throw err
            }
          this._file = file;
        let optionsJSON = JSON.parse(data);
        this._data = optionsJSON;
        console.log(this._file)
        console.log(this._data)
      });
    });
  };
};



module.exports = addFile;

