import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import '../css/intro.css'


const Intro = () => {

    const navigate = useNavigate()
    const [text, setText] = useState("")

    const onchange = (e) => {
        setText(e.target.value)
    }

    const handleClick = (e) => {
        navigate("/collection", { state: { searchText: text } })
    }

    const handleClickSell = (e) => {
        navigate("/sell")
    }

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            navigate("/collection", { state: { searchText: text } })
        }
    }


    return (
        <>
            <div className="intro d-flex flex-column">

                <div className="bg-carousel d-flex align-items-center justify-content-center">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/bg-aggregate.webp" className="bg-img d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/bg-bricks.webp" className="bg-img d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/bg-sand.webp" className="bg-img d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/bg-stone.webp" className="bg-img d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="intro-foot px-5 py-5 d-flex align-items-center justify-content-evenly">
                    <div className="foot1 d-flex">
                        <div className="foot-icon mx-5 d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="foot-desc">
                            <h5><span style={{color:"orange"}}>Unbeatable</span> prices</h5>
                            <h6>At Raobuilders, we guarantee unbeatable prices on the highest quality building material.</h6>
                        </div>
                    </div>
                    <div className="foot2 d-flex middle">
                        <div className="foot-icon mx-5 d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-stopwatch "></i>
                        </div>
                        <div className="foot-desc ">
                            <h5><span style={{color:"orange"}}>On time</span> delivery </h5>
                            <h6>At Raobuilders,we assure that we make on- time deliveries to all the orders we take from our customers..</h6>
                        </div>
                    </div>
                    <div className="foot3 d-flex">
                        <div className="foot-icon mx-5 d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-medal "></i>
                        </div>
                        <div className="foot-desc">
                            <h5><span style={{color:"orange"}}>Authorized</span> dealer</h5>
                            <h6>Discover top-notch building materials at Rao builders your trusted authorized dealer. </h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Intro
