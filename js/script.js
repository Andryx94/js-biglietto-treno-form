//variabili generazione biglietto
var nomeCognome = document.getElementById('nome-cognome');
var chilometri = document.getElementById('chilometri');
var eta = document.getElementById('eta');

// variabili bottoni
var genera = document.getElementById('genera')
var annulla = document.getElementById('annulla')

//variabile generazione report
var report = document.getElementById('report')
var reportNomeCognome = document.getElementById('report-nome-cognome');
var reportEta = document.getElementById('report-eta');
var reportCarrozza = document.getElementById('report-carrozza');
var reportCp = document.getElementById('report-cp');
var reportCosto = document.getElementById('report-costo');

//variabili varie

//attivazione bottone genera
genera.addEventListener('click',
function() {
  reportNomeCognome.innerHTML= nomeCognome.value;
  reportEta.innerHTML= eta.value;
  reportCarrozza.innerHTML= "A" + Math.floor(Math.random() * 10 + 1);
  reportCp.innerHTML= Math.floor(Math.random() * 100000);
  report.className = report.classList + " nohide";
}
);

//attivazione bottone annulla
annulla.addEventListener('click',
function() {
  reportNomeCognome.innerHTML= nomeCognome.value = "";
  reportEta.innerHTML= eta.value = "";
  reportCarrozza.innerHTML= "";
  reportCp.innerHTML= "";
  report.className = report.classList + "biglietto-report hide";
}
);
