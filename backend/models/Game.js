const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the game.'],
      trim: true,
    },
    platform: {
      type: String,
      required: [true, 'Please specify the platform.'],
      enum: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Game must belong to a user.'],
    },
  },
  {
    timestamps: true,
  }
);

// Map _id to id in JSON/Object conversions
const transformFn = (doc, ret) => {
  ret.id = ret._id.toString();
  delete ret._id;
  delete ret.__v;
  return ret;
};

GameSchema.set('toJSON', { transform: transformFn });
GameSchema.set('toObject', { transform: transformFn });

module.exports = mongoose.model('Game', GameSchema);
