import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>

        <div className='header_search'>
            <input className='header_searchInput' type='text' />
            {/* <SearchIcon className='header_searchIcon'/> */}
        </div>

        <div className='header_nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionlineTwo'>Sign In</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionlineTwo'>& Orders</span>

            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>user</span>
                <span className='header__optionlineTwo'>Prime</span>

            </div>
        </div>
    </div>
  )
}

export default Header