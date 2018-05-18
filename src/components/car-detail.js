import React, {Component} from 'react';
import {HashRouter as Router,Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {dodajKomentar}from '../store/actions';

class CarDetail extends Component {

    renderComments(){
        if(!this.props.car){
            return <li>Loading...</li>
        }
        return this.props.car.comm.map(com=>{
            return(
                <div>
                    {com}<hr/>
                </div>
            )      
        })
    }

    render(){
        if(!this.props.car){
            return <li>Loading...</li>
        }
        return(
            <div >
                <div className="levi">
                <h3> Podaci o automobilu:</h3> <br/>
                     <div className="classDetail">
                        Proizvodjac: {this.props.car.name}<br/>
                        Model: {this.props.car.model}<br/>
                        Vrsta goriva: {this.props.car.fuel}<br/>
                        Kubikaza: {this.props.car.engine}cm3<br/>
                        Broj vrata: {this.props.car.numDoors}<br/>
                        <strong>Cena: {this.props.car.price}e</strong><br/>
                        <br/><br/><Link className="LinkCar" to='/salon'>Vrati se nazad</Link><br/><br/>
                    </div>
                </div>
                <div className="divKomentari">
                   <h3> Komentari:</h3> <br/>
                   <div className="komentari">
                       {this.renderComments()}
                   </div>
                    <textarea id="textarea" rows="4" cols="60"/><br/>
                    <button onClick={()=>this.props.dodajKomentar(this.props.car.id,
                    this.props.car.name,
                    this.props.car.model,
                    this.props.car.fuel,
                    this.props.car.engine,
                    this.props.car.price,
                    this.props.car.numDoors,
                    this.props.car.comm)} className="btn btn-info">Dodaj komentar</button>
                </div>
            </div>
        )
    }

}

function MapStateToProps(state){
    return {
        car: state.carDetail
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({
        dodajKomentar:dodajKomentar
    },dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(CarDetail);