
import React from 'react';
import './Cart.css';


const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <h2 className='aqua'>Your cart is empty😒</h2>
    }
    else {
        message = <div>
            <h3>Boroloxxxx</h3>
            <p><small>Thanks for giving your money😎</small></p>
        </div>
    }
    return (
        <div className='cart'>
            <h2 className={cart.length === 1 ? 'aqua2' : 'aqua4'}>Add To cart: {cart.length}</h2>
            <p className={`bold bordered ${cart.length===3 ? 'aqua2': 'aqua3'}`}>something</p>
            {cart.length > 2 ? <span className='aqua3'>আরও কিনলে বুজবো তুমি বড়োলোক💲💵</span> : <span className='aqua2'>ফকির দূরে গিয়া মর😏😡 </span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={ () => handleRemoveFromCart (tshirt._id)}
                >x</button></p>)
            }
            {
                cart.length === 2 && <p className='aqua4'>আর একটা কিনলে বুজবো তুমি বড়োলোক💲💵</p>
            }
            {
                cart.length === 3 || <p className='aqua5'>৩ টা হোল  না 😏😡</p>
            }
        </div>
    );
};

export default Cart;

/** 
 * Conditional rendering
 * 1.use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? true : false
 * 3. logical &&: (if the condition is true then the right side will be displayed)
 * 3. logical ||: (if the condition is false then the right side will be displayed)
 **/

/**
 * Conditional Css class
 * 1. use ternary operator
 * 2. ternary inside template string
 */