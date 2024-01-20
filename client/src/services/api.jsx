import axios from "axios"
import toast from "react-hot-toast"

const URL = "http://localhost:8000"
// const URL = "https://rao-builders-api.vercel.app"


//adding product type details api
export const addCarInfo = async (data) => {
    try {
        const res = await axios.post(`${URL}/api/add/car-info`, data)
        if (res.status === 201) {
            toast.success("added product succesfully")
            return res.data
        }
        else if(res.status === 200){
            toast.success("already exists")
            return res
        }
        else {
            console.log("invalid get-car-info api response", res.data)
        }
    } catch (error) {
        console.log("error calling addCarInfo api", error.message)
    }
}

export const addMainImage = async (data) => {
    try {
        const res = await axios.post(`${URL}/api/add/car-main-image`, data, { headers: { "Content-Type": "multipart/form-data" } })
        if (res.status === 200) {
            toast.success("added product image succesfully")
            return res.data
        }
        else {
            console.log("invalid get-car-info api response", res)
        }
    } catch (error) {
        console.log("error calling addCarImages api", error.response.data)
    }
}

export const addCarSummary = async (data) => {
    try {
        const res = await axios.post(`${URL}/api/add/car-summary`, data)
        if (res.status === 200) {
            toast.success("added item succesfully")
            return res.data
        }
        else {
            console.log("invalid add-car-summaryapi response", res.data)
        }
    } catch (error) {
        console.log("error calling addCarSummary api", error.message)
    }
}

export const addCarImages = async (data) => {
    try {
        const res = await axios.post(`${URL}/api/add/car-images`, data, { headers: { "Content-Type": "multipart/form-data" } })
        if (res.status === 200) {
            toast.success("added item image succesfully")
            return res.data
        }
        else {
            console.log("invalid get-car-info api response", res)
        }
    } catch (error) {
        console.log("error calling addCarImages api", error.response.data)
    }
}


// fetching car details api
export const getAllProduct = async () => {
    try {
        const res = await axios.get(`${URL}/api/get/cars`)
        if (res.status === 200) {
            return res.data
        }
        else {
            console.log("invalid getcars api response", res.data)
        }
    } catch (error) {
        console.log("error calling getcars api", error.message)
    }
}

export const getProduct = async (data) => {
    try {
        const res = await axios.post(`${URL}/api/get/car-info`, data)
        if (res.status === 200) {
            return res.data
        }
        else {
            console.log("invalid get-car-info api response", res.data)
        }
    } catch (error) {
        console.log("error calling getCar api", error.message)
    }
}


export const getItem = async (data) => {
    try {
        const res = await axios.post(`${URL}/api/get/car-summary`, data)
        if (res.status === 200) {
            return res.data
        }
        else {
            console.log("invalid get-car-summary api response", res.data)
        }
    } catch (error) {
        console.log("error calling getCarSummary api", error.message)
    }
}


export const getItemImage = async (data) => {
    try {
        const res = await axios.post(`${URL}/api/get/car-images`, data)
        if (res.status === 200) {
            return res.data
        }
        else {
            console.log("invalid get-car-images api response", res.data)
        }
    } catch (error) {
        console.log("error calling getCarImages api", error.message)
    }
}

