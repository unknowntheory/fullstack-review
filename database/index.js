const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  id: {type:Number,unique:true},
  stargazer: Number,
  url: String


});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // it is an array and the repo not username
  var userInfo = new Repo({name:repos.full_name, id: repos.id, stargazer: repos.stargazers_count, url:repos.owner.html_url})
  userInfo.save((err)=>{
    if(err){
      console.log(err,'err');
    } else {
      console.log('saved');
    }
  })
}
let find = (callback)=>{
  Repo.find().limit(25).sort({stargazer:-1}).exec(callback);


}
// will need to make another request to add the number



//save({full_name:'emmanuel',id:444,stargazers_count:333,url:'www.getRekt.com'})
//console.log('hi');
module.exports.save = save;
module.exports.find = find;
