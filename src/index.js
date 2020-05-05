import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRender from './navbarRender';
import CardRender from './cardRender'

ReactDOM.render(<NavbarRender />, document.getElementById('navbar-render'));
ReactDOM.render(<CardRender></CardRender>, document.getElementById('card-render'))
