import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getAllProduct, getItem, getItemImage } from "../services/api"
import CollectionItem from '../components/collectionitem'
import Fixed from '../components/fixed'
import Product from '../components/product'
import "../css/proddetails.css"

const ProdDetails = () => {
    const { name } = useParams()
    const [id, setId] = useState("")
    const [allProdTypes, setAllProdTypes] = useState([])
    const [prodType, setProdType] = useState({})
    const [relatedCars, setRelatedCars] = useState([])
    const [products, setproducts] = useState([])
    const [image, setImage] = useState([])
    const [loadingData, setLoadingData] = useState(true)

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        if (products) {
            setLoadingData(false)
        }
    }, [products, image ])

    return (
        <>
            <div className="details-page pb-4">
                <div className="details position-relative py-4 text-center">
                    <div className='position-relative prodtype-name'>
                    {prodType.product}
                    </div>
                    <div className='position-absolute details-img d-flex justify-content-center'>
                    <img className='' src={`/images/${prodType.image}`} alt="" />
                    </div>
                </div>

                <div className="all my-5 d-flex flex-column justify-content-center align-items-center">
                    {loadingData ?
                        <div className='loading d-flex justify-content-center align-items-center'>
                            <img src="/loading2.gif" alt="" />
                        </div>
                        :
                        products.map((prod, index) => (
                            <React.Fragment key={prod._id}>
                                <Product key={prod._id} prod={prod} prod_image={image[index]} product={prodType} />
                            </React.Fragment>
                        ))
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
