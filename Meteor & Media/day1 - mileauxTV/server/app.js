var video1 = {
  title: "Mileaux Drinks",
  videoName: "mileaux-drinks.mov",
  likes:0,
  postedBy:'eweinberg@scischina.org',
  thumbnail:'mileaux-drinks.png'
}

var video2 = {
  title: "Mileaux Wanders",
  videoName: "mileaux-wanders.mov",
  likes:0,
  postedBy:'eweinberg@scischina.org',
  thumbnail:'mileaux-wanders.png'
}

var video3 = {
  title: "Mileaux Eats",
  videoName: "mileaux-eats.mov",
  likes:0,
  postedBy:'eweinberg@scischina.org',
  thumbnail:'mileaux-eats.png'
}


Meteor.startup(function(){
  
if(Videos.find().count()===0){
  Videos.insert(video1);
  Videos.insert(video2);
  Videos.insert(video3);
}
  

  
});

