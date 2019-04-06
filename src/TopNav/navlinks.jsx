import React from 'react';
import {Link} from 'react-router-dom';

export function Navlinks(props){
    return(
        <div className='navlinks'>
            <Link to='/form/quote'>Get Quote</Link>
            <Link to='/form/employment'>Careers</Link>
        </div>
    )
}