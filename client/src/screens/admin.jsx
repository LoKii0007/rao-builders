import React, { useContext, useState } from 'react'
import NewCar from '../components/newcar'
import { Link, useParams } from 'react-router-dom'
import "../css/admin.css"
import { adminContext } from '../context/admincontext'


const Admin = () => {
  const flag = useParams()
  const context = useContext(adminContext)
  // const {addstaff} = context
  const authToken = localStorage.getItem("token")
  const [addbtn, setaddbtn] = useState(false)
  const [getbtn, setGetbtn] = useState(false)

  const handleAdd = () => {

  }

  const handleUpdate = () => {

  }

  const handleDelete = () => {

  }
  const handleGet = () => {
  }


  if (authToken) {
    return (
      <>
        <div className="admin">
          <div className="add-car">
            <h2 className='pt-5 ms-5 ps-2'>Add new Product</h2>
            <NewCar />
          </div>

          <hr />

          {flag &&
            <div className="staff pb-5 d-flex flex-column">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      All products
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <div className="all-staff">
                        Member 1
                      </div>
                      <div className="all-staff">
                        Member 2
                      </div>
                      <div className="all-staff">
                        Member 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>}

        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="coontainer admin p-5">
          <h2 className='text-center' >you need to login</h2>
          <Link to="/loginscreen"><button className='btn '>Login screen</button></Link>
        </div>
      </>
    )
  }
}

export default Admin
