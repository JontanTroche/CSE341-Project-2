const router = require('express').Router();

//test
router.get('/', (req, res) => {
    res.send('Wellcome to my To Do list API');
});

module.exports = router;