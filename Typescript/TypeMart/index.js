"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
// Decaring the variables
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "Kathmandu , Nepal";
// Product user tryin to buy
let productName = product_1.default[0].name;
//Searching and storing the products from our databse that the user wants to buy
let product = product_1.default.filter((item) => {
    return item.name === productName;
})[0];
// If the product is available for pre-order, we'll let the user know
if (product.preOrder) {
    console.log("We'll send the product when its on the way.");
}
// if price is equal or over $25, shipping is free
// else it's $5
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("We provide free shipping for this product.");
}
else if (Number(product.price) < 25) {
    shipping = 5;
}
// Tax if 10% if order from outside of Kathmandu
// else its 5%
if (!shippingAddress.match("Kathmandu")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
// Calculate the total price
taxTotal = taxPercent * Number(product.price);
total = taxTotal + Number(product.price);
// Print the receipt
console.log(`
    Product name: ${productName} \n 
    Shipping Address: ${shippingAddress} \n
    Price of the product: $${product.price} \n
    Tax total: $${taxTotal} \n
    Shipping charge: $${shipping} \n
    Net amount: $${total} \n
    `);
