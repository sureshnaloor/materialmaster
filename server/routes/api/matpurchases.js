const express = require('express');
const router = express.Router();

// load Matpurchases model 

const Matpurchases = require('../../models/MatPurchases');

// route GET api/matmaster/test
// description matmaster get route testing
// access Public

router.get('/test', (_, res) => res.send('Material Purchases route testing!')); 

router.get('/:matcode', (req, res) => {
    Matpurchases.find({Material: req.params.matcode})
      .then(purdoc => res.json(purdoc))
      .catch(err => res.status(404).json(err));
  });

  // to do
  // wbs wise and sale order wise purchases, also vendor wise purchases

module.exports = router; 