import React, { useEffect, useState } from 'react'
import "../css/review.css"

export default function Review() {
  const [items, setItems] = useState(true)
  const [col, setCol] = useState("col-6")

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
      if(window.innerWidth > 1000) {
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
                      "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
                  <div className="review-box m-5 p-3">
                    <div className="rv-top text-center">
                      "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
                <div className="carousel-item">
                  <div className="review-box m-5 p-3">
                    <div className="rv-top text-center">
                      "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
            <div className={`review-box m-5 p-3 ${col}`}>
              <div className="rv-top text-center">
                "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
            <div className={`review-box m-5 p-3 ${col}`}>
              <div className="rv-top text-center">
                "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
            <div className={`review-box m-5 p-3 ${col}`}>
              <div className="rv-top text-center">
                "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
            <div className={`review-box m-5 p-3 ${col}`}>
              <div className="rv-top text-center">
                "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
            <div className={`review-box m-5 p-3 ${col}`}>
              <div className="rv-top text-center">
                "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
            <div className={`review-box m-5 p-3 ${col}`}>
              <div className="rv-top text-center">
                "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
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
        </div>
      </>
    )
  }
}

