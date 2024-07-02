import React from 'react';
import './Tshirt.css';

const Tshirt = (thirst) => {
     const {name, price, picture} = thirst.thirst;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;