const mongoose = require('mongoose');
const schema = mongoose.Schema;
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = new schema({
    profileimgurl:{
        type: String
    },
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength:4
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minLength:6
    }
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User; 