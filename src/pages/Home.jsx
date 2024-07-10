import React from 'react'
import Carousel from "../components/Carousel";
import Products1 from "../components/Products1";
import Discounts from "../components/Discounts";
import Chart from "../components/Chart";
import Products2 from "../components/Products2";
import Products3 from "../components/Products3";

const Home = () => {
    return (
        <div>
            <Carousel />
            <Products1 />
            <Discounts />
            <Chart />
            <Products2 />
            <Products3 />
        </div>
    )
}

export default Home
