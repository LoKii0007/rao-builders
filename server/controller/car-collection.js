const productType = require("../models/car-info.js")
const product = require ("../models/car-summary.js")
const Images = require("../models/car-image.js")

const newCar = async(request, response) => {
     try {
        const newCar = new productType(request.body)
        await newCar.save()
        return response.status(200).json({message: "added new car successfully", data: newCar})
     } catch (error) {
        return response.status(500).json({message : "error adding car-info : ", error :error.message})
     }
}

const addMainImage = async(request, response) => {
   try {
      const imageName =  request.file.filename
      const carId =  request.body.car_id
      await productType.findByIdAndUpdate(carId , {image : imageName}, {new : true})
      return response.status(200).json("Added car images successfully")
   }catch (error) {
        return response.status(500).json({message : "error adding car images : ", error :error.message})
     }  
}

const newCarSummary = async(request, response) => {
     try {
      console.log(request.body)
        const newCar = new product(request.body)
        await newCar.save()
        return response.status(200).json({message : "added car summary : ", data : newCar})
     } catch (error) {
        return response.status(500).json({message : "error adding car summary : ", error :error.message})
     }
}


const addCarImages = async(request, response) => {
   try {
      const imageName =  request.file.filename
      const carId =  request.body.car_id
      await Images.create({images: imageName, car_id: carId})
      return response.status(200).json("Added car images successfully")
   }catch (error) {
        return response.status(500).json({message : "error adding car images : ", error :error.message})
     }  
}


// fetching data
const getAllCars = async(request , response)=>{
   try {
       const carinfo = await productType.find({})
       return response.status(200).json(carinfo)
   } catch (error) {
       return response.status(500).json({message : "error fetching car collection details : ", error :error.message})
       
   }
}

const getCar = async(req , res ) => {
   try {
      const carId = req.body.id
      const carinfo = await productType.findById(carId)
      if(!carinfo || carinfo.length === 0){
         return res.status(400).json("no carinfo found or invalid car_id")
      }
      return res.status(200).json({message :"fetched carinfo  successfully", data: carinfo})
   } catch (error) {
      return res.status(500).json({message : "error fetching carinfo : ", error :error.message})
      
   }
}

const getCarSummary = async(req , res ) => {
   try {
      const carId = req.body.id
      const carsummary = await carSummary.find({car_id: carId})
      if(!carsummary){
         return res.status(400).json("no car summary found or invalid car_id")
      }
      return res.status(200).json({message :"fetched car summary successfully", data: carsummary})
   } catch (error) {
      return res.status(500).json({message : "error fetching car summary : ", error :error.message})
      
   }
}

const getCarImages = async(req , res ) => {
   try {
      const carId = req.body.id
      const carImages = await Images.find({car_id: carId})
      if(!carImages){
         return res.status(400).json("no images found or invalid car_id")
      }
      return res.status(200).json({message :"fetched images successfully", data: carImages})
   } catch (error) {
      return res.status(500).json({message : "error fetching car images : ", error :error.message})
      
   }
}

module.exports = {newCar,addMainImage , getCar, getAllCars,  addCarImages, newCarSummary , getCarSummary , getCarImages}