import React from 'react';

import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className='checkoutproduct'>
      <img className='checkoutproduct__image' src={image} alt='product' />
      <div className='checkoutproduct__info'>
        <p className='checkoutprroduct__title'>{title}</p>
        <p className='checkoutproduct__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={Math.random()}>
                <span role='img' aria-label='star'>
                  ⭐
                </span>
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
