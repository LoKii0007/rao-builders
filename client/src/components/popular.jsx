import React, { useContext, useEffect, useState } from 'react'
import "../css/popular.css"
import { productContext } from '../context/carcontext'
import "../css/collectionitem.css"
import CollectionItem from './collectionitem'

export default function Popular({title}) {
    const context = useContext(productContext)
    const { product } = context
    const [popular, setPopular] = useState([])
    const [items, setItems] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPopular(product)
        if(popular){
            setLoading(false)
        }
    }, [product])

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
                    {title}
                </div>
                <div className={`popular-bottom align-items-center justify-content-center d-flex flex-wrap`}>
                    {loading ? 
                    <div className='loading d-flex justify-content-center align-items-center'>
                        <img src="/loading2.gif" alt="" />
                    </div> : popular &&
                    popular.map((car, index) => (
                        <CollectionItem key={index} product={car} />
                    ))}

                </div>
            </div>
        </>
    )
}
