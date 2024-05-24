const User = require('../models/signup')


exports.signup = (req, res) => {
    
    const {
        name,
        email,
        password
        
    } = req.body;

    
    const signupObj = new User({
       name: name,
       email : email,
       password : password
    });

   
    signupObj.save().then(result => {
        res.status(200).json({
            message: 'User signed up Successfully now go back and login!!'
            
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Signing up',
            error: error
        });
    });
}

exports.login = (req, res) => {

    const {
        email,
        password
    } = req.body;

    User.find({
        email: email,
        password: password
    }).then(result => {
        if (result.length > 0) {
            res.status(200).json({
                message: 'User logged in Successfully !!',
                isLoggedIn: true,
                user: result[0]
            });
        } else {
            res.status(400).json({
                message: 'Username or password is wrong',
                isLoggedIn: false
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}
