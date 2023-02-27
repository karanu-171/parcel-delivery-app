const mongoose = require("mongoose");

const parcelSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  senderName: {
    type: String,
    required: true,
  },
  receiverName: {
    type: String,
    required: true,
  },
  startLocation: {
    type: String,
    required: true,
  },
  endLocation: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  isUpdated: {
    type: Boolean,
    default: false,
  },
  isSent: {
    type: Boolean,
    default: false,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true
}
);

const Parcel = mongoose.model("Parcel", parcelSchema);

module.exports = Parcel;
