import React, { useContext, useEffect, useState } from 'react'
import "../css/popular.css"
import { productContext } from '../context/carcontext'
import "../css/collectionitem.css"
import CollectionItem from './collectionitem'

export default function Popular() {
    const context = useContext(productContext)
    const { product } = context
    console.log(product)
    const [popular, setPopular] = useState([])
    const [items, setItems] = useState(true)

    useEffect(()=>{
        setPopular(product)
    },[product])

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
                <div className="popular-top mx-5 mt-5 text-center">
                    Popular Products 
                </div>
                <div className={`popular-bottom align-items-center justify-content-center d-flex flex-wrap`}>
                    {popular.map((car, index) => (
                    <CollectionItem key={index} product={car} />
                     ))}

                </div>
            </div>
        </>
    )
}
