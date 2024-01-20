import axios from "axios";
import toast from "react-hot-toast";


// const URL = "http://localhost:8000"
const URL = "https://rao-builders-api.vercel.app"

export const newInquiry = async(data)=>{
    try {
        const res = await axios.post(`${URL}/api/add/new-inquiry`, data)
        if (res.status === 200) {
            toast.success("submitted succesfully")
        }
        else {
            console.log("invalid add-new-inquiry api response", res.data)
            toast.error("error submitting try later !")
        }
    } catch (error) {
        console.log("error calling new-inquiry api", error.message)
    }
}

export const getInquiry = async () => {
    try {
        const res = await axios.get(`${URL}/api/get/inquiry`)
        if (res.status === 200) {
            return res.data
        }
        else {
            console.log("invalid getinquiry api response", res.data)
        }
    } catch (error) {
        console.log("error calling getinquiry api", error.message)
    }
}