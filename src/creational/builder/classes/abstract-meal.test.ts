import assert from "node:assert";
import { describe, it } from "node:test";
import { AbstractMeal } from "./abstract-meal";

class Apple extends AbstractMeal {}

describe("AbstractMeal", () => {
  it("should add Apple as meal with current price", () => {
    const apple = { name: "Apple", price: 10 };
    const abstractMeal = new Apple(apple.name, apple.price);

    assert.deepEqual(abstractMeal, apple);
    assert.equal(abstractMeal.getPrice(), 10);
  });
});
