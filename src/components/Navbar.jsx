import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {cart} = useSelector((state) => state);
    return(
        <div className="mx-auto bg-slate-900">
            <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to='/'>
                    <div className="ml-6">
                        <img src={logo} className="h-14" alt="logo"/>
                    </div>
                </NavLink>
                <div className="flex flex-row gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium items-center">
                    <NavLink to='/'><p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">Home</p></NavLink>
                    <NavLink to='/cart'><div className="relative"><FaShoppingCart className="text-2xl hover:text-green-400"/>
                    {
                      cart.length > 0 &&
                      <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">{cart.length}</span>
                    }
                    </div></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar