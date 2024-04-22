import assert from "node:assert";
import { describe, it } from "node:test";
import { MainDishBuilder } from "./main-dish-builder";
import { Rice, Beans, Meat, Desert, Beverage } from "./meals";

describe("MainDishBuilder", () => {
  const mainDishBuilder = new MainDishBuilder();
  it("should be an instance", () => {
    assert.equal(mainDishBuilder instanceof MainDishBuilder, true);
  });

  it("should make a beverage", () => {
    const rice = new Beverage("Bebida", 7);
    const expectedMeal = { _children: [rice] };

    mainDishBuilder.makeBeverage();

    assert.deepEqual(mainDishBuilder.getMeal(), expectedMeal);
    assert.equal(mainDishBuilder.getPrice(), 7);
  });

  it("should make a meal", () => {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 20);
    const expectedMeal = { _children: [rice, beans, meat] };

    mainDishBuilder.reset().makeMeal();

    assert.deepEqual(mainDishBuilder.getMeal(), expectedMeal);
    assert.equal(mainDishBuilder.getPrice(), 35);
  });

  it("should make a meal with desert", () => {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 20);
    const desert = new Desert("Sobremesa", 12);
    const expectedMeal = { _children: [rice, beans, meat, desert] };

    mainDishBuilder.reset().makeMeal().makeDesert();

    assert.deepEqual(mainDishBuilder.getMeal(), expectedMeal);
    assert.equal(mainDishBuilder.getPrice(), 47);
  });
});
