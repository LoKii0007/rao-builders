import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getAllProduct, getItem, getProduct, getItemImage } from "../services/api"
import CollectionItem from '../components/collectionitem'
import "../css/cardetails.css"
import Fixed from '../components/fixed'
import { Product } from '../components/product'

const CarDetails = () => {
    const { id } = useParams()
    const [cars, setCars] = useState([])
    const [product, setProduct] = useState({})
    const [relatedCars, setRelatedCars] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);
    const [items, setItems] = useState({})
    const [image, setImage] = useState("")


    const getAllProducts = async () => {
        const res = await getAllProduct()
        if (res != undefined) {
            const filteredcar = res.filter(car => car._id.includes(id.toLowerCase()))
            setCars(filteredcar)
            setProduct(filteredcar)

            const filteredRelatedCar = res.filter(car => car._id !== id)
            setRelatedCars(filteredRelatedCar)
        }
    }

    // const getProducts = async () => {
    //     const res = await getProduct({ id })
    //     if (res) {
    //         setCar(res.data)
    //     }
    // }

    const getItems = async () => {
        const res = await getItem({ id })
        if (res) {
            setItems(res.data[0])
        }
    }

    const getItemImages = async () => {
        const res = await getItemImage({ id })
        if (res) {
            console.log(res.data[0])
            setImage(res.data[0])
        }
    }


    useEffect(() => {
        getAllProducts()
        if (id) {
            getProducts()
            getItems()
            getItemImages()
        }
    }, [id])

    useEffect(() => {
    }, [car, carSummary, image])


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
                    {items.map((item, index) => (
                        <div key={index}>
                            <Product image={image} item={item} product={product} />
                            <div className="line"></div>
                        </div>
                    ))}
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
