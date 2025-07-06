function draw() {
  let qtd = parseInt(document.getElementById('qtd').value);
  let from = parseInt(document.getElementById('from').value);
  let to = parseInt(document.getElementById('to').value);
  
  let drawn = [];
  let number;


  for (let i = 0; i < qtd; i++) {
    number = getRandomNumber(from, to);

    while (drawn.includes(number)) {
      number = getRandomNumber(from, to);
    }

    drawn.push(number);
  }


  let results = document.getElementById('results');
  results.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${drawn}</label>`
  
  allowRestart();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function allowRestart() {
  let btnRestart = document.getElementById('btn-reiniciar');
  if(btnRestart.classList.contains('container__botao-desabilitado')){
    btnRestart.classList.remove('container__botao-desabilitado');
    btnRestart.classList.add('container__botao');
  } else {
    btnRestart.classList.remove('container__botao');
    btnRestart.classList.add('container__botao-desabilitado');
  }
}

function restart(){
  document.getElementById('qtd').value = '';
  document.getElementById('from').value = '';
  document.getElementById('to').value = '';
  document.getElementById('results').innerHTML = `<label class="texto__paragrafo">Números sorteados: Não há números Sorteados. </label>`;

  allowRestart();
}

