import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/collectionitem.css"

const CollectionItem = ({ product }) => {
  const [col, setCol] = useState("col-12")

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${product.product}`, { state: { id: product.product } })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setCol("col-12")
      }
      else if(window.innerWidth > 700  && window.innerWidth <= 1070){
        setCol("col-5")
      }
      else {
        setCol("col-4")
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
      <div onClick={handleClick} className={`box mx-3 ${col} my-5 d-flex flex-column`}>
        <div className="box-head d-flex justify-content-center align-items-center">
          <img className='box-img' src={`/images/${product.image}`} alt="" />
        </div>
        <div className="box-detail mx-3 py-4 d-flex flex-column">
          <div className="box-body d-flex flex-column justify-content-center align-items-center">
            <div className="title text ">
              {product.product}
            </div>
            <div className="prod-body d-flex justify-content-evenly pt-4">
              <button className='view mx-2 px-3 py-2'>View More</button>
              <button className='inquire mx-2 px-3 py-2'>Inquire now</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="box-footer d-flex pb-4 justify-content-evenly">
          <div className="contact-1 d-flex justify-content-center">
            <div className="call-icon contact-icons">
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <div className="contact-text ms-2 ">
              <a className='text-left' href="tel:+919560003717">
                +919911897526
              </a>
            </div>
          </div>
          <div className="contact-2 d-flex justify-content-center">
            <div className="call-icon contact-icons">
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <div className="contact-text ms-2 ">
              <a className='text-left' href="tel:+919560003717">
                +9195600 03717
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CollectionItem
