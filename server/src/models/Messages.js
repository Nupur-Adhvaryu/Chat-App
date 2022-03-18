const mongoose = require('mongoose');
const schema = mongoose.Schema;

const MessageSchema = new schema({
    sender:{
        type: String,
        required: true,
    },
    receiver:{
        type: String,
        required: true,
    },
    messageText:{
        type: String,
        required:true
    },
    dateSent:{
        type:Date,
        default:Date.now(),
        required:true
    }
});

const Message = mongoose.model('Messages', MessageSchema);
module.exports = Message;
