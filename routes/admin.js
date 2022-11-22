const express = require('express');
const router = express.Router();

// middleware applied just to admin routes
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    res.send('Sorry, not an admin!')
})

router.get('/topsecret', (req, res) => {
    res.send('This is top secret!')
})
router.get('/deleteeverything', (req, res) => {
    res.send('Ok, deleted it all')
})

module.exports = router;