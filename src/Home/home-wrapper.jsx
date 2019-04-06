import React from 'react';
import HomeContent from './home-content';
import './home.css';

export default function HomeWrapper(props){
    return(
        <div className="home-wrapper">
            <HomeContent></HomeContent>
        </div>
    )
}