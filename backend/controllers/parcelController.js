

const saveParcel = async (req, res) => {
  const {userName, email, phoneNumber, password} = req.body

    try {
        let existingUser = await User.findOne({email: email})
        if(existingUser){
            res.status(400).json({message: "user already exists"})
        }

            const user  = new User({
                userName,
                email,
                phoneNumber,
                password
            });
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(user.password, salt);
            const result = await user.save()

            // generate token
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        
        return  res.status(200).json({user: result, token})
    } catch (error) {
        console.log(error)
    }
};

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
