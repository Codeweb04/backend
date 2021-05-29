const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true      
    },
    question: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tags: {
        type: Array,
        required: true
    },
    answers: {
        type: Array
    }
}) 

module.exports = mongoose.model('question', questionSchema)