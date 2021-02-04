var data = require("../data.json");

exports.addFriend = function(request, response) {
  var name = request.query.name;
  var description = request.query.description;
  var image = "photos/kay.jpg"
  var newFriend = {
    "name": name,
    "description": description,
    "imageURL": image
  }
  data.friends.push(newFriend);
  response.redirect('/');
}