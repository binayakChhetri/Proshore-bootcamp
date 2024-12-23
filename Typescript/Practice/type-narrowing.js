"use strict";
function formatStatistic(stat) {
    if (typeof stat === "string") {
        return stat.toUpperCase();
    }
    if (typeof stat === "number") {
        return stat.toFixed(2);
    }
}
console.log(formatStatistic("Win"));
console.log(formatStatistic(0.364));
const siameseCat = {
    name: "Proxie",
    run: () => "pitter pat",
};
const bettaFish = {
    name: "Neptune",
    swim: () => "bubble blub",
};
function move(pet) {
    if ("run" in pet) {
        return pet.run();
    }
    if ("swim" in pet) {
        return pet.swim();
    }
}
console.log(move(siameseCat));
const fettuccine = {
    menuName: "Fettuccine",
    boil: () => "Heat water to 212 degrees",
};
const steak = {
    menuName: "New York Strip Steak",
    panFry: () => "Heat oil to 350 degrees",
};
function prepareEntree(entree) {
    if ("boil" in entree) {
        return entree.boil();
    }
    else {
        return entree.panFry();
    }
}
console.log(prepareEntree(fettuccine));
function brew(beverage) {
    if ("steep" in beverage) {
        return beverage.steep();
    }
    return beverage.pourOver();
}
