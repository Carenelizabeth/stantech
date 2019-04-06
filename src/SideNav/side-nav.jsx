import React from 'react';
import './side-nav.css';

export default function SideNav(props){
    if(props.visible){
        return(
            <div className='sidenav-wrapper'>
                <h2>Side Bar</h2>
            </div>
        )
    }
    return null;
}