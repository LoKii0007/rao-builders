import React, { useContext, useEffect, useState } from 'react'
import "../css/popular.css"
import { productContext } from '../context/carcontext'
import "../css/collectionitem.css"
import CollectionItem from './collectionitem'

export default function Popular() {
    const context = useContext(productContext)
    const { product } = context
    const [popular, setPopular] = useState([])
    const [items, setItems] = useState(true)

    // useEffect(() => {
    //     setPopular(product)
    //     const filter = product.filter(car => car.price > 7000000)
    //     // console.log(filter)
    //     if (filter) {
    //         setPopular(filter)
    //     }
    // }, [product])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                setItems(false)
            } else {
                setItems(true)
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
            <div className="popular mb-5 d-flex flex-column">
                <div className="popular-top m-5 text-center">
                    popular cars
                </div>
                <div className={`popular-bottom align-items-center justify-content-center d-flex flex-wrap`}>
                    {/* {popular.map((car, index) => ( */}
                    <CollectionItem product={product} />
                    {/*  ))} */}

                </div>
            </div>
        </>
    )
}
