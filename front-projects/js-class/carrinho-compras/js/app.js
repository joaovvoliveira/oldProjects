let totalGeral = 0;
cleanAll();


function addItem() {
  // get name,qtd value
  let somaTotal =0;
  let product = document.getElementById('produto').value;
  let productName = product.split('-')[0];
  let productPrice = product.split('R$')[1];
  let qtd = document.getElementById('quantidade').value;
  let totalPrice = qtd * productPrice;
  let productsList = document.getElementById('productsList');
  productsList.innerHTML = productsList.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${qtd}x</span>${productName}<span class="texto-azul">R$${totalPrice}</span></section>`;
  totalGeral = totalGeral + totalPrice;
  let totalShopping = document.getElementById('valor-total');
  totalShopping.innerHTML=`<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;

  console.log(productName);
  console.log(productPrice);


}

function cleanAll() {
  document.getElementById('productsList').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$ 0';

}