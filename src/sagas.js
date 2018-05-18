import { call, put, takeLatest } from 'redux-saga/effects'
import {fetchData, deleteCar,addCommment} from './api';
import {REQUEST_DATA,recivetData,DELETED_DATA,deleteData, DODAJ_KOMENTAR, dodajKomentar,updateComment}from './store/actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* GetFromJSON() {
   try {
      const user = yield call(fetchData);
      yield put(recivetData(user));
   } catch (e) {
    console.log("GRESKA U SAGAS",e);
   }
}

function* brisiIzBaze(action) {
  try {
    yield call(deleteCar,action.payload);
     const user = yield call(fetchData);
     yield put(recivetData(user));
  } catch (e) {
   console.log("GRESKA U SAGAS brisi",e);
  }
}

function* dodajKom(action) {
  try {
      yield call(addCommment,action.id, action.name,action.model,action.fuel,action.engine,action.price,action.numDors,action.payload,);
      const all = yield call(fetchData, action.payload);
      const carDetail=all.filter(car=>car.id===action.id);
      yield put(updateComment(carDetail[0]));
        document.getElementById("textarea").value="";
  } catch (e) {
   console.log("GRESKA U SAGAS",e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_DATA, GetFromJSON);
  yield takeLatest(DELETED_DATA,brisiIzBaze);
  yield takeLatest(DODAJ_KOMENTAR,dodajKom);
}

