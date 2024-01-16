import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import '../css/navbar.css'

const Navbar = () => {
    const url = "http://localhost:5173"

    const [scrolled, setScrolled] = useState(false);
    const navbarItems = [
        { title: "Home", link: "" },
        { title: "All Products", link: "collection" },
        { title: "Aggregate", link: "Aggregate" },
        { title: "Stone dust", link: "stone" },
        { title: "Jamuna sand", link: "jamuna" },
        { title: "Bricks & Blocks", link: "brick" },
        { title: "RMC", link: "rmc" },
        { title: "Cement", link: "cement" },
        { title: "About Us", link: "about" },
        { title: "Team", link: "team" },
        { title: "Steel/TMT Bars", link: "steel" },
        { title: "Interlocking Tiles", link: "tiles" },
    ]
    const navigate = useNavigate()

    useEffect(() => {
        const tl = gsap.timeline()

        tl.to(".nav-items", {
            y: 0,
            ease: "back.in",
            duration: 1,
            stagger: 0.07
        })
    })

    const handleNav = (nav) => {
        navigate("/" + nav.link)
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > window.innerHeight;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='custom-nav'>

                <div className={`custom-navbar d-flex justify-content-around align-items-center ${scrolled ? "scrolled" : ""} `} >
                    <div className={`navbar-left ms-5 d-flex flex-row ${scrolled ? "scrolled-items" : ""}`}>
                        <div className="logo-name ms-2 nav-items">
                            <Link to="/" className=""><img className='logo-image' src="/logo.png" alt="image" /></Link>
                        </div>
                    </div>
                    <div className="navbar-mid d-flex align-items-center">
                        <div className="call-icon contact-icons px-4 py-3">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className="contact-text ">
                            <a className='text-left mx-4' href="tel:+919560003717">
                                (+91) 95600 03717
                            </a>
                            <a className='text-left' href="tel:+919560003717">
                                (+91) 95600 03717
                            </a>
                        </div>
                    </div>
                    <div className={`navbar-right me-5 d-flex  ${scrolled ? "scrolled-items" : ""}`}>
                        <div className="nav-item d-flex ">
                            <div className="nav-items me-3">
                                <Link to="/" className={`nav-items ${window.location.href === url + "/" ? "active" : ""}`}>Home</Link>
                            </div>
                        </div>
                        <button id='cross' className="menu d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >
                            <i className="fa-solid fa-bars nav-items"></i>
                        </button>
                    </div>
                </div>

                <div className="sticky-top custom-navbar-2 d-flex py-3 justify-content-center">
                    <div className="itm-2 me-5">Aggregate</div>
                    <div className="itm-2 me-5">Stone dust</div>
                    <div className="itm-2 me-5">Jamuna sand</div>
                    <div className="itm-2 me-5">Bricks & Blocks</div>
                    <div className="itm-2 me-5">RMC</div>
                    <div className="itm-2 me-5">Cement</div>
                    <div className="itm-2 me-5">Steel/TMT Bars</div>
                    <div className="itm-2">Interlocking Tiles</div>
                </div>

                {/* menubar */}

                <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header d-flex justify-content-end">
                        <button type="button" className="btn-close canva-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {navbarItems.map((item, index) => (
                            <>
                                <div onClick={() => handleNav(item)} key={item} className="canvas-items mx-3">
                                    <Link className={`canva-item `} data-bs-dismiss="offcanvas" aria-label="Close" >{item.title}</Link>
                                </div>
                                {index !== navbarItems.length - 1 ? <hr /> : ""}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar