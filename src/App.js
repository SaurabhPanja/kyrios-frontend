import React from 'react';
import NavbarRender from './navbarRender';
import CardRender from './cardRender'
import SellButton from './sellButton'

class Appp extends React.Component {
    // state = {  }
    render() { 
        return (  
            <>
            <NavbarRender />
            <CardRender />
            <SellButton />
            </>
        );
    }
}
 
export default Appp;