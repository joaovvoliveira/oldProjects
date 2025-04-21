const iphonePrice = parseFloat(document.querySelector('.iphonePrice').textContent);
console.log(iphonePrice);

const watchPrice = parseFloat(document.querySelector('.watchPrice').textContent);
console.log(watchPrice);

const iMacPrice = parseFloat(document.querySelector('.iMacPrice').textContent);
console.log(iMacPrice);

total = (iMacPrice + iphonePrice + watchPrice);

const productPriceTotal = document.querySelector('.productPriceTotal');
productPriceTotal.textContent = parseFloat(total).toFixed(2);

const productTax = document.querySelector('.productTax');
const tax = (total * 0.07).toFixed(2);
productTax.textContent = tax;

const productTotalPrice = document.querySelector('.productTotalPrice');
const totalPrice = (total + parseFloat(tax)).toFixed(2);

productTotalPrice.textContent = totalPrice;