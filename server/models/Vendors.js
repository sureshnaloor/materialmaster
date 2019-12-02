const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    PayTerm: {type: String},
    VendorNumber: {type: String, required: true},
    Country: {type: String, required: true},
    Name: {type: String, required: true},
    NameAddl: {type: String},
    City: {type: String},
    District: {type: String},
    POBox: {type: String},
    PostalCode: {type: String},
    Street: {type: String},
    Address: {type: String},
    DateCreated: {type: Date, required: true, default: Date.now()},    
    UserCreated: {type: String},
    Telephone: {type: String},
    TelephoneAddl: {type: String},
    Fax: {type: String},
    VATRegistrationNo: {type: String},
    POrg: {type: String},
    Salesperson: {type: String},
    MobileNo: {type: String}
}, {collection: 'vendormaster'})

module.exports = Vendors = mongoose.model('vendormaster', VendorSchema)