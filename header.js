import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class ComponentName extends Component{
    render(){
        return(
            <header className="header__main">
                <nav className="">
                    <li className="nav__item">
                        <Link to="/">home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/users">Users</Link>
                    </li>
                </nav>
            </header>
        );
    }
}
