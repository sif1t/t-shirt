import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../../Cart/Cart';
import './Home.css';
const Home = () => {
    const thirsts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = thirsts => {
        console.log(thirsts);
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    thirsts.map(thirst => <Tshirt
                        key={thirst._id}
                        thirst={thirst}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;
