import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/collectionitem.css"
import { newInquiry } from '../services/inquire'

const CollectionItem = ({ product }) => {
  const [col, setCol] = useState("col-12")
  const [inquiry, setInquiry] = useState({})

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${product.product}`, { state: { id: product.product } })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const onchange = (e) => {
    setInquiry({
        ...inquiry, [e.target.name]: e.target.value
    })
}

  const handleInquiry = async () => {
    if(inquiry){
    await newInquiry(inquiry)
    setInquiry(
      {
        name : "",
        email : "",
        phone : "",
        city : "",
        lookingFor : "",
      }
    )
    }
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setCol("col-12")
      }
      else if (window.innerWidth > 700 && window.innerWidth <= 1070) {
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
      <div className={`box mx-3 ${col} my-5 d-flex flex-column`}>
        <div onClick={handleClick} className="box-head d-flex justify-content-center align-items-center">
          <img className='box-img' src={`/images/${product.image}`} alt="" />
        </div>
        <div className="box-detail mx-3 py-4 d-flex flex-column">
          <div className="box-body d-flex flex-column justify-content-center align-items-center">
            <div className="title text ">
              {product.product}
            </div>
            <div className="prod-body d-flex justify-content-evenly pt-4">
              <button onClick={handleClick} className='view mx-2 px-3 py-2'>View More</button>
              <button className='inquire mx-2 px-3 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Inquire now</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="box-footer d-flex pb-4 justify-content-evenly">
          <div className="contact-1 d-flex justify-content-center">
            <div className="call-icon contact-icons">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <div className="contact-text ms-2 ">
              <a className='text-left' href="tel:+919911897526">
                +919911897526
              </a>
            </div>
          </div>
          <div className="contact-2 d-flex justify-content-center">
            <div className="call-icon contact-icons">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <div className="contact-text ms-2 ">
              <a className='text-left' href="tel:+918447637436">
                +9195600 03717
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* <--------------------- Modal ---------------> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Inquire now ! </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name='name' onChange={(e)=>onchange(e)} value={inquiry.name} className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name='email' onChange={(e)=>onchange(e)} value={inquiry.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="number" name='phone' onChange={(e)=>onchange(e)} value={inquiry.phone} className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" name='city' onChange={(e)=>onchange(e)} value={inquiry.city} className="form-control" id="city" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">What are you looking for?</label>
                <textarea name='lookingFor' onChange={(e)=>onchange(e)} value={inquiry.lookingFor} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" onClick={handleInquiry} className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CollectionItem
