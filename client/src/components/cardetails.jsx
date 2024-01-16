import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getAllCar, getCarSummary, getCar } from "../services/api"
import CollectionItem from '../components/collectionitem'
import "../css/cardetails.css"
import Fixed from './fixed'
import { Product } from './product'

const CarDetails = () => {
    const { id } = useParams()
    const [cars, setCars] = useState([])
    const [car, setCar] = useState({})
    const [relatedCars, setRelatedCars] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [carSummary, setCarSummary] = useState({})
    const [items, setItems] = useState(6)


    const getAllCars = async () => {
        const res = await getAllCar()
        if (res != undefined) {
            const filteredcar = res.filter(car => car._id.includes(id.toLowerCase()))
            setCars(filteredcar)

            const filteredRelatedCar = res.filter(car => car._id !== id)
            setRelatedCars(filteredRelatedCar)
        }
    }

    const getCars = async () => {
        const res = await getCar({ id })
        if (res) {
            setCar(res.data)
        }
    }

    const getcarsummary = async () => {
        const res = await getCarSummary({ id })
        if (res) {
            setCarSummary(res.data[0])
        }
    }


    useEffect(() => {
        getAllCars()
        if (id) {
            getCars()
            getcarsummary()
        }
    }, [id])

    useEffect(() => {
    }, [car, carSummary])


    const handleSpecification = (category) => {
        setSelectedCategory(category);
        setShowDropdown(!showDropdown);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                setItems(3)
            } else {
                setItems(6)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])


    return (
        <>
            <div className="details-page pb-4">
                <div className="details py-4 text-center">
                    title
                </div>

                <div className="all my-5 d-flex flex-column justify-content-center align-items-center">
                    <Product />
                    <div className="line"></div>
                    <Product />
                    <div className="line"></div>
                    <Product />
                    <div className="line"></div>
                </div>

                <div className="related-cars container">
                    <div className="details-page-head mt-5 m-2">
                        Related Cars
                    </div>
                    <div className="related-cars-body">
                        <div className="col-body d-flex flex-wrap justify-content-evenly">
                            {relatedCars.slice(0, 10).map((car) => {
                                return <CollectionItem key={car._id} car={car} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Fixed />
        </>
    )
}

export default CarDetails
