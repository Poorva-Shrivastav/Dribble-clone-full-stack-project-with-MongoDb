import React, {useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Grid from '../components/grid/Grid';
import axios from 'axios';


function Home() {

    const [home, setHome] = useState('')

    // useEffect(() => {
    //     homePage();
    // },[home])

    // const homePage = async() =>{
    //     const response = await fetch('/home');
    //     const home = await response.json()
    //         // .then(setHome(home))
    //     if(response.status !== 200) throw Error(home.message);
    //     // return home;
    //     setHome(home)
    // }

    // function HomePage() {
    //     axios.get("http://localhost:4000/",  { crossdomain: true })
    //     .then(response => response.json())
    //     .then(setHome(home))
          
    //   }

    return (
        <div>
            <Navbar />
            <Banner />
            <Grid />
            
        </div>

    )
}

export default Home;
