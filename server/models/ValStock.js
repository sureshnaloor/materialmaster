const mongoose= require('mongoose');

const ValstockSchema = new mongoose.Schema({
    Currency: {type: String, required: true},
    Material: {type: String, required: true},
    Plant: {type: String},
    SpecialStock: {type: String},
    SalesDocument: {type: String},
    ItemSalesDoc: {type: String},
    WBSElement: {type: String},
    SpecialStockQty: {type: Number},
    UOM: {type: String},
    SpecialStkValue: {type: Number}

}, {collection: 'valstock'})

module.exports = Valstock = mongoose.model('valstock', ValstockSchema)