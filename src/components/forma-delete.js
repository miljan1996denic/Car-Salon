import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {requestData, deleteData,searchCar} from '../store/actions';
import {Link}from 'react-router-dom';

class CarDelete extends Component {
    componentDidMount(){
        this.props.ucitajPodatke();
    }

    render() {
        return (
            <div>
                 <Link className="LinkDelete" to='/'>Vrati se na pocetnu stranu</Link>
                 <div className="pretragaBrisanje">
                    <label><h3>Pretrazi: </h3> </label>
                    <input onChange={this.props.searchCarFromInput }/>
                        <div>
                            {this.renderCars()}
                        </div>
                </div>
            </div>
        );
    }

    renderCars(){
        if(!this.props.cars)
        {
            return <div>Loading...</div>
        }
        return this.props.cars.map(car=>{
            console.log(car);
            return(
                    <div key={car.id} className="divZaBrisanje">
                        Proizvodjac: {car.name}<br/> 
                        Model: {car.model}<br/> 
                        Vrsta goriva: {car.fuel}<br/>
                        Kubikaza: {car.engine}<br/>
                        Broj vrata:{car.numDoors}<br/>
                        Cena: {car.price}<br/>
                        <button className="btn btn-info" onClick={()=>{this.props.izbrisiAutomobil(car.id)}}>Izbrisi</button><br/>
                    </div>
                )
        })
    }
}


function MapStateToProps(state){
    return {
        cars:state.cars
    }       
}
function MapDispatchToProps(dispatch){
    return bindActionCreators({
        ucitajPodatke:requestData,
        searchCarFromInput:searchCar,
        izbrisiAutomobil:deleteData
    },dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(CarDelete);