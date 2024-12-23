function formatStatistic(stat: string | number) {
  if (typeof stat === "string") {
    return stat.toUpperCase();
  }
  if (typeof stat === "number") {
    return stat.toFixed(2);
  }
}

console.log(formatStatistic("Win"));
console.log(formatStatistic(0.364));

// Using in with Type guards
type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: "Proxie",
  run: () => "pitter pat",
};

const bettaFish = {
  name: "Neptune",
  swim: () => "bubble blub",
};

function move(pet: Cat | Fish) {
  if ("run" in pet) {
    return pet.run();
  }

  if ("swim" in pet) {
    return pet.swim();
  }
}

console.log(move(siameseCat));

// Narrowing with else
type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

const fettuccine = {
  menuName: "Fettuccine",
  boil: () => "Heat water to 212 degrees",
};

const steak = {
  menuName: "New York Strip Steak",
  panFry: () => "Heat oil to 350 degrees",
};

function prepareEntree(entree: Pasta | Meat) {
  if ("boil" in entree) {
    return entree.boil();
  } else {
    return entree.panFry();
  }
}

console.log(prepareEntree(fettuccine));

// Narrowing After a Type Guard
type Tea = {
  steep: () => string;
};

type Coffee = {
  pourOver: () => string;
};

function brew(beverage: Coffee | Tea) {
  if ("steep" in beverage) {
    return beverage.steep();
  }

  return beverage.pourOver();
}
