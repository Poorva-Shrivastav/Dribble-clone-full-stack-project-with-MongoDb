import {React, Component, useState } from 'react';
import { useHistory } from 'react-router';
import { MenuItems } from './MenuItems';
import logo from '../../images/logo.png';
import './Navbar.css';
import Button from '../button/Button'

const SigninNavbar = () => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = (e) => {
        setClicked(e.target);
    }

    const history = useHistory();

    const uploadHandler = () =>{ 
      let path = `/signup`; 
      history.push(path);
    }


    return(
            <div className="navbar-items">
                <img className="logo" src={logo}  alt="logo"/>
                <div className="menu-icon" onClick={clickHandler}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={clicked ? 'navmenu active' : 'navmenu'}>
                    {
                        MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.link} href={item.url}>{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='spacekill'></div>
                <div className="search-sign-items">
                    <a href="https://google.com"><i class="fas fa-search"></i></a>
                    {/* <label id="upload" onClick={uploadHandler}>Sign in</label> */}
                    <div class="button"> 
                        <Button onClick={uploadHandler}>Upload</Button>
                    </div>
                    
                </div>
               
            </div>
        )
    // }
}

export default SigninNavbar;