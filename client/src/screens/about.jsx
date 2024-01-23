import React, { useEffect } from 'react'
import "../css/about.css"
import Fixed from '../components/fixed'

export default function About() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <div className="about  d-flex flex-column ">
        <div className="about-top pt-4 d-flex justify-content-center align-items-top">
          About Our Company
        </div>
        <div className="about-bottom my-5 d-flex flex-column justify-content-start align-items-center ">

          <div className="about-box container px-5 pb-4">
            <div className="box-top text-left">
              Our Story
            </div>
            <div className="box-body pt-4 ">
              In 2005, a visionary entrepreneur named Ramjilal embarked on a journey that would redefine the landscape of the construction industry. Armed with a passion for quality and a keen understanding of the importance of reliable building materials, Ramjilal founded Rao Builders with a vision to revolutionize the way structures were erected. <br />  <br />

              Having spent years in the construction sector, Ramjilal witnessed firsthand the challenges faced by builders and contractors in sourcing dependable materials. Determined to fill this void, he set out to create a company that would not only supply top-notch building materials but also establish itself as a beacon of trust and innovation. <br />  <br />

              Ramjilal's journey began with a small warehouse and a handful of dedicated employees who shared his vision. With a commitment to customer satisfaction and a focus on forging strong relationships within the industry, Rao Builders quickly gained a reputation for providing quality products and unparalleled service.
            </div>
          </div>

          <div className="about-history py-5 d-flex justify-content-start align-items-center ">
            <div className="history-box container px-5">
              <div className="history-top text-left">
                Our Mission
              </div>
              <div className="history-body pt-4 ">
                At <span style={{ color: "#ff8000" }}>Rao Builders</span>, our mission is to empower builders, contractors, and homeowners by providing top-quality building materials that inspire creativity, ensure durability, and contribute to sustainable construction. We are committed to being the trusted partner in the construction industry, delivering excellence in service, innovative solutions, and a diverse range of high-performance materials. <br /> <br /> Our goal is to contribute to the success of every construction project, fostering enduring relationships with our customers and promoting a culture of integrity, reliability, and environmental responsibility. At Rao Builders, we don't just sell building materials; we build foundations for a stronger, more resilient future.
              </div>
            </div>
          </div>

          <div className="about-sh py-5 d-flex justify-content-start align-items-center ">
            <div className="sh-box container px-5">
              <div className="sh-top text-left">
                Our Showroom
              </div>
              <div className="sh-img">
                <img src="/porsche-model.png" alt="" />
              </div>
              <div className="sh-footer mt-5 text-center">
                <a href="https://maps.app.goo.gl/9RLA4SPRFDJfMhPu5" className='sh-btn px-5 py-2'  target='blank'>Visit us</a>
              </div>
            </div>
          </div>

        </div>

      </div>

      <Fixed />
    </>
  )
}

