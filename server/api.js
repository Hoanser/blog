const express = require("express");
const db = require('./db');

const router = express.Router();

router.get('/user', (req, res) => {
    // console.log(db.User.find({}))
    db.User.find((err, result) => {
        if (err) {
            console.log('err' + err)
        } else {
            console.log(result)
            res.json(result)
        }
    })
    // console.log(req, res)
})

module.exports = router