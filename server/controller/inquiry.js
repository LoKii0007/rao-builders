const Inquiry = require("../models/inquiry.js")

const newInquiry = async(request, response) => {
    try {
       const newInquiry = new Inquiry(request.body)
       await newInquiry.save()
       return response.status(200).json({message : "added inquiry : "})
    } catch (error) {
       return response.status(500).json({message : "error adding inquiry : ", error :error.message})
    }
}

const getAllInquiry = async(request , response)=>{
    try {
        const inquiry = await Inquiry.find({})
        return response.status(200).json(inquiry)
    } catch (error) {
        return response.status(500).json({message : "error fetching car collection details : ", error :error.message})
        
    }
 }

module.exports = {newInquiry , getAllInquiry}

