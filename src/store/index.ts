import { combineReducers, createStore } from "redux";
import FoodItem from "../types/FoodItem";

type FoodState = {
  foods: FoodItem[];
  food?: FoodItem;
  loading: boolean;
};
const initialState: FoodState = {
  foods: [],
  food: undefined,
  loading: false,
};

export const LOAD_FOOD_ITEMS = "LOAD FOOD ITEMS";
export const LOAD_FOOD_ITEMS_SUCCESS = "LOAD FOOD ITEMS SUCCESS";
export const SET_FOOD_ITEM = "SET FOOD ITEM";

const FoodReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOAD_FOOD_ITEMS:
      return { ...state, loading: true };
    case LOAD_FOOD_ITEMS_SUCCESS:
      return { ...state, loading: false, foods: action.payload };
    case SET_FOOD_ITEM:
      return { ...state, food: action.payload };
    default:
      return state;
  }
};

const FoodStore = createStore(FoodReducer, initialState);

export default FoodStore;
