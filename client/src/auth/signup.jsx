import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createuser } from '../services/authapi';

export default function Signup() {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await createuser(credentials)

        if (res) {
            console.log(res.authToken)
            localStorage.setItem("token", res.authToken)
            navigate("/")
        }

        setcredentials({
            name: "",
            email: "",
            password: "",
            phone:"",
        })
    }

    const onchange = (e) => {
        setcredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" name='name' onChange={onchange} value={credentials.name} className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' onChange={onchange} value={credentials.email} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' onChange={onchange} value={credentials.password} minLength={5} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="number" name='phone' onChange={onchange} value={credentials.phone} className="form-control" id="phone" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
