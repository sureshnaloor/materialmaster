
const mongoose= require('mongoose');

const AllstkSchema = new mongoose.Schema({
    Currency: {type: String},
    Plant: {type: String, requied: true},
    Material: {type: String, required: true},
    ClosingStk: {type: Number, required: true},
    UOM: {type: String, required: true},
    ClosingValue: {type: Number, required: true}

}, {collection: 'completestock'})

module.exports = AllStock = mongoose.model('completestock', AllstkSchema)