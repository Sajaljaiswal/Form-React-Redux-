import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../OtherComp/Userslice';
import images from "./images/logout.jpg"

const Logout = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const HandleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-primary" >My Website</h1>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h1 className="nav-link " >Home</h1>
                            </li>
                        </ul>
                        <span className='mr-3 '>{user.name}</span>&nbsp;&nbsp;<i className='fas fa-user-alt'></i> &nbsp;&nbsp;
                        <button className='btn btn-warning' onClick={(e) => HandleLogout(e)}>Logout</button>
                    </div>
                </div>
            </nav>

            <div className="card text-center mt-4">
                <h1 className="card-header text-primary ">
                    WELCOME TO EMINDS
                </h1>
                <div className="card-body">
                    <h5 className="card-title">You Have Successfully Loged In!!</h5>
                    <p className="card-text">You can explore more here.</p>
                </div>
                <img className='h-50 w-100 ' src={images} alt="" />
            </div>

        </>
    )
}

export default Logout
