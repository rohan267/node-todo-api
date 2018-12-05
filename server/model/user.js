var mongoose = require('mongoose');

var User = mongoose.model('user', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
});

module.export = {User}
