import React from 'react';
import logo from '../assets/images/logo.svg';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv  } from "react-icons/hi2";
import { HiPlus, HiDotsvertical } from "react-icons/hi";


function Header() {
    const menuItems = [
        { name: 'Home', icon: <HiHome /> },
        { name: 'Search', icon: <HiMagnifyingGlass /> },
        { name: 'Watchlist', icon: <HiStar /> },
        { name: 'Originals', icon: <HiPlayCircle /> },
        { name: 'Movies', icon: <HiTv /> },
    ];
    return (
        <img src="{logo}" className='w-[80px] md:w-[115px] object-cover' />
    );
}

export default Header;