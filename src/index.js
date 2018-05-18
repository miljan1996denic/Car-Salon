import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router,Route, Link,BrowserRouter} from 'react-router-dom';
import Salon from './components/salon';
import Pocetna from './components/pocetna';
import Header from './components/header';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../src/store/reducers';
import CarDetail from './components/car-detail';
import FormaDodaj from './components/forma-dodaj';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import formaDelete from './components/forma-delete';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);


ReactDOM.render(
    <Provider store={store}>
                <Router>
                     <div>
                    <Header/>
                        <div id="miljan">
                        <Route path='/salon' component={Salon} />
                        <Route path='/' exact component={Pocetna} />
                        <Route path='/car' component={CarDetail}/>
                        <Route path='/dodaj' component={FormaDodaj}/>
                        <Route path='/brisi' component={formaDelete}/>
                        </div>
                    </div>
                </Router>
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
