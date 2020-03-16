const express = require('express');
const router = express.Router();
const Valstock = require('../../models/ValStock')

router.get('/test', (_, res) => res.send('valstock route testing!'));

router.get('/plantVal', (_, res) => {
    Valstock.aggregate([{
        $group: {
            _id: "$Plant",
            plantTotal: {
                $sum: "$SpecialStkValue"
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

router.get('/saleswise', (_, res) => {
    Valstock.aggregate([{
        '$group': {
            '_id': '$SalesDocument',
            'salesTot': {
                '$sum': '$SpecialStkValue'
            }
        }
    }, {
        '$match': {
            'salesTot': {
                '$gt': 100.00
            }
        }
    }], (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        res.json(result)
            // console.log(parseFloat((result[0].salesTot)).toFixed(2))
    })
})

router.get('/wbswise', (_, res) => {
    Valstock.aggregate([{
        '$group': {
            '_id': '$WBSElement',
            'wbsTot': {
                '$sum': '$SpecialStkValue'
            }
        }
    }, {
        '$match': {
            'wbsTot': {
                '$gt': 100.00
            }
        }
    }], (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        res.json(result)
            // console.log(result)
    })
})

router.get('/all', (req, res) => {
    Valstock.find().sort({ "SpecialStkValue": -1 }).exec()
        .then(valstk => res.json(valstk))
        .catch(err => res.status(404).json(err));
});

router.get('/:id', (req, res) => {
    Valstock.findById(req.params.id)
        .then(valstk => res.json(valstk))
        .catch(err => res.status(404).json(err));
});

router.get('/mat/:matcode', (req, res) => {
    Valstock.find({ Material: req.params.matcode })
        .then(valstk => res.json(valstk))
        .catch(err => res.status(404).json(err));
});

router.get('/wbs/:wbs', (req, res) => {
    Valstock.find({ 'WBSElement': req.params.wbs })
        .then(valstk => res.json(valstk))
        .catch(err => res.status(404).json(err));
});

router.get('/sales/:sales', (req, res) => {
    Valstock.find({ 'SalesDocument': req.params.sales })
        .then(valstk => res.json(valstk))
        .catch(err => res.status(404).json(err));
});



module.exports = router;