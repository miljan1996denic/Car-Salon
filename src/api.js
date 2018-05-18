export const fetchData= async () => {
    try{
        const response=await fetch ("http://localhost:3001/cars/");
        const data=await response.json();
    return data;
    }
    catch(e){
        console.log("NECE-",e);
    }
}


export const addCar=async ()=> {
    try{
        const prozivodjac = document.getElementById("name").value;
        let mod = document.getElementById("model").value;
        let gorivo = document.getElementById("gorivo").value;
        let kubikaza = document.getElementById("kubikaza").value;
        let brVrata = document.getElementById("brVrata").value;
        let cena=document.getElementById("cena").value;
        console.log(prozivodjac,mod,gorivo,kubikaza,brVrata,cena);
        const response= await fetch("http://localhost:3001/cars", {
            method: 'post',
            headers: {
                
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           
            body: JSON.stringify({
                name: prozivodjac,
                model: mod,
                fuel: gorivo,
                engine: kubikaza,
                price: cena,
                numDoors: brVrata,
                comm:[]
            })
        })
        clearInput();
        alert("Uspesno ste dodali automobil u bazu.");
    }
    catch(e){
        console.log("Greska pri dodavanju",e);
        
    }
}

export const deleteCar=async (id) => {
    try{
        const response=await  fetch(`http://localhost:3001/cars/${ id }`, {
            method: 'delete',
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    })
}
    catch(e){
        console.log("NECE-",e);
    }
}

export const addCommment=async (id,name,model,fuel,engine,price,numDors,payload)=> {
    try{
        console.log("Provera paramentra",id,payload);
        const response= await fetch(`http://localhost:3001/cars/${id}`, {
            method: 'put',
            headers: {
                
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           
            body: JSON.stringify({
                name: name,
                model: model,
                fuel: fuel,
                engine: engine,
                price: price,
                numDoors: numDors,
                comm:payload
            })
        })
    }
    catch(e){
        console.log("Greska pri dodavanju",e);
    }
}

function clearInput(){
    document.getElementById("name").value="";
    document.getElementById("model").value="";
    document.getElementById("gorivo").value="";
    document.getElementById("kubikaza").value="";
    document.getElementById("brVrata").value="";
    document.getElementById("cena").value="";
}