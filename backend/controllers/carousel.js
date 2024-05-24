
const Carousel = require('../models/carousel')

exports.carousel = (req,res) => {
  Carousel.find().then(
    result => {
        res.status(200).json({
            message: "carousel details fetched",
            carousel: result
        })
        
    }
  ).catch(err => {
     res.status(400).json({
        message : "error in database",
        error : err

     })
  })
}