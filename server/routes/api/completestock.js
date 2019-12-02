const express= require('express');
const router = express.Router();

const AllStock = require('../../models/AllStock');


router.get('/test', (req,res)=> res.json('all stock route testing'))

router.get('/plantVal', (req,res) => {
  AllStock.aggregate([
    {
      $group: {
        _id: "$Plant", 
        plantTotal: {
        $sum: "$ClosingValue"
      }}
      }    
  ], (err,result) => {
    if(err) {
      console.log(err)
      return;
    }
    res.json(result)
  })
})

router.get('/mat/:matcode', (req, res) => {
    AllStock.find({"Material": req.params.matcode})
      .then(stk => res.json(stk))
      .catch(err => res.status(404).json(err));
  });

router.get('/:id', (req,res) => {
  AllStock.findById(req.params.id)
    .then(stk=> res.json(stk))
    .catch(err => res.status(404).json(err))
})



module.exports = router;