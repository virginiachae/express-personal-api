// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');
//
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
//
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require('./models');
//profile info, could have just hard-coded it :(
var vaProfile =
{
  name: 'virginia chae',
  githunLink: 'https://github.com/virginiachae',
  githubProfileImage: 'https://avatars.githubusercontent.com/u/21117079?v=3',
  personalSiteLink: 'https://virginiachae.github.io/',
  currentCity: 'Alameda',
  family: ['dad', 'mom', 'brother']
}
//seed data for cake list
var cakeList = [
  {  name: "miss mallory's peach cake",
    cake: 'peaches and walnuts',
    frosting: 'cream cheese',
    description: "a cake that's sweet, simple and hard to dislike",
    sweet: true
  }, {
    name: "will's s'more cake",
    cake: 'graham crackers and vanilla',
    frosting: 'chocolate',
    description: 'a cake that always disappears quickly',
    sweet: true
  }, {
    name: 'zane garlic cake',
    cake: 'parmesan cheese and garlic',
    frosting: 'none',
    description: "a cake that's not as terrible as it seems, on the surface, to be",
    sweet: false
  }

]

//pouring info for profile above into model and creating a Profile
db.Profile.create(vaProfile, function(err, succ){
  if (err){
  console.log("Error:", err);
  return;
  }
  console.log("Created new profile", succ)
});

//pouring cake seed data into models
for (var i = 0; i < cakeList.length; i++) {
  db.Cake.create(cakeList[i], function(err, succ) {
    if (console.err) {
      console.log("error: ", err);
      return
    }
    console.log('created new cake', succ);
  });
};
