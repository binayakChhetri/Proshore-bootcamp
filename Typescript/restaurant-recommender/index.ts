import dataRestaurants from "./dataRestaurants";

const hour: number = new Date().getHours();

const dollarSigns = "$$";
const deliveryTimeMax = 90;
const maxDistance = 10;

let result: string;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = dataRestaurants.filter((restaurant) => {
  if (
    (Number(restaurant.priceBracket) > priceBracket &&
      hour < Number(restaurant.openHour)) ||
    hour > Number(restaurant.closeHour)
  ) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = "There are no restaurants available right now.";
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
