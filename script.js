printType = document.getElementById("printTypeTemp")

//REPORT DELLE Temperature
function reportTemp() {
  tempMin = termometro.storico[0];
  tempMax = termometro.storico[0];
  media = 0;
  for (var i = 0; i < termometro.storico.length; i++) {
    if (termometro.storico[i] < tempMin ) {tempMin = termometro.storico[i]}
    if (termometro.storico[i] > tempMax ) {tempMax = termometro.storico[i]}
    media += termometro.storico[i]
    tempMedia = media / termometro.storico.length
  }
  printType.innerHTML=`<div  class="alert alert-primary" role="alert"> Temp Min: ${tempMin} <br/>
  Temp Max: ${tempMax} <br />
  Temp Media: ${tempMedia}</div>`
}

//contersione C°\ fahrenheit
function FahrenheitConv() {
  const tempInput = document.getElementById("inputTemp").value;
    termometro.fahrenheit  = (parseInt(tempInput) * 9/5) +32

  document.getElementById("printTypeTemp").innerHTML= `<div  class="alert alert-primary" role="alert"> Temperature rilevata ${termometro.misura} ' C° ' che equivale a  ${termometro.fahrenheit} ' °F' </div>`
}

//STAMPA STORICO TEMPERATURE
function printStory() {
  document.getElementById("printStorico").innerHTML= `<div  class="alert alert-secondary"  role="alert"> Temperature rilevate ${termometro.storico.join(" C° ")} </div>`
}

//VALUTAZIONE DELLA TEMPERATURA
function typeTemp() {
  const temp = document.getElementById("inputTemp").value;
  termometro.tipo = (temp > 45) ? printType.innerHTML= `<div  class="alert alert-danger"  role="alert"  > La temperature rilevata di ${termometro.celsius} è Molto calda </div>` :
    (temp <=  45 && temp >35) ? printType.innerHTML= `<div  class="alert alert-danger"  role="alert" > La temperature rilevata di ${termometro.celsius} è Calda </div>` :
      (temp<=35 && temp >18) ? printType.innerHTML= `<div  class="alert alert-success"  role="alert" > La temperature rilevata di ${termometro.celsius} è Ottimale </div>` :
        (temp <=18 && temp > 0) ? printType.innerHTML= `<div  class="alert alert-warning"  role="alert" > La temperature rilevata di ${termometro.celsius} è Fredda </div>` : printType.innerHTML= `<div  class="alert alert-info"   role="alert" > La temperature rilevata di ${termometro.celsius} è Molto Fredda </div>`

}


//VALORE IN INPUT
function inputTemp() {
  //VALORE TEMPERATURA INPUT
  let tempInput = document.getElementById("inputTemp").value;
  if (!tempInput){document.getElementById("printDisplay").innerHTML = `<div class="alert alert-danger"  role="alert" > Inserisci una temperatura valida </div>`}
  else{
    termometro.storico.push(parseInt(tempInput))
    termometro.misura = parseInt(tempInput);
    termometro.celsius = parseInt(tempInput) + " C°"
      printStory()
      document.getElementById("printDisplay").innerHTML= `<div class="alert alert-success"  role="alert" id="msg"> Temperatura rilevata ${termometro.celsius} <br/> <button type="button" class="btn btn-primary" id="btn_start" onclick="FahrenheitConv()">Converti in fahrenheit</button> <button type="button" class="btn btn-primary" id="btn_start" onclick="typeTemp()">valuta la temperatura</button> <button type="button" class="btn btn-primary" id="btn_start" onclick="reportTemp()">Report</button>
      </div>`
    }
}
