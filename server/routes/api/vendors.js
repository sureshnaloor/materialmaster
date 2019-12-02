const express = require('express');
const router = express.Router();

// load Vendors model 

const Vendors = require('../../models/Vendors');

// route GET api/matmaster/test
// description matmaster get route testing
// access Public

router.get('/test', (req, res) => res.send('vendor route testing!')); 

router.get('/all', (req, res) => {
    Vendors.find()
      .then(vendor => res.json(vendor))
      .catch(err => res.status(404).json(err));
  });

  router.get('/code/:vencode', (req, res) => {
    Vendors.find({VendorNumber: req.params.vencode})
      .then(vendor => res.json(vendor))
      .catch(err => res.status(404).json(err));
  });

  router.get('/:id', (req, res) => {
    Vendors.findById(req.params.id)
      .then(vendor => res.json(vendor))
      .catch(err => res.status(404).json(err));
  });

    router.get('/name/:vname', (req, res) => {
      Vendors.find({"Name": new RegExp('^'+ req.params.vname, "i")})
      .then(vendor => res.json(vendor))
      .catch(err => res.status(404).json(err));
  });

module.exports = router; 