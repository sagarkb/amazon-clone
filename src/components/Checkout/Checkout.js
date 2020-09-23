import React from 'react';

import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__image'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='ad...'
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket.To buy one click "Add to Basket"
              next to the item on homepage
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your shopping Cart</h2>

            {basket?.map((item) => (
              <CheckoutProduct
                key={Math.random()}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout_right'>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
