import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../OtherComp/Userslice';
import images from "./images/login.jpg"

const Login = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }));
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-primary ">My Website</h1>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h1 className="nav-link text-primary ">Home</h1>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='d-flex container '>
                <img className='h-50 w-50' src={images} alt="" />
                <form className='container mt-5 ' onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='text-primary'>LOGIN HERE</h1>
                    <input className='form-control w-75  ' type="text" placeholder=' Enter Your Name' required value={name} onChange={(e) => setname(e.target.value.toUpperCase())} /> <br />
                    <input className='form-control w-75' type="email" placeholder='Enter Your Email' required value={email} onChange={(e) => setemail(e.target.value)} /><br />
                    <input className='form-control w-75' type="password" placeholder='Enter Your Password' required value={password} onChange={(e) => setpassword(e.target.value)} /><br />
                    <button className='btn btn-success w-75'>Login</button>
                </form>

            </div>
        </>
    )
}

export default Login
