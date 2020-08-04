const mongoose = require('mongoose');

const ResponseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  response: {type:Array}
});

module.exports = mongoose.model('responseSchema', ResponseSchema);
