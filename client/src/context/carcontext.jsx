import React, { createContext, useEffect, useState } from 'react'
import { getAllCar } from '../services/api'

export const productContext = createContext()

const ProductState = (props) => {

  const [product, setProduct] = useState([])

  const getAllCars = async () => {
    const res = await getAllCar();
    setProduct(res)
  }

  useEffect(() => {
    getAllCars()
  }, [])


  return (
    <productContext.Provider value={{ product }}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductState
