import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getAllProduct, getItem, getItemImage } from "../services/api"
import CollectionItem from '../components/collectionitem'
import "../css/cardetails.css"
import Fixed from '../components/fixed'
import Product from '../components/product'

const ProdDetails = () => {
    const { name } = useParams()
    const [id, setId] = useState("")
    const [allProdTypes, setAllProdTypes] = useState([])
    const [prodType, setProdType] = useState({})
    const [relatedCars, setRelatedCars] = useState([])
    const [products, setproducts] = useState([])
    const [image, setImage] = useState([])

    const getAllProducts = async () => {
        const res = await getAllProduct()
        if (res != undefined) {
            const filtered = res.filter(prod => prod.product.toLowerCase().includes(name.toLowerCase()))
            if (filtered.length > 0) {
                setAllProdTypes(filtered)
                setProdType(filtered[0])
            }
            const filteredRelatedCar = res.filter(car => car.product !== prodType.product)
            setRelatedCars(filteredRelatedCar)
        }
    }

    const getproducts = async () => {
        if (id) {
            const res = await getItem({ id })
            if (res) {
                setproducts(res.data)
                console.log(products)
            }
        }
    }

    const getItemImages = async () => {
        if (id) {
            const res = await getItemImage({ id })
            if (res) {
                setImage(res.data)
            }
        }
    }

    useEffect(() => {
        getAllProducts()

    }, [name])

    useEffect(() => {
        if (prodType) {
            setId(prodType._id)
        }
    }, [allProdTypes, prodType])

    useEffect(() => {
        getproducts()
        getItemImages()
    }, [id])

    useEffect(() => {
        console.log(products)
        console.log(image)
    }, [products, image])

    return (
        <>
            <div className="details-page pb-4">
                <div className="details py-4 text-center">
                    {prodType.product}
                </div>

                <div className="all my-5 d-flex flex-column justify-content-center align-items-center">
                    {products && products.length > 0 ?
                        products.map((prod, index) => (
                            <>
                                <Product key={prod._id} prod={prod} prod_image={image[index]} product={prodType} />
                            </>
                        )) : ""
                    }
                </div>

                <div className="related-cars container">
                    <div className="details-page-head mt-5 m-2">
                        <h2>Related Products</h2>
                    </div>
                    <div className="related-cars-body">
                        <div className="col-body d-flex flex-wrap justify-content-evenly">
                            {relatedCars && relatedCars.length > 0 ? relatedCars.map((car) => (
                                <CollectionItem key={car._id} product={car} />
                            )) : ""}
                        </div>
                    </div>
                </div>
            </div>
            <Fixed />
        </>
    )
}

export default ProdDetails
