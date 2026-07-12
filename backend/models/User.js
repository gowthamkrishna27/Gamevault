const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username.'],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [3, 'Username must be at least 3 characters.']
    },
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
      minlength: [6, 'Password must be at least 6 characters.']
    }
  },
  {
    timestamps: true
  }
);

// Map _id to id in JSON/Object conversions
const transformFn = (doc, ret) => {
  ret.id = ret._id.toString();
  delete ret._id;
  delete ret.password;
  delete ret.__v;
  return ret;
};

UserSchema.set('toJSON', { transform: transformFn });
UserSchema.set('toObject', { transform: transformFn });

module.exports = mongoose.model('User', UserSchema);
