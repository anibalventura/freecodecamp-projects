"use strict";

//Setting constants and variables
const taxRate = 0.018;
const phonePrice = 453;
const accesoryPrice = 9;
const spendingThreshold = 500;

var bankAccountBalance = 1000;
var amount = 0;

function calculateTax(amount) {
  return amount * taxRate;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

//Buying phone and accesories while you have money.
while (amount < bankAccountBalance) {
  //Buy the phone.
  amount += phonePrice;

  //Buy the accesory.
  if (amount < spendingThreshold) {
    amount += accesoryPrice;
  }
  break;
}

//Calculating the final amount to pay with taxes.
amount += calculateTax(amount);

//Final amount of the purchase.
function purchase() {
  if (amount < bankAccountBalance) {
    //Final amount of the purchase.
    console.log("Your purchase is: " + formatAmount(amount)); //Your purchase is: ---
  } else {
    //If you dont have the money, you cant affor this purchase.
    console.log("You can't afford this purchase. :(");
  }
}

purchase();
