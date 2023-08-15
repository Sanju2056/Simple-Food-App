import React from 'react'
import { FaSearch } from "react-icons/fa";
import './index.css'
import { useState } from 'react';
const Header = ({setSearchValue,onFilter}) => {
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
            </div>
           
        </div>
    )
}

export default Header