import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address.'], // janedoe@company.org
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minlength: 6,

    },
}, { timestamps: true }
);

const user = mongoose.model('User', userSchema);

export default user;
