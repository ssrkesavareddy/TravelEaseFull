const Home = require('../models/home')

exports.home = (req,res) => {
  Home.find().then(
    result => {
        res.status(200).json({
            message: "about details fetched",
            home : result
        })
        
    }
  ).catch(err => {
     res.status(400).json({
        message : "error in database",
        error : err

     })
  })
}