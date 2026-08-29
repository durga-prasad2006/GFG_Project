import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const User=mongoose.model('User',new mongoose.Schema({name:String,email:String,password:String}));
const email=process.env.ADMIN_EMAIL;
const password=process.env.ADMIN_PASSWORD;
if(!email||!password){console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in backend/.env first.');process.exit(1)}
await mongoose.connect(process.env.MONGODB_URI);
await User.findOneAndUpdate({email},{name:'System Administrator',email,password:await bcrypt.hash(password,12)},{upsert:true,new:true,setDefaultsOnInsert:true});
await User.deleteMany({email:{$ne:email}});
console.log(`One administrator account is active: ${email}`);
await mongoose.disconnect();
