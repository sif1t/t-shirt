import React from 'react';
import './Tshirt.css';

const Tshirt = (thirst) => {
     const {name, price, picture} = thirst.thirst;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;





