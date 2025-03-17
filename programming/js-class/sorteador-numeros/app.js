function draw(){
  let qtd = document.getElementById('quantidade').value;
  let de = document.getElementById('from').value;
  let ate = document.getElementById('to').value;

  alert(`Qtd: ${qtd}`);
  alert(`from: ${from}`);
  alert(`to: ${to}`);

  let number = getRandomNumber(from,to);
  alert(number)
}

function getRandomNumber(min,max){
  return Math.random() * (max-min) +min;
}