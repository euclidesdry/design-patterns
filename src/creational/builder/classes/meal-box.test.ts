import { describe, it } from "node:test";
import assert from "node:assert";

import { MealBox } from "./meal-box";
import { Beans, Meat, Rice } from "./meals";

const mealMock = (name: string, price: number) => ({ name, price });

describe("MealBox", () => {
  it("should be able to add a meals to the meal box", () => {
    const meals = {
      beans: mealMock(Beans.constructor.name, 5),
      meat: mealMock(Meat.constructor.name, 10),
      rice: mealMock(Rice.constructor.name, 20),
    };
    const mealsSum = Object.values(meals).reduce((prevMeal, nextMeal) => {
      return { name: "Meal", price: prevMeal.price + nextMeal.price };
    }).price;

    const rice = new Rice(meals.rice.name, meals.rice.price);
    const beans = new Beans(meals.beans.name, meals.beans.price);
    const meat = new Meat(meals.meat.name, meals.meat.price);
    const mealBox = new MealBox();

    mealBox.add(rice, beans, meat);

    assert.strictEqual(mealBox.getPrice(), mealsSum);
  });
});
