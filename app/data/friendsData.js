// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friend.
// ===============================================================================
var friendsArray = [
{
  "name":"Brian",
  "photo":"https://pbs.twimg.com/profile_images/803949920281567232/BVFsbUZt.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
"name": "Mila",
"photo": "http://media.ellentv.com/2014/07/07/mila-kunis-episode-480x360.jpg",
"scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
"name": "David",
"photo": "https://pbs.twimg.com/profile_images/646374589916778496/i53D1Q35.jpg",
"scores":[
      3,
      2,
      1,
      1,
      5,
      3,
      2,
      3,
      5,
      4
    ]
}

];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
