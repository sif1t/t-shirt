import React from 'react';

const Tshirt = (thirst) => {
     const {name, price, picture} = thirst.thirst;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;