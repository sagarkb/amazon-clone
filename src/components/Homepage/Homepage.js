import React from 'react';

import Product from '../Product/Product';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
      <img
        className='homepage__image'
        src='https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg'
        alt=''
      />

      <div className='homepage__row'>
        <Product
          id={Math.random()}
          title='Apple iPhone 11 Pro Max (256GB) - Silver'
          image='https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg'
          rating={5}
          price={'1,31,900'}
        />
        <Product
          id={Math.random()}
          title='Samsung Galaxy Note 10+ (Aura Glow, 12GB RAM, 256GB Storage)'
          image='https://images-na.ssl-images-amazon.com/images/I/71G1FCIP1EL._SL1500_.jpg'
          rating={3}
          price={'84,200'}
        />
      </div>
      <div className='homepage__row'>
        <Product
          id={Math.random()}
          title='Casio G-shock White Dial Smartwatch G-squad Series for Men with Heart Rate Monitor + Gps Fuction + Solar Powered - GBD-H1000-1A7DR (G1035)'
          image='https://images-na.ssl-images-amazon.com/images/I/61oCN53%2BNsL._UL1200_.jpg'
          rating={4}
          price={'39,995'}
        />
        <Product
          id={Math.random()}
          title='Emporio Armani Analog Black Dial Mens Watch - AR60008'
          image='https://images-na.ssl-images-amazon.com/images/I/81917GAvZSL._UL1500_.jpg'
          rating={4}
          price={'29,995'}
        />
        <Product
          id={Math.random()}
          title='Diesel Analog Black Dial (Big dial) Mens Watch-DZ7395'
          image='https://images-na.ssl-images-amazon.com/images/I/91sHbYZvz%2BL._UL1500_.jpg'
          rating={5}
          price={'28,295'}
        />
      </div>
      <div className='homepage__row'>
        <Product
          id={Math.random()}
          title='Nike Mens Zoom All Out Flyknit Running Shoes'
          image='https://images-na.ssl-images-amazon.com/images/I/61ZTzOJOXFL._UL1012_.jpg'
          rating={5}
          price={'10,577'}
        />
        <Product
          id={Math.random()}
          title='Adidas Mens Ultraboost S.RDY FTWWHT/CBLACK/SIGPNK Running Shoe (FW9771)'
          image='https://images-na.ssl-images-amazon.com/images/I/71-AAfWC4yL._UL1500_.jpg'
          rating={3}
          price={'18,990'}
        />
        <Product
          id={Math.random()}
          title='Puma BMW M Motorsport RS-Cube Shoes'
          image='https://images-na.ssl-images-amazon.com/images/I/81quPWso1%2BL._UL1500_.jpg'
          rating={4}
          price={'9,999'}
        />
        <Product
          id={Math.random()}
          title='Reebok Womens Zig Kinetica Running Shoes'
          image='https://images-na.ssl-images-amazon.com/images/I/71wfXwZVz1L._UL1500_.jpg'
          rating={4}
          price={'7,199'}
        />
      </div>
      <div className='homepage__row'>
        <Product
          id={Math.random()}
          title='ASUS ZenBook Pro Duo UX581 Intel Core i7 9th Gen 15.6" 4K UHD OLED Touchscreen Laptop (32GB RAM/1TB NVMe SSD/Windows 10/GeForce RTX 2060 Graphics/ScreenPad Plus/Celestial Blue/2.5 Kg), UX581GV-H7201T'
          image='https://images-na.ssl-images-amazon.com/images/I/91VR2ZXL9LL._SL1500_.jpg'
          rating={5}
          price={'2,27,630'}
        />
      </div>
    </div>
  );
};

export default Homepage;
