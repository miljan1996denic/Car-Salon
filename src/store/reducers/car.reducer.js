import React from 'react';
import {CAR_DELETED, CAR_FOR_SERACH, CAR_ADD,RECIVE_DATA} from '../actions/index';

let initialState= [];

export default function(state=null,action){
    console.log("Reducer is running", action);
    switch(action.type){
        case CAR_DELETED: {
            const name=action.payload;
            return Object.assign({},state.filter(car=>car.name!==name));
        }
        case CAR_FOR_SERACH:{
            state=initialState;
            const ime=action.payload;
            const obj=Object.assign({},state.filter(car=>car.name.includes(ime) || car.model.includes(ime)));
            return Object.assign([],obj);
        }
        case CAR_ADD:{
            const obj={name:"Renault",model:"Scenic",fuel:"gas",engine:2400,price:1000,numDoors:5};
            state.push(obj);
            return state;
        }
        case RECIVE_DATA:{
            initialState=action.payload;
            return action.payload;
        }
        default:
             return state;
    }
}