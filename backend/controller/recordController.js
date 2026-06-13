import asyncHandler from "../middleware/asyncHandler.js";
import Record from "../models/recordModel.js";

// @desc    Get user medical and test records
// @route   GET /api/records
// @access  Private
const getMyRecords = asyncHandler(async (req, res) => {
  const records = await Record.find({ user: req.user._id }).sort({ date: -1 });
  res.json(records);
});

// @desc    Create new medical or test record
// @route   POST /api/records
// @access  Private
const createMyRecord = asyncHandler(async (req, res) => {
  const { title, doctorName, date, recordType, description, attachment } = req.body;

  const record = new Record({
    user: req.user._id,
    title,
    doctorName,
    date,
    recordType,
    description,
    attachment: attachment || "",
    status: "Final",
  });

  const createdRecord = await record.save();
  res.status(201).json(createdRecord);
});

// @desc    Delete medical or test record
// @route   DELETE /api/records/:id
// @access  Private
const deleteMyRecord = asyncHandler(async (req, res) => {
  const record = await Record.findById(req.params.id);

  if (record) {
    if (record.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Not authorized to delete this record");
    }
    await Record.deleteOne({ _id: record._id });
    res.json({ message: "Record removed" });
  } else {
    res.status(404);
    throw new Error("Record not found");
  }
});

export { getMyRecords, createMyRecord, deleteMyRecord };
