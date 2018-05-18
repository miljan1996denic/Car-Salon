import carDetail from "../../components/car-detail";

export const CAR_DELETED='CAR_DELETED';
export const CAR_SELECTED='CAR_SELECTED';
export const CAR_FOR_SERACH='CAR_FOR_SEARCH';
export const CAR_ADD='CAR_ADD';
export const REQUEST_DATA='REQUEST_DATA';
export const RECIVE_DATA='RECIVE_DATA';
export const DELETED_DATA='DELETED_DATA';
export const DODAJ_KOMENTAR='DODAJ_KOMENTAR';
export const UPDATE_COMMENT='UPDATE_COMMENT';

export function deleteCar(car){
    return {
        type: CAR_DELETED,
        payload: car.name
    }
}

export function selectCar(car) {
    return {
        type: CAR_SELECTED,
        payload: car
    }
}

export function searchCar(ev){
    console.log("Search action",ev);
    return{
        type:CAR_FOR_SERACH,
        payload:ev.target.value
    }
}

export function dodaj(ev){
    ev.preventDefault();
    console.log("action dodaj",ev);
     return{type:CAR_ADD,
        payload:ev
    }}

export function requestData(){return {type:REQUEST_DATA}}
export function recivetData(data){return {type:RECIVE_DATA,payload:data}}

export function deleteData(data) {
    return{
        type:DELETED_DATA,
        payload:data
    }
}

export function dodajKomentar(id,name,model,fuel,engine,price,numDors,comm){
    const pom=document.getElementById("textarea").value;
     comm.push(pom);
    return{
        type: DODAJ_KOMENTAR,
        name:name,
        model:model,
        fuel:fuel,
        engine:engine,
        price:price,
        numDors:numDors,
        payload:comm,
        id:id
    }
}

export function updateComment(carDetail){
    return{
        type:UPDATE_COMMENT,
        payload:carDetail
    }
}

