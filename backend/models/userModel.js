import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const experienceSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    fromTime:{
        type: String,
        required: true
    },
    toTime:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }

}) 

const userSchema = mongoose.Schema({
    avatar: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    isTAndCAccepted:{
        type: Boolean,
        required: true,
    },
    role: {
        type: String,
        required: false
    },
    professionalExperience: {
        type: String,
        required: false
    },
    topicsOfInterest: {
        type: [String],
        required: false
    },
    type: {
        type: String,
        required: false,
        default: 'mentee'
    },
    experience: [experienceSchema],
    country:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    timeZone:{
        type: String,
        required: false
    },
    languages:{
        type: [String],
        required: false
    },
}, {
    timestamps: true
})


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }
  
  userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next()
    }
  
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  })
  
  const User = mongoose.model('User', userSchema)
  
  export default User