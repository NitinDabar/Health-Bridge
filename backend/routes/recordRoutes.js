import express from "express";
import { getMyRecords, createMyRecord, deleteMyRecord } from "../controller/recordController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(protect, getMyRecords)
  .post(protect, createMyRecord);

router.route("/:id")
  .delete(protect, deleteMyRecord);

export default router;
