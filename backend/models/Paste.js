const mongoose = require('mongoose');
const shortid = require('shortid');

const pasteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: '20m' } // TTL Index to delete after 20 minutes
    },
    uniqueLink: {
        type: String,
        required: true,
        default: shortid.generate // This will generate a unique shortid for each paste
    }
});

const Paste = mongoose.model('Paste', pasteSchema);
module.exports = Paste;
