
import React from 'react';


const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <h2>Your cart is empty😒</h2>
    }
    else {
        message = <div>
            <h3>Boroloxxxx</h3>
            <p><small>Thanks for giving your money😎</small></p>
        </div>
    }
    return (
        <div>
            <h2>Add To cart: {cart.length}</h2>
            {cart.length > 2 ? <span>আরও কিনলে বুজবো তুমি বড়োলোক💲💵</span> : <span>ফকির দূরে গিয়া মর😏😡 </span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={ () => handleRemoveFromCart (tshirt._id)}
                >x</button></p>)
            }
        </div>
    );
};

export default Cart;

/** 
 * Conditional rendering
 * 1.use if else to set a variable that will contain an element, components
 * 2. ternary: condition ? true : false
 **/