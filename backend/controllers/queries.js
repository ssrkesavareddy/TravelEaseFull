const Query = require('../models/queries');
const path = require('path');

exports.queries = (req,res) => {
    const {
        name,
        email,
        query
        
    } = req.body;

    const queryObj = new Query({
        name: name,
        email : email,
        query : query
     });


    queryObj.save().then(result => {
        res.status(200).sendFile(path.join(__dirname, 'index.html'));
        }).catch(error => {
        res.status(500).json({
            message: 'Error in submitting query',
            error: error
        });
    });
}