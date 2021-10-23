const url = `https://cors-anywhere.herokuapp.com/http://sitelicon.eu/test/ajax_localidades.php`;


//Funcion del evento que reconoce el value seleccionado
const changeResp = (event) => {
    const id = event.target.value;
    makeRequest(id);
}

//Evento que reconoce el value
document.getElementById("provincias").addEventListener("change", changeResp);

//Funcion de respuesta del  ajax
const onResponse = (response) => {
    document.getElementById("box_localidades").innerHTML = response;
}

//Funcion de ajax
const makeRequest = (id) => {
    const request = new XMLHttpRequest();

    request.open('GET', `${url}?id=${id}`, true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            onResponse(this.response);
        } else {
            alert(`No se a podido encontrar la información`)
        }
    };
    setTimeout(function() {
        document.getElementById("box_localidades").textContent = `Cargando Localidades...`
    })
    request.send();
}
document.getElementById("box_localidades").innerHTML = makeRequest(1);
