import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Rice, Beans, Beverage, Desert } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    this._meal.add(rice, beans);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Bebida", 7);
    this._meal.add(beverage);
    return this;
  }
  makeDesert(): this {
    const desert = new Desert("Sobremesa", 12);
    this._meal.add(desert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
