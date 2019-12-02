const mongoose = require('mongoose')

const MatGroupSchema = new mongoose.Schema({
    groupCode: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required:true
    }
}, {collection: 'matgroup'})

module.exports = MatGroup = mongoose.model('matgroup', MatGroupSchema)