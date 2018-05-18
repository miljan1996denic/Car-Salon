import React, {Component} from 'react';
import {HashRouter as Router,Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCar, selectCar, searchCar, requestData } from '../store/actions';

class Salon extends Component {

    componentDidMount(){
        this.props.ucitajPodatke();
    }
    // constructor(props){
    //     super(props);
    //     this.state={
    //         ime:"Izaberi automobil"
    //     }
    // }

    render(){
        return(
        <div>
            <Link className="LinkSalon" to='/'>Vrati se na pocetnu stranu</Link>
            <div className="osnovniPrikaz">
                <label><h3>Pretrazi: </h3> </label>
                <input onChange={this.props.searchCarFromInput }/>
                    {this.renderList()}
                    </div>
           </div>
        )
    }

    renderOptions(){
        return this.props.cars.map(car=>{
            return(
                <option value={car.name}>{car.name}</option>
            )
        })
    }
   
    renderList(){
        if(!this.props.cars){
            return <li>Loading...</li>
        }
        return this.props.cars.map(car=>{
            return(
                    <div key={car.id} className="osnovniAuto">
                        {car.name} {car.model} 
                       
                        {/* <button onClick={()=>{this.props.delete(car)}}>Izbrisi</button><br/> */}
                        <br/><Link onClick={()=>{this.props.select(car)}} to='/car'> Prikazi vise</Link>
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
        delete:deleteCar,
        select:selectCar,
        searchCarFromInput:searchCar,
        ucitajPodatke:requestData
    },dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(Salon);