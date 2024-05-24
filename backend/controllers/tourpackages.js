const Tour = require('../models/tourpackages')

exports.tourpackages = (req,res) => {
  Tour.find().then(
    result => {
        res.status(200).json({
            message: "tour-packages details fetched",
            tourpackages : result
        })
        
    }
  ).catch(err => {
     res.status(400).json({
        message : "error in database",
        error : err

     })
  })
}