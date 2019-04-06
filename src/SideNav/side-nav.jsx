import React from 'react';
import {Link} from 'react-router-dom';
import './side-nav.css';

export default function SideNav(props){
    if(props.visible){
        return(
            <div className='sidenav-wrapper'>
                <div className='sidebar-links'>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/something'>Something Else</Link>
                </div>
            </div>
        )
    }
    return null;
}