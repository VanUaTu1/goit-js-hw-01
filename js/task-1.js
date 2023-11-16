'use strict';
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;    
    return message;
    console.log(message);
}
