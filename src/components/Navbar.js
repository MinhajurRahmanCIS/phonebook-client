import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(authContext);

    const handelLogout = () => {
        logout();
    };

    const menu =
        <>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/contacts'>Contact</Link></li>
        </>;
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <button className="btn btn-ghost text-xl"> Phone Book</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={handelLogout} className="btn">Logout</button> :
                            <div className='flex gap-2'>
                                <Link to='/login' className="btn">Login</Link>
                                <Link to='/signup' className="btn">Signup</Link>
                            </div>

                }
            </div>
        </div>
    );
};

export default Navbar;