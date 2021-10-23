const url = `https://cors-anywhere.herokuapp.com/http://sitelicon.eu/test/ajax_localidades.php`;

const changeResp = (event) => {
  const id = event.target.value;
  makeRequest(id);
}

document.getElementById("provincias").addEventListener("change", changeResp);

const onResponse = (response) => {
    document.getElementById("box_localidades").innerHTML= response;
}

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
  request.send();
}
