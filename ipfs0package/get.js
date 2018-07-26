app.get('/getfile', function(req, res) {
    
    //This hash is returned hash of addFile router.
    const validCID = 'QmT5Ri7zspaT6R1HZMkK1LsKvpgxYpVoHPc1iAF8WUKqzY'

    ipfs.files.get(validCID, function (err, files) {
        files.forEach((file) => {
          console.log(file.path)
          console.log(file.content.toString('utf8'))
        })
      })

})

app.listen(3000, () => console.log('App listening on port 3000!'))