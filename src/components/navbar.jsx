import React, { Component } from 'react';
import logo from '../logo.svg'

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <img src={logo} className="App-logo" alt="logo"/>
        <span class="invisible">Spread</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="#!">Hmm</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#!">no</a>
            </li>
            </ul>
        </div>
        </nav>
        );
    }
}

export default NavBar;