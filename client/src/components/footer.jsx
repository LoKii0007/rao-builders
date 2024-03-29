import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/footer.css"

const Footer = () => {
  const [text, setText] = useState("")
  const companyOptions = [
    { title: "Buy Aggregate", link: "products/aggregate" },
    { title: "Buy Stone dust", link: "products/stone" },
    { title: "Buy Jamuna sand", link: "products/jamuna" },
    { title: "Buy Bricks & Blocks", link: "products/brick" },
    { title: "Buy RMC", link: "products/rmc" },
    { title: "Buy Cement", link: "products/cement" },
    { title: "Buy Steel/TMT Bars", link: "products/steel" },
    { title: "Buy Interlocking Tiles", link: "products/tiles" },]
  const bodyTypeOptions = ["Buy ultratech cement", "Buy Shree cement", "Buy Rathi steel", "buy Jindal Steel", "Buy Kamadhenu steel"]
  const General = [
    {title:"About us", link:"about"},
    {title:"contact us", link:"contact"},
    {title:"Team", link:"team"},
    {title:"FAQ", link:"faq"},
  ]
  const address = [
    {title:"G22H+G73, Block C 1, Palam Vihar, Gurugram,Haryana 122017", link:"faq"},
  ]
  const footerContent = [
    { title: 'General', content: General },
    { title: 'Location', content: address },
    { title: 'Products', content: companyOptions },
    // { title: 'Others', content: bodyTypeOptions },
  ]
  const [collapse, setCollapse] = useState(false)


  const handleEmail = () => {

  }

  const onChange = (e) => {
    setText(e.target.value)
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setCollapse(true)
      } else {
        setCollapse(false)
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
      <div className="footer d-flex flex-column">
        <div className="social p-3 d-flex justify-content-between align-items-center">
          <div className="social-left d-flex justify-content-evenly">
            <div className="social-text text">
              stay connected
            </div>
            <div className="social-links mx-5 d-flex flex-column justify-content-center align-items-center">
              <div className="social-logo  d-flex justify-content-center align-items-center">
                <div className="ig me-3 d-flex justify-content-center align-items-center">
                  <Link className='links-logo' target='blank' to="https://www.instagram.com/youdrivemecrazy_india/" ><i className="fa-brands fa-instagram"></i></Link>
                </div>
                <div className="fb mx-3 d-flex justify-content-center align-items-center">
                  <Link className='links-logo' to="https://www.facebook.com/search/top?q=you%20drive%20me%20crazy%20india" target='blank'><i className="fa-brands fa-facebook"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="social-right d-flex justify-content-evenly">
            <div className="social-email d-flex align-items-center">
              <input onChange={(e) => onChange(e)} value={text} name='email' className='email px-2 ' type="email" placeholder='Enter your email for updates' />
              <label className='signup' htmlFor="email"><button onClick={handleEmail} className='signup px-4'>Sign up</button></label>
            </div>
          </div>
        </div>
        <div className="footer-line">
        </div>
        <div className="main-footer container mt-4 mb-3">
          <div className="footer-body d-flex justify-content-evenly" id='accordian2'>

            {
              footerContent.map((section, index) => (
                <div className="foot-company d-flex flex-column" key={index}>
                  <button
                    className={`foot-head accordion-button ${collapse ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle={collapse ? 'collapse' : ''}
                    data-bs-target={`#collapse${section.title}`}
                    aria-expanded={!collapse ? "true" : "false"}
                    aria-controls={`collapse${section.title}`}
                  >
                    {section.title}
                  </button>

                  {index !== footerContent.length - 1 && collapse ? <hr /> : ""}
                  {!collapse ? <hr /> : ""}
                  <div className='d-flex '>
                    <div className={`accordion-collapse mb-3 collapse ${!collapse ? 'show' : ''} ${section.title === section.title ? "foot-option-selected" : ""} `} id={`collapse${section.title}`} data-bs-parent="#accordian2">
                      {section.content.slice(0, 8).map((option, subIndex) => (
                        <div key={subIndex} className={`mx-1 options ${option === option ? 'option-selected' : ''}`}>
                          <Link className='options' to={`/${option.link}`}>{option.title}</Link>
                        </div>

                      ))}
                    </div>
                    <div className={`accordion-collapse collapse ${!collapse ? 'show' : ''} ${section.title === section.title ? "foot-option-selected" : ""} `} id={`collapse${section.title}`} data-bs-parent="#accordian2">
                      {section.content.slice(9, section.content.length).map((option, subIndex) => (
                        <div key={subIndex} className={`mx-1 options ${option === option ? 'option-selected' : ''}`}>
                          <Link className='options' to={`/${option.link}`}>{option.title}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

          </div>
          <hr />

          <div className="footer-foot my-3 d-flex justify-content-between align-items-center">
            <div className="copyright">copyright © Rao builders</div>
            <div className="design">
              website by Spiderworks
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
