

const saveParcel = async (req, res) => {};

const getParcel = async (req, res) => {
  const parcelId = req.params.id
  try {
    const parcel = await Parcel.findById(parcelId);
    if(parcel) {
      res.status(200).json({ message: parcel });
    }else {
      res.status(404).json({ message: "parcel not found" });
    }
    
  } catch (error) {
    console.log(error)
  }
};

const getAllParcels = async (req, res) => {
  const userId = req.user._id
  try {
    const parcels = await Parcel.find({ user: userId });
    res.json(parcels);
  } catch (error) {
    console.log(error)
  }
};

const updateParcel = async (req, res) => {};

const deleteParcel = async (req, res) => {};

module.exports = {
  saveParcel,
  getParcel,
  getAllParcels,
  updateParcel,
  deleteParcel,
};
