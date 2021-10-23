let url = `https://cors-anywhere.herokuapp.com/http://sitelicon.eu/test/ajax_localidades.php?`;
console.log(url);


let dataValue = () => {
  let select = document.getElementById("#provinces");
  select.addEventListener("change", changeResp) 
     changeResp = () => {

  }}

// function(){
  
// }

const request = new XMLHttpRequest();

request.open('GET', `${url}`, true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    let resp = this.response;
    console.log(resp);
  } else {
      alert(`No se a podido encontrar la información`)
  }
};

request.send();
console.log(request.send);