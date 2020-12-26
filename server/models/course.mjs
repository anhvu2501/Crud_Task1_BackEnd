import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  class: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Course', courseSchema);