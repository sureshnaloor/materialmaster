const mongoose= require('mongoose');

const MatPurchaseSchema = new mongoose.Schema({
    Currency: {type: String, required: true},
    PurchasingDocument: {type: String, required: true},
    itemPO: {type: String, required: true},
    DocumentDate: {type: Date, required: true},
    VendorCode: {type: String, required: true},
    VendorName: {type: String, required: true},
    Material: {type: String},
    ShortText:{type: String},
    OrderQuantity: {type: Number, required: true},
    OrderUOM: {type: String},
    NetPrice: {type: Number, required: true}
}, {collection: 'MatOrderedPO'})

module.exports = MatPurchase = mongoose.model('MatOrderedPO', MatPurchaseSchema)
