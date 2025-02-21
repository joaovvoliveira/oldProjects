// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'ABC';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'aaa'

// let secretNumber = getRandomNumber();

// function inserirTexto(tag,valor){
//   let texto = document.querySelector(tag);
//   texto.innerHTML = valor;
// };

// inserirTexto('h1','TESTE3');
// inserirTexto('p', 'TESTE2');

// function getRandomNumber() {
//   return parseInt(Math.random() * 10 +1);
// };

// function verificarChute(){
//   let chute = document.querySelector('input').value;
//   console.log(chute == secretNumber);

//   getRandomNumber();
//   console.log(secretNumber);
// }




































function insertText(tag,value){
  let text = document.querySelector(tag)
  text.innerHTML = value
}

insertText('h1','Guessing game')
insertText('p','Choose between 1 and 10')

function getRandomNumber(min,max){
  return parseInt(Math.random() * (max - min) + 1);
}

function eraseInput(){
  document.querySelector('.container__input').value = ''
}

let secretNumber = getRandomNumber(0,10) 
let tries = 1;

function verificarChute(){
  let choosenNumber = document.querySelector('.container__input').value;
  console.log(secretNumber)
  console.log(choosenNumber)
  
  if(choosenNumber < 1 || choosenNumber > 10){
    alert('Digite um numero entre 1 e 10!')
    eraseInput();
  }
  else{
    if (choosenNumber == secretNumber){
      let wordtry = tries > 1 ? 'tries' : 'try';
      let qtdClick = `You did it in ${tries} ${wordtry}`
      insertText('p', qtdClick)
      eraseInput();
      document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else if ( choosenNumber < secretNumber){
      insertText('p','Valor maior')
      eraseInput();
      
    }
    else if (choosenNumber > secretNumber)
      {
        insertText('p','Valor menor')
        eraseInput();
    }
  }
  tries++;
}

function restartGame(){
  secretNumber = getRandomNumber(0,10)
  console.log('restarting...')
  tries = 1;
  insertText('p','Choose between 1 and 10')
}
