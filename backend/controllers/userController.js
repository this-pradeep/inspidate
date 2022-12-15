import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import sendEmail from '../utils/sendEmail.js';
import { isEmail } from '../utils/validation.js';

// @desc    Login User & Get Token
// @route   POST /api/users/login
// @access  Public
const loginUser  = asyncHandler(async (req, res)=>{
    // destructuring email and password from request body
    const {email, password} = req.body;
    
    // finding user with the email provided
    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            type: user.type,
            token: generateToken(user._id),
          })
        } else {
          res.status(401).json({
            status: 401,
            message: "Invalid Email or Password.",
            success: false,
            data:{}
          })
    }
})

// @desc    Signup a new user
// @route   POST /api/users/signup
// @access  Public
const userSignup = asyncHandler(async(req, res)=>{
     // destructuring email and password from request body
     const {firstName, lastName, email, password, isTAndCAccepted} = req.body;
     const userExists = await User.findOne({ email })

     if (userExists) {
       res.status(400)
       throw new Error('User already exists')
     }

     const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        isTAndCAccepted,
        isVerified: false
     })

    if (user) {
      let token = generateToken(user._id);
      sendEmail(token)
      res.status(201).json({
        status: 201,
        message: "Verification link has been sent to your email. Please check your email and verify your account.",
        success: true,
        data:{}
      })
    } else {
      res.status(400).json({
        status: 400,
        message: "Invalid User Data.",
        success: false,
        data:{}
      })
    }
})

// @desc    User Account Verification
// @route   POST /api/users/verifyAccount/:token
// @access  Public
const verifyAccount = asyncHandler(async(req, res) => {  
  const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET)
  // console.log(decoded.id)
  // return
  const user = await User.findById(decoded.id)

  if (user) {
      user.isVerified =  true;   
      await user.save();

    res.status(200).json({
      status: 200,
      message: "Congratulations! Your account has been verified. You can now login to your account. Redirecting you to login page.",
      success: true,
      data:{}
    })
  } else {
    res.status(400).json({
      status: 400,
      message: "The link has been expired.",
      success: false,
      data:{}
    })
  }
})

// @desc    Send Forgot Password Link To User's Email
// @route   POST /api/users/passwordChangeLink
// @access  Public
const passwordChangeLink = asyncHandler(async(req, res)=>{
    const { email } = req.body
    const user = await User.findOne({email});
    if (user) {
      const token = generateToken(user._id);
      const mailSent = await sendEmail(token, 'passwordChange')
      if (mailSent) {
     
      res.status(200).json({
        status: 200,
        message: "An email containing your password change link has been sent to your email address.",
        success: true,
        data:{}
      })
    } else {
      res.status(500).json({
        status: 500,
        message: "Could not send email.",
        success: false,
        data:{}
      })
    }
    } else {
      res.status(400).json({
        status: 400,
        message: "Email not found.",
        success: false,
        data:{}
      })
    }
}) 

// @desc    Change Password 
// @route   POST /api/users/changePassword/:token
// @access  Public
const changePassword = asyncHandler(async(req, res)=>{
  const { token } = req.params;
  const { password } = req.body;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);

  if (user) {
    user.password = password;
    await user.save();
    res.status(200).json({
      status: 200,
      message: "Your password has been successfully changed.",
      success: true,
      data:{}
    })

  } else {
    res.status(400).json({
      status: 400,
      message: "Invalid Token.",
      success: false,
      data:{}
    })
  }
}) 


export {
    loginUser,
    userSignup,
    verifyAccount,
    passwordChangeLink,
    changePassword
}