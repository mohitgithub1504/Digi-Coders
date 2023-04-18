const Model = require('../models/userProduct');
const { Router } = require('express');
const router = Router();

//add product data
router.post('/add', (req, res) => {
    console.log(req.body);
    //res.send('Respond from add product from Product Router');

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;