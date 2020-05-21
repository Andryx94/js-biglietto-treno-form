var chilometri;
document.getElementById('chilometri').innerHTML =  chilometri = Math.abs(parseInt(prompt("Dimmi i chilometri del tuo viaggio")));
var anni;
document.getElementById('anni').innerHTML =  anni = Math.abs(parseInt(prompt("Dimmi quanti anni hai")));

var prezzo = (chilometri * 0.21);
var prezzoJunior = prezzo - (prezzo * 0.2); // applica lo sconto del 20% per i minorenni
var prezzoSenior = prezzo - (prezzo * 0.4); // applica lo sconto del 40% per gli over 65

if (isNaN(chilometri) || isNaN(anni)) {
  alert("Inserisci correttamente i dati!")
}

else {
  if (anni < 18) {
    document.getElementById('prezzo').innerHTML =  prezzoJunior.toFixed(2);
  }

  else if (anni > 65){
    document.getElementById('prezzo').innerHTML =  prezzoSenior.toFixed(2);
  }

  else {
    document.getElementById('prezzo').innerHTML =  prezzo.toFixed(2);
  }
}
