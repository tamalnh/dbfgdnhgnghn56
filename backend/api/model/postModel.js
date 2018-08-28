const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    reaction: Boolean,
    comments: String,
    timestamp: {type: Date, date: Date.now}
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
