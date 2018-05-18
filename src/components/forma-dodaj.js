import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {dodaj, requestForAdd} from '../store/actions/index';
import {addCar} from '../api';

class FormaDodaj extends Component {

    render() {
        return (
            <div>
                <Link to='/'>Vrati se na pocetnu stranu</Link><br/><br/>
                <h2 className="h2">Unesite informacije o novom automobilu u salonu: </h2><br/><br/>
                    <div className="Kontejner">
                        <div className="row">
                            <div className="col25">
                                Proizvodjac:
                            </div>
                            <div className="col75">
                                <input id="name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col25">
                                Model:
                            </div>
                            <div className="col75">
                                <input id="model"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col25">
                                 Vrsta goriva: 
                            </div>
                            <div className="col75">
                            <input type="radio" id="gorivo" value="Benzin"/> Benzin
                                        <input type="radio" id="gorivo" value="Dizel"/> Dizel
                                        <input type="radio" id="gorivo" value="Plin"/> Plin 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col25">
                                Kubikaza(cm3):
                            </div>
                            <div className="col75">
                                <input id="kubikaza"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col25">
                                Broj vrata: 
                            </div>
                            <div className="col75">
                                 <input type="number" id="brVrata" min="2" max="5"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col25">
                                 Cena(e):
                            </div>
                            <div className="col75">
                                 <input id="cena"/>
                            </div>
                        </div>
                        <div className="row">
                        <button className="btn btn-primary" onClick={()=>addCar()}>Dodaj automobil</button>
                        </div>
                    </div>
            </div>
        );
    }
}

// export default FormaDodaj;
export default FormaDodaj;