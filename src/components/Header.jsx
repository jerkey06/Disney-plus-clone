import React from 'react';
import logo from '../assets/images/logo.svg';

function Header() {
    return (
        <img src="{logo}" className='w-[80px] md:w-[115px] object-cover' />
    );
}

export default Header;