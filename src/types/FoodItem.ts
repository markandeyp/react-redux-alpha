import FoodNutrient from "./FoodNutrient";

export default interface FoodItem {
  fdcId: number;
  description: string;
  foodCategory: string;
  foodNutrients: FoodNutrient[];
}
