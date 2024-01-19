import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getAllProduct, getItem, getItemImage } from "../services/api"
import CollectionItem from '../components/collectionitem'
import "../css/cardetails.css"
import Fixed from '../components/fixed'
import Product from '../components/product'

const ProdDetails = () => {
    const { name } = useParams()
    // const id = "65a86d7223b3dd8af5e5b276"
    const [id, setId] = useState("")
    const [prodTypes, setProdTypes] = useState([])
    const [product, setProduct] = useState({})
    const [relatedCars, setRelatedCars] = useState([])
    // const [products, setproducts] = useState([])
    // const [image, setImage] = useState([])
    let products = []
    let image = []


    const getAllProducts = async () => {
        const res = await getAllProduct()
        if (res != undefined) {
            console.log(res)
            const filtered = res.filter(prod => prod.product.toLowerCase().includes(name.toLowerCase()))
            if (filtered.length > 0) {
                setProdTypes(filtered)
                setProduct(filtered[0])
            }
            const filteredRelatedCar = res.filter(car => car.product !== product)
            setRelatedCars(filteredRelatedCar)
            console.log(relatedCars)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    useEffect(() => {
        console.log(prodTypes)
        if (product) {
            console.log(product)
            setId(product._id)
        }
    }, [prodTypes, product])

    const getproducts = async () => {
        const res = await getItem({ id })
        if (res) {
            // setproducts(res.data)
            // products = res.data[0]
            products = res.data
            console.log(products)
        }
    }

    const getItemImages = async () => {
        const res = await getItemImage({ id })
        if (res) {
            // setImage(res.data)
            // image = res.data[0].images
            image = res.data
            console.log(image)
        }
    }

    useEffect(() => {
        if (id) {
            getproducts()
            getItemImages()
        }
    }, [id])

    // useEffect(() => {
    //     console.log(products)
    //     console.log(image)
    // }, [products ,image])

    return (
        <>
            <div className="details-page pb-4">
                <div className="details py-4 text-center">
                    {product.product}
                </div>

                <div className="all my-5 d-flex flex-column justify-content-center align-products-center">
                    {/* {products && products.length > 0 ? products.map((item, index) => (
                        <div key={item._id} >
                            <Product image={image} item={item} product={product} />
                            <div className="line"></div>
                        </div>
                    )) : ""} */}
                    {products && products.length > 0 ?
                        products.map((prod, index) => (
                            <>
                                <Product key={prod._id} prod={prod} prod_image={image[index]} product={product} />
                            </>
                        )) : ""
                    }
                </div>

                <div className="related-cars container">
                    <div className="details-page-head mt-5 m-2">
                        Related Cars
                    </div>
                    <div className="related-cars-body">
                        <div className="col-body d-flex flex-wrap justify-content-evenly">
                            {relatedCars.isArray && relatedCars.map((car) => (
                                <CollectionItem key={car._id} product={car} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Fixed />
        </>
    )
}

export default ProdDetails
