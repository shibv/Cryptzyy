import React from 'react'
import Logo from '../../assets/logo.png';
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ themeStatus, onSetTheme }) => {
    const watchListCoins = useSelector(state => state.cart);
    const navigate = useNavigate();
    return (
        <nav className=' flex items-center justify-around h-16 shadow-[0_3px_8px_rgba(0,0,0,0.24)] '>
            <div className='flex items-center'>
                <img className='h-8 w-8' src={Logo} alt="" />
                <h2 className='text-2xl  font-bold '> Cryptzy </h2>
            </div>

            <div className='flex items-center gap-4'>
            {
                themeStatus ? <GoSun className='text-3xl cursor-pointer' onClick={onSetTheme} /> : <IoMoonOutline className='text-3xl cursor-pointer' onClick={onSetTheme} />
            }
             <span  onClick={() => navigate('/watchlistcoins')} className='bg-[#001e3c] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-blue-gray-700 '>
         WatchList ({watchListCoins.length})
    </span>
   
            </div>

        </nav>
    )
}

export default Navbar
