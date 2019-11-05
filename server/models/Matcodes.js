const mongoose = require('mongoose');

const MatmasterSchema = new mongoose.Schema({
    received_flag: {
        type: String
    },

    MaterialGroup: {
        type: String,
        required: true
    },

    MaterialCode: {
        type: String, 
        required: true
    },

    closeFlag: {
        type: String
    },

    Industry: {
        required: true,
        type: String
    },

    OldMaterialNo: {
        type: String
    },

    MaterialDescription: {
        type: String,
        required: true
    },

    UOM: {
        required: true,
        type: String
    },

    MaterialType: {
        type: String,
        required: true
    },

    StatusFlag: {
        type: String
    },

    transactionFlag: {
        type: String
    }
}, {collection: 'matmaster'})

module.exports = Matmaster = mongoose.model('matmaster', MatmasterSchema)