import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true }, 
  // connection btw our clerk user and database user. 
  email: {type: String, required: true, unique: true},
  username: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  photo: { type: String, required: true},
})

const User = models.User || model('User', UserSchema);

export default User;