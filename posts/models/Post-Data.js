const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    uid: { type: String, default: '' },
    userName: { type: String, default: '' },
    userEmail: { type: String, default: '' },
    title: { type: String, default: '' },
    body: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

module.exports = mongoose.model('post', postSchema);
