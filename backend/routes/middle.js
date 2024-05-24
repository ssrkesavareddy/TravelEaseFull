const express = require('express')

const router = express.Router();

const homecontroller = require('../controllers/home');

const carouselcontroller = require('../controllers/carousel');

const bestpackagecontroller = require('../controllers/best-packages');

const tourpackagecontroller = require('../controllers/tourpackages');

const usercontroller = require('../controllers/user')

const querycontroller = require('../controllers/queries');

const Paymentcontroller = require('../controllers/Payments');

router.get("/home",homecontroller.home)

router.get("/carousel",carouselcontroller.carousel)

router.get("/best-packages",bestpackagecontroller.bestpackages)

router.get("/tourpackages",tourpackagecontroller.tourpackages)

router.post("/signup",usercontroller.signup)

router.post("/login",usercontroller.login)

router.post("/queries",querycontroller.queries)

router.post('/payment', Paymentcontroller.payment);

router.post('/paymentCallback', Paymentcontroller.paymentCallback);

module.exports = router