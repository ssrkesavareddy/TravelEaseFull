const Best = require('../models/best-packages')

exports.bestpackages = (req,res) => {
  Best.find().then(
    result => {
        res.status(200).json({
            message: "best-packages details fetched",
            bestpackages : result
        })
        
    }
  ).catch(err => {
     res.status(400).json({
        message : "error in database",
        error : err

     })
  })
}