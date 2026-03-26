import React from 'react';
import Logo from '../../assets/logo.png'
import DollarImg from '../../assets/dollar.png'


const Navbar = ({coin}) => {
    return (
        <div className='flex justify-between p-5 container mx-auto'>
                <img src={Logo} />
                <div className='flex items-center gap-5'>
                  <ul className='flex gap-12'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Fixture</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Schedule</a></li>
                  </ul>
                  <button className='btn flex'>{coin} Coins <img src={DollarImg}/></button>
                </div>
        </div>
    );
};

export default Navbar;