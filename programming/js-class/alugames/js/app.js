function alterarStatus(id){
  
  let gameSelected = document.getElementById(`game-${id}`);
  let img = gameSelected.querySelector('.dashboard__item__img');
  let btn = gameSelected.querySelector('.dashboard__item__button');
  
  if (img.classList.contains('dashboard__item__img--rented')){
    img.classList.remove('dashboard__item__img--rented');
    btn.classList.remove('dashboard__item__button--return')
    btn.innerText = 'Rent';
  } else {
    img.classList.add('dashboard__item__img--rented');
    btn.classList.add('dashboard__item__button--return');
    btn.innerText = 'Return';
  }


  console.log(btnRent);
  console.log(btnReturn);


}
// let btnRent = document.getElementsByClassName('dashboard__item__button');
// if(btnRent.classList.contains('dashboard__item__button')) {
//   btnRent.classList.remove('dashboard__item__button');
//   btnRent.classList.add('dashboard__item__button');
// } else {
//   btnRent.classList.remove('dashboard__item__button');
//   btnRent.classList.add('dashboard__item__button');
// }