//variabili generazione biglietto
var nomeCognome = document.getElementById('nome-cognome');
var chilometri = document.getElementById('chilometri');
var eta = document.getElementById('eta');

// variabili bottoni
var genera = document.getElementById('genera')
var annulla = document.getElementById('annulla')

//variabili generazione report
var report = document.getElementById('report')
var reportNomeCognome = document.getElementById('report-nome-cognome');
var reportEta = document.getElementById('report-eta');
var reportCarrozza = document.getElementById('report-carrozza');
var reportCp = document.getElementById('report-cp');
var reportCosto = document.getElementById('report-costo');

//variabili varie
var prezzo;

//attivazione bottone genera
genera.addEventListener('click',
function() {
  reportNomeCognome.innerHTML= nomeCognome.value;
  reportEta.innerHTML= eta.value;
  reportCarrozza.innerHTML= "A" + Math.floor(Math.random() * 10 + 1);
  reportCp.innerHTML= Math.floor(Math.random() * 100000);

  if (eta.value == "Junior") {
    prezzo = Math.abs(chilometri.value) * 0.21;
    prezzo = prezzo - (prezzo * 0.2);
  }

  else if (eta.value == "Senior") {
    prezzo = Math.abs(chilometri.value) * 0.21;
    prezzo = prezzo - (prezzo * 0.4);
  }

  else {
    prezzo = Math.abs(chilometri.value) * 0.21;
  }

  reportCosto.innerHTML = prezzo + "€";
  report.className = report.classList + " nohide";
  console.log(prezzo);
}
);

//attivazione bottone annulla
annulla.addEventListener('click',
function() {
  reportNomeCognome.innerHTML= nomeCognome.value = "";
  reportEta.innerHTML= eta.value = "";
  reportCarrozza.innerHTML= "";
  reportCp.innerHTML= "";
  reportCosto.innerHTML = "";
  report.className = report.classList + "biglietto-report hide";
}
);
