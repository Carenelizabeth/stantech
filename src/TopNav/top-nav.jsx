import React from 'react';
import {Navlinks} from './navlinks';
import './top-nav.css';

export default function TopNav(props){
    return(
        <div className='top-nav-wrapper'>
            <button type="button" onClick={props.onClick}>Menu</button>
            <Navlinks></Navlinks>
        </div>
    )
}