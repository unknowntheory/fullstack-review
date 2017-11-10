const express = require('express');
const Promise = require('bluebird')
var bodyParser = require('body-parser')
const db = require('./../database/index.js')
const getReposByUsername = Promise.promisify(require('./../helpers/github.js').getReposByUsername)

let app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  //* getReposByUsername is a get function to github API
  //* with that information gather the need info to post to the database
  // will have to do something with the information to store it in the database
  //console.log(req.body,'adfdsaf');
  var name = req.body.username;
  // console.log(req.body,'REQ BODYXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  // console.log(req.body.username,'WHAT IS THIS <<<<<<')
  // console.log(name,'adfasdfsadfasfafdsafadsfsdfdafdasfsad');
  getReposByUsername(name)
  .then((data) => {
    data.forEach((val)=>{

      db.save(val);
    })

  })
  res.sendStatus(201)




});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // on a get request look find data in the database
  //*maybe a database method
  // with that information we respond with that data
  // maybe sort??/
  // concern is dealing with duplicates*/
  // will just receive data and pass to app
 //console.log('made it here');
   db.find((err, data)=>{
    if(err){
      console.log(err,'err');
    } else {
    //  console.log(data);
      res.send(data);
    }
  })





});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
