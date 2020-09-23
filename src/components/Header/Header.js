import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStateValue } from '../../StateProvider';
import './Header.css';

const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__image'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon'
        />
      </Link>
      <div className='header__searchbar'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to='/login ' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineone'>Hello</span>
            <span className='header__optionLinetwo'>SignIn</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineone'>Return</span>
            <span className='header__optionLinetwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineone'>Your</span>
            <span className='header__optionLinetwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon className='header__shoppingBasket' />
            <span className='header__optionLinetwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
