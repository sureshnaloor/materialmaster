const express = require('express');
const router = express.Router();
const AllStock = require('../../models/AllStock');

router.get('/test', (_, res) => res.json('all stock route testing'))

router.get('/all', (_, res) => {
    AllStock.find({ ClosingValue: { $gt: 1 } }).sort({ "ClosingValue": -1 }).exec()
        .then(allstk => res.json(allstk))
        .catch(err => res.status(404).json(err));
});

router.get('/plantVal', (_, res) => {
    AllStock.aggregate([{
        $group: {
            _id: "$Plant",
            plantTotal: {
                $sum: "$ClosingValue"
            }
        }
    }], (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        res.json(result)
    })
})

router.get('/mat/:matcode', (req, res) => {
    AllStock.find({ "Material": req.params.matcode })
        .then(stk => res.json(stk))
        .catch(err => res.status(404).json(err));
});

router.get('/:id', (req, res) => {
    AllStock.findById(req.params.id)
        .then(stk => res.json(stk))
        .catch(err => res.status(404).json(err))
})

module.exports = router;