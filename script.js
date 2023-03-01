document.getElementById("buton").addEventListener("click", getNewPKMN); 

function getNewPKMN() {
  var pokId = Math.floor(Math.random() * 1008) + 1;
  
  if (pokId < 10) {
    pokId = "00" + pokId;
  } else if (pokId < 100) {
    pokId = "0" + pokId;
  }
  
  document.getElementById("imag").src = "pokemon/" + pokId + ".png";
  document.getElementById("imag").alt = pokId;  
}