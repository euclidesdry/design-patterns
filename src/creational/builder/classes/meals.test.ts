import { describe, it } from "node:test";
import assert from "node:assert";

import { Beans, Meat, Rice, Desert, Beverage } from "./meals";

const mealMock = (name: string, price: number) => ({ name, price });

describe("Meals", () => {
  it("Rice should be created as a meal", () => {
    const rice = mealMock(Rice.constructor.name, 5);
    const riceObject = new Rice(rice.name, rice.price);

    assert.deepEqual(riceObject, rice);
    assert.equal(riceObject.getPrice(), rice.price);
  });

  it("Beans should be created as a meal", () => {
    const beans = mealMock(Beans.constructor.name, 10);
    const beansObject = new Beans(beans.name, beans.price);

    assert.deepEqual(beansObject, beans);
    assert.equal(beansObject.getPrice(), beans.price);
  });

  it("Meat should be created as a meal", () => {
    const meat = mealMock(Meat.constructor.name, 20);
    const meatObject = new Meat(meat.name, meat.price);

    assert.deepEqual(meatObject, meat);
    assert.equal(meatObject.getPrice(), meat.price);
  });

  it("Beverage should be created as a meal", () => {
    const beverage = mealMock(Beverage.constructor.name, 15);
    const beverageObject = new Beverage(beverage.name, beverage.price);

    assert.deepEqual(beverageObject, beverage);
    assert.equal(beverageObject.getPrice(), beverage.price);
  });

  it("Desert should be created as a meal", () => {
    const desert = mealMock(Desert.constructor.name, 25);
    const desertObject = new Desert(desert.name, desert.price);

    assert.deepEqual(desertObject, desert);
    assert.equal(desertObject.getPrice(), desert.price);
  });
});
