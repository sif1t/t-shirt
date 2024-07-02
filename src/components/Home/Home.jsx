import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
      const thirsts = useLoaderData();
    return (
        <div>
            <h1>This is Home page: {thirsts.length} </h1>
        </div>
    );
};

export default Home;