import React, {Component} from 'react';
import {HashRouter as Router,Route, Link,BrowserRouter} from 'react-router-dom';

class Pocetna extends Component {

    render(){
        return(
                <div class='pocetna'>
                    <div className='glavniZaDugmad'>
                        <button class='btn btn-info'><Link className='link' to='/salon'> Prikazi sve</Link></button>
                        <button class='btn btn-info'><Link className='link' to='/dodaj'> Dodaj automobil</Link></button>
                        <button class='btn btn-info'><Link className='link' to='/brisi'> Izbrisi automobil</Link></button>
                    </div>
                </div>
        )
    }

}

export default Pocetna;