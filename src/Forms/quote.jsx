import React from 'react';

export default function Quote(props){
    return(
        <div className="quote-form-wrapper form-wrapper">
            <form>
                <h2>Fill out this form to receive a free quote</h2>
                <input type="text"></input>
                <input type="text"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}