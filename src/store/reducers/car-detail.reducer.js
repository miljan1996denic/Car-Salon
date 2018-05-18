import {CAR_SELECTED, UPDATE_COMMENT} from '../actions';

export default function(state=null,action){
    console.log("Reducer car detail is running",action);
    switch(action.type){
        case CAR_SELECTED:
            return action.payload;
        case UPDATE_COMMENT:
            return action.payload;
        default:
            return state;
    }
} 