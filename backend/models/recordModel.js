import mongoose from "mongoose";

const recordSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    recordType: {
      type: String,
      required: true,
      enum: ["Prescription", "Lab Test", "Radiology", "Other"],
      default: "Lab Test",
    },
    description: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      required: true,
      default: "Final",
    },
  },
  {
    timestamps: true,
  }
);

const Record = mongoose.model("Record", recordSchema);

export default Record;
