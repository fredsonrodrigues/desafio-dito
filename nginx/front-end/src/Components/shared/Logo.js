import React, { Component } from 'react';
import logo from '../../Assets/img/logo.svg';

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export {Logo};