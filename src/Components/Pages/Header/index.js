import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import './index.css'
import { userContext } from '../../../Provider';
// import { useState } from 'react';
const Header = ({onFilter}) => {
    const {cost,setSearchValue} = useContext(userContext)
    const SearchMenu = () =>{
        onFilter();
    }
    return (
        <div className='header-container'>
            <div className='hc-box-1'>
                <p className='h-text'>N<span className='span-tag'>b</span>ot C<span className='span-tag'>a</span>fe</p>
                <div className='search-bar'>
                    <input
                        className='sb-input'
                        placeholder='Search for food...'
                        onChange={(e) => { setSearchValue(e.target.value) }}
                    />
                    <FaSearch className='sb-icon' onClick={SearchMenu} />
                </div>
                <p className='total-text'>Total : {cost}</p>
            </div>
           
        </div>
    )
}

export default Header