function buyIt() {

  let ticketType = document.getElementById('tipo-ingresso').value;
  console.log(ticketType);
  let ticketQtd = document.getElementById('qtd').value;
  console.log(ticketQtd);

  let qtdPistaValue = document.getElementById('qtd-pista').textContent;
  let qtdSupValue = document.getElementById('qtd-superior').textContent;
  let qtdInfValue = document.getElementById('qtd-inferior').textContent;
  let qtdPista = document.getElementById('qtd-pista');
  let qtdSup = document.getElementById('qtd-superior');
  let qtdInf = document.getElementById('qtd-inferior');

  if (ticketType == 'pista' && qtdPistaValue > 0  && qtdPistaValue >=ticketQtd) {
    qtdPista.innerHTML = `<span id="qtd-pista">${qtdPistaValue - ticketQtd}</span>`

  } else if (ticketType == 'inferior' && qtdInfValue > 0 && qtdInfValue >= ticketQtd) {
    qtdInf.innerHTML = `<span id="qtd-inferior">${qtdInfValue - ticketQtd}</span>`

  } else if (ticketType == 'superior' && qtdSupValue > 0 && qtdSupValue >=ticketQtd ){
    qtdSup.innerHTML = `<span id="qtd-superior">${qtdSupValue - ticketQtd}</span>`
  } else {
    alert('Qtd indisponivel')
  }
  
  /*

  */


}