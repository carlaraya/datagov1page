var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DatasetSchema = Schema({
  name: {type: String, required: true, max: 200},
  link: {type: String, required: true, max: 200},
});

//Export model
module.exports = mongoose.model('Dataset', DatasetSchema);
