
import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>this is cart page: {cart.length}</h1>
            {
                cart.map (tshirt => <p>{tshirt.name}</p>)
            }
        </div>
    );
};

export default Cart;