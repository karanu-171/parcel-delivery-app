const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const cloudinary = require('../utils/cloudinary')

const registerUser = async (req,res) =>{
    const {picture, userName, email, phoneNumber, password} = req.body

    try {
        let existingUser = await User.findOne({email: email})
        if(existingUser){
            res.status(400).json({message: "user already exists"})
        }
        // const pic = await cloudinary.uploader.upload(picture, {
        //     folder: users,
        // })

            const user  = new User({
                picture,
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
        
        return  res.status(200).json({message:  result, token})
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
      let existingUser = await User.findOne({ email: email });
      if (!existingUser) {
        res
          .status(400)
          .json({ message: "user does not exists. signup please" });
      } else {
        const comparePassword = bcrypt.compare(password, existingUser.password);
        if (!comparePassword) {
          res.json({ message: "Invalid Email or Password" });
        }
      }
      // generate token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      return res.status(200).json({
        message: "successfully logged in",
        user: existingUser,
        token
      });
    } catch (error) {
        console.log(error)
    }
};

const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user  = await User.findById(id)
        res.status(200).json({message: user})
    } catch (error) {
        console.log(error)
    }
};

const getAllUsers = async (req, res) => {

    try {
        const user = await User.find({})
        res.status(200).json({message: user})
    } catch (error) {
        console.log(error)
    }
};

const updateUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id 
    try {
      const user = await User.findById(id);
      if (!user) return res.status(404).send("User not found..");
      const deleteAUser = await User.findByIdAndDelete(id);
      res.status(200).send({
        message: "User deleted..."
      });
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
};



module.exports = {
    registerUser,
    loginUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
}