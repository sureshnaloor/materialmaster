const mongoose= require('mongoose');

const MatDocSchema = new mongoose.Schema({
    WBSElement: {type: String},
    Material: {type: String, required: true},
    Plant: {type: String},
    StorageLoc: {type: String},
    MovementType: {type: String, required: true},
    SpecialStock: {type: String},
    MatDocument: {type: String, required: true},
    MaterialDocItem: {type: String},
    PostingDate: {type: Date, required: true, default: Date.now()},
    Qty: {type: Number, required: true},
    UOM: {type: String, required: true},
    Value: {type: Number, required: true},
    MatDescription: {type: String, required: true},
    SalesOrder: {type: String},
    CostCenter: {type: String},
    Network: {type: String}
}, {collection: 'mattransactions'})

module.exports = MatDocs = mongoose.model('mattransactions', MatDocSchema)
