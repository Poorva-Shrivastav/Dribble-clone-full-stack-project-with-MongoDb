import React, {useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Grid from '../components/grid/Grid';
import axios from 'axios';
import Images from '../components/grid/Images';

function Home() {

    const [home, setHome] = useState('')

    return (
        <div>
            <Navbar />
            <Banner />
            <Grid />
            <Images />
            
        </div>

    )
}

export default Home;
