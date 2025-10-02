import mongoose from "mongoose";

const masterSchema = new mongoose.Schema({
  project: [{ type: String }],
  zone: [{ type: String }],
  transactionType: [{ type: String }],
  propertyType: [{ type: String }],
  availabilityStatus: [{ type: String }],
  furnishing: [{ type: String }],
  orientation: [{ type: String }],
  view: [{ type: String }],
  parkingAvailable: [{ type: String }],
  petPolicy: [{ type: String }],
  landuseType: [{ type: String }],
  galleryCategory: [{ type: String }]
});

const Master = mongoose.model("Master", masterSchema);
export default Master;
