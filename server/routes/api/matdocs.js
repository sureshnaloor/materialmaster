const express = require('express');
const router = express.Router();

// load matdocs model 

const Matdocs = require('../../models/MatDocs');

// route GET api/matdocs/test
// description matdocs get route testing
// access Public

router.get('/test', (req, res) => res.send('matdocs route testing!')); 

router.get('/:matcode', (req, res) => {
    Matdocs.find({Material: req.params.matcode})
      .then(doc => res.json(doc))
      .catch(err => res.status(404).json(err));
  });

  module.exports = router; 
