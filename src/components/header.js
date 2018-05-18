import React, {Component} from 'react';
import {HashRouter as Router,Route, Link} from 'react-router-dom';
import Salon from './salon';

class Header extends Component {

    render(){
        return(
            <div>
               <Link className='link' to='/'>
               <header >  Salon automobila</header></Link>
           </div>
        )
    }

}

export default Header;