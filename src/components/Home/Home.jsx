import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const thirsts = useLoaderData();
    return (
        <div>
            {
                thirsts.map(thirst => <Tshirt
                    key={thirst._id}
                    thirst={thirst}
                ></Tshirt>)
            }
        </div>
    );
};

export default Home;