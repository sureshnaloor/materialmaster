const express = require('express');
const router = express.Router();

// load book model 

const Matmaster = require('../../models/Matcodes');

// route GET api/matmaster/test
// description matmaster get route testing
// access Public

router.get('/test', (req, res) => res.send('route testing!')); 

// GET /api/matcodes
// description: Get all Matcodes
// access: Public
router.get('/all', (req, res) => {
    try{
        Matmaster.find()        
            .then(matcodes => res.json(matcodes))
    }catch(err){
        console.error(err.message)
    }    
});

router.get('/matgroup/:matgroup', (req, res) => {
    try{
        Matmaster.find({MaterialGroup: req.params.matgroup})        
            .then(matcodes => res.json(matcodes))
    }catch(err){
        console.error(err.message)
    }    
});


router.get('/:id', (req, res) => {
    Matmaster.findById(req.params.id)
      .then(matcode => res.json(matcode))
      .catch(err => res.status(404).json({ nobookfound: 'No matcode found' }));
  });

router.post('/', (req, res) => {
    Matmaster.create(req.body)
      .then(matcode => res.json({ msg: 'Matcode added successfully' }))
      .catch(err => res.status(400).json({ error: `{${err.message}}` }));
  });

  // @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Matmaster.findByIdAndUpdate(req.params.id, req.body)
      .then(matcode => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });
  
  // @route GET api/books/:id
  // @description Delete book by id
  // @access Public
router.delete('/:id', (req, res) => {
    Matmaster.findByIdAndRemove(req.params.id, req.body)
      .then(matcode => res.json({ mgs: 'Matcode entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'Such matcode doesnt exist' }));
  });

module.exports = router; 