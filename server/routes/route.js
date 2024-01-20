require('dotenv').config()
const express = require("express")
const {newCar, getCar, getAllCars ,  addCarImages, newCarSummary, getCarSummary, getCarImages, addMainImage} = require("../controller/car-collection.js")
const { createUser, login , getUser } = require("../controller/auth.js");
const fetchUser = require("../middleware/fetchuser.js")
const upload = require("../middleware/upload.js");
const { newInquiry, getAllInquiry } = require('../controller/inquiry.js');


const route = express.Router()


//adding product details
route.post('/api/add/car-info', newCar)
route.post('/api/add/car-main-image', upload.single("main_image"), addMainImage )
route.post('/api/add/car-summary', newCarSummary)
route.post('/api/add/car-images', upload.single("images"), addCarImages )


//getting product details
route.get('/api/get/cars', getAllCars)
route.post('/api/get/car-info', getCar)
route.post('/api/get/car-summary', getCarSummary)
route.post('/api/get/car-images', getCarImages)

// inquiry details
route.post('/api/add/new-inquiry', newInquiry)
route.get('/api/get/inquiry', getAllInquiry)


//authentication for admin
route.post('/api/auth/createUser', createUser)
route.post('/api/auth/login', login)
route.post('/api/auth/getUser',fetchUser, getUser)
  

module.exports= route

