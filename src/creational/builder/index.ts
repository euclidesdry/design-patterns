// const rice = new Rice("Arroz", 5);
// const beans = new Beans("Feijão", 10);
// const meat = new Meat("Carne", 20);
// const mealBox = new MealBox();

import { MainDishBuilder } from "./classes/main-dish-builder";

// mealBox.add(rice, beans, meat);

// console.log(mealBox);
// console.log(mealBox.getPrice());

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDesert();
console.log(mainDishBuilder.getMeal());
