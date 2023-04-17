const express = require("express");
const {
  saveParcel,
  getParcel,
  getAllParcels,
  updateParcel,
  deleteParcel,
} = require("../controllers/ParcelController");

const parcelRoutes = express.Router();

parcelRoutes.post("/save", saveParcel);
parcelRoutes.get("/:id", getParcel);
parcelRoutes.get("/", getAllParcels);
parcelRoutes.put("/:id", updateParcel);
parcelRoutes.delete("/:id", deleteParcel);


module.exports = parcelRoutes;