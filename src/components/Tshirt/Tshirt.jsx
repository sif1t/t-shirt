import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, handleAddToCart }) => {
   const { name, price, picture ,gender} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
             <p>{gender}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;





