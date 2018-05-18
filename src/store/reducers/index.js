import {combineReducers} from 'redux';
import CarReducer from '../reducers/car.reducer';
import CarDetail from '../reducers/car-detail.reducer';

const rootReducer=combineReducers({
    carDetail: CarDetail,
    cars:CarReducer
})

export default rootReducer;