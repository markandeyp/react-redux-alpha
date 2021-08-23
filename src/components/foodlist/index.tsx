import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FoodService from "../../services/food.service";
import {
  LOAD_FOOD_ITEMS,
  LOAD_FOOD_ITEMS_SUCCESS,
  SET_FOOD_ITEM,
} from "../../store";
import FoodItem from "../../types/FoodItem";

type FoodListProps = {
  query: string;
};

const FoodList: React.FC<FoodListProps> = ({ query }) => {
  const foods = useSelector((state: any) => state.foods);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (query) {
      dispatch({ type: LOAD_FOOD_ITEMS });
      FoodService.getFoodItems(query).then((data) => {
        let foodItems: FoodItem[] = data.foods.map((item: FoodItem) => item);
        dispatch({ type: LOAD_FOOD_ITEMS_SUCCESS, payload: foodItems });
      });
    }
  }, [query, dispatch]);

  const loadDetails = (food: FoodItem) => {
    dispatch({ type: SET_FOOD_ITEM, payload: food });
    history.push("/food/" + food.fdcId);
  };

  return (
    <>
      {foods && (
        <div className="food-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food: FoodItem) => (
                <tr key={food.fdcId} onClick={() => loadDetails(food)}>
                  <td>{food.fdcId}</td>
                  <td>{food.description}</td>
                  <td>{food.foodCategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!foods && <h1>Enter food name in the search bar and click Search</h1>}
    </>
  );
};

export default FoodList;
