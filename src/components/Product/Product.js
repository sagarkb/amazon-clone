import React from 'react';

import { useStateValue } from '../../StateProvider';
import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
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
      </div>
      <img src={image} alt='Product' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
