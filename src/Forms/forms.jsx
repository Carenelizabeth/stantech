import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Quote from './quote';
import Career from './career';
import './forms.css';

export default function Forms(props){
    return(
        <div className="form-page">
            <Switch>
                <Route exact path='/form/quote' component={Quote} />
                <Route exact path='/form/employment' component={Career} />
            </Switch>
        </div>
    )
}