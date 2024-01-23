import React, { useEffect, useState } from 'react'
import "../css/review.css"

export default function Review() {
  const [items, setItems] = useState(true)
  const [col, setCol] = useState("col-6")
  const reviews = [
    " “I recently purchased construction materials from Rao Building Material Supplier and was impressed with their service. The staff was knowledgeable and helped me choose the right materials for my project. I would highly recommend them to anyone looking for quality building materials.” ",
    "“I have been a customer of Rao Building Material Supplier for several years and have always been satisfied with their products and services. They offer a wide range of construction materials at competitive prices and their staff is always friendly and helpful.”",
    "“I had a great experience with Rao Building Material Supplier. They were able to provide me with all the materials I needed for my construction project and delivered them on time. I would definitely use them again in the future.” ",
    "“Rao Building Material Supplier is my go-to supplier for all my construction needs. They offer a wide range of materials at affordable prices and their staff is always willing to help. I would highly recommend them to anyone looking for quality building materials.” ",
    "“I recently purchased construction materials from Rao Building Material Supplier and was very impressed with their service. They were able to provide me with everything I needed for my project and delivered it on time. I would definitely use them again in the future.”",
    "“I have been using Rao Building Material Supplier for several years and have always been satisfied with their products and services. They offer a wide range of construction materials at competitive prices and their staff is always friendly and helpful. I would highly recommend them to anyone looking for quality building materials.” "
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setItems(false)
        setCol("col-6")
      }
      else {
        setItems(true)
      }
    }

    const handleResize2 = () => {
      if (window.innerWidth > 700) {
        setCol("col-5")
      }
      if (window.innerWidth > 1000) {
        setCol("col-3")
      }
    }

    handleResize()
    handleResize2()
    window.addEventListener("resize", handleResize)
    window.addEventListener("resize", handleResize2)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("resize", handleResize2)
    }
  }, [])

  if (items) {

    return (
      <>
        <div className="review d-flex flex-column ">
          <div className="review-top p-5 d-flex justify-content-start align-items-top">
            <h2 className='heading'>What do our user's say ?</h2>
          </div>
          <div className="review-bottom d-flex justify-content-start align-items-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="review-box m-5 p-3">
                    <div className="rv-top text-center">
                      “I recently purchased construction materials from Rao Building Material Supplier and was impressed with their service. The staff was knowledgeable and helped me choose the right materials for my project. I would highly recommend them to anyone looking for quality building materials.”
                    </div>
                    <div className="rv-body p-2">
                      <div className="review-img d-flex justify-content-start">
                        <img src="/porsche-model.png" alt="" />
                      </div>
                      <div className="review-name d-flex justify-content-start p-2 ">
                        Someone
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  {reviews.slice(1,2).map((rev, index) => (
                    <div key={index} className={`review-box m-5 p-3`}>
                      <div key={index} className="rv-top text-center">
                        {rev.slice(0, 150)}...
                      </div>
                      <div className="rv-body p-2">
                        <div className="review-img d-flex justify-content-start">
                          <img src="/porsche-model.png" alt="" />
                        </div>
                        <div className="review-name d-flex justify-content-start p-2 ">
                          Someone
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="review d-flex flex-column ">
          <div className="review-top p-5 d-flex justify-content-start align-items-top">
            What do our user's say ?
          </div>
          <div className="review-bottom px-5 d-flex flex-wrap align-items-center ">
            {reviews.map((rev, index) => (
              <div className={`review-box m-5 p-3 ${col}`}>
                <div key={index} className="rv-top text-center">
                  {rev.slice(0, 150)}...
                </div>
                <div className="rv-body p-2">
                  <div className="review-img d-flex justify-content-start">
                    <img src="/porsche-model.png" alt="" />
                  </div>
                  <div className="review-name d-flex justify-content-start p-2 ">
                    Someone
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

