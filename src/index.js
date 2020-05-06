import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarRender from './navbarRender';
// import CardRender from './cardRender'
// import SellButton from './sellButton'

// ReactDOM.render(<NavbarRender />, document.getElementById('navbar-render'));
// ReactDOM.render(<CardRender></CardRender>, document.getElementById('card-render'))
// ReactDOM.render(<SellButton></SellButton>, document.getElementById('sell-button'))

ReactDOM.render(<App/>, document.getElementById("root"))