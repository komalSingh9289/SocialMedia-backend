import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
        },
        profile: {
            type: String,
        },

    },
    {
        timestamps:true,
    }
);

const User = new mongoose.model("User", userSchema);

export default User;