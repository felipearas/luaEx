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
      console.log('[Error reading '+ nameFile + ']: ' + err);
      ipfs.files.add(data, function (err, file) {
        if (err) {
          throw err
          }
    const matchHashID = require('./matchIDHash.js');
    const newMatching = new matchHashID();
    this._file = file;
    let optionsJSON = JSON.parse(data);
    this._data = optionsJSON;
    newMatching.getFiles(this._data,this._file);
      });
    });
  };
};



module.exports = addFile;

