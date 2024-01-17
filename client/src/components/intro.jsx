import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
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

    // -------------animation------------------

    useEffect(() => {

        gsap.to(".portfolio-img", {
            y: 0,
            duration: 1,
            ease: "back",
            opacity: 1
        })
    }, [])


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
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="intro-foot px-5 py-4 d-flex align-items-center justify-content-evenly">
                    <div className="foot1 d-flex">
                        <div className="foot-icon mx-5 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="foot-desc">
                            <h5>UNBEATABLE PRICES</h5>
                            <h6>At Raobuilders, we guarantee <br /> unbeatable prices on the highest <br /> quality building material.</h6>
                        </div>
                    </div>
                    <div className="foot2 d-flex middle">
                        <div className="foot-icon mx-5 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-stopwatch "></i>
                        </div>
                        <div className="foot-desc ">
                            <h5>ON TIME DELIVERY </h5>
                            <h6>At Raobuilders,we assure <br /> that we make on- time deliveries <br /> to all the orders we take from our customers..</h6>
                        </div>
                    </div>
                    <div className="foot3 d-flex">
                        <div className="foot-icon mx-5 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-medal "></i>
                        </div>
                        <div className="foot-desc">
                            <h5>AUTHORIZED DEALER</h5>
                            <h6>Discover top-notch building <br /> materials at BuildingSuppliesPro—your <br /> trusted authorized dealer. </h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Intro
