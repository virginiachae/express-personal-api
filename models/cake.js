var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CakeSchema = new Schema({
  name: String,
  cake: String,
  frosting: String,
  description: String,
  sweet: Boolean
});

var Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;
