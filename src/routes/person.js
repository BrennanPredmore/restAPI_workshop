let express = require('express')
let router = express.Router()

// QueryString => query property on the request object
// localhost:3000/person?name=brennan&age=29
router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`You have requested a person ${req.params.name}`)   
    }
    else {
        res.send('You have requested a person')
    }
    
});

// params property on the request object
// localhost:3000/person/name
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`)
});

module.exports = router