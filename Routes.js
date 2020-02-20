import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';


class Routes extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component ={Home}/>
                <Route exact path="/" component ={Users}/>
            </div>
        );
    }
}

export default withRouter(Routes);