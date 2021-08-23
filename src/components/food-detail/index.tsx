import FoodNutrient from "../../types/FoodNutrient";
import { useSelector } from "react-redux";
const FoodDetail: React.FC = () => {
  const item = useSelector((state: any) => state.food);
  return (
    <div className="container">
      {item && (
        <>
          <h1>Food Details - {item.description}</h1>
          <div className="row">
            <div className="column">{item.fdcId}</div>
            <div className="column">{item.description}</div>
            <div className="column">{item.foodCategory}</div>
          </div>
          <div className="row">
            <div className="column">
              <table>
                <caption>Nutritional Information</caption>
                <thead>
                  <tr>
                    <th>Nutrient Name</th>
                    <th>Nutrition Value</th>
                  </tr>
                </thead>
                <tbody>
                  {item &&
                    item.foodNutrients.map((nutrient: FoodNutrient) => (
                      <tr key={nutrient.nutrientId}>
                        <td>{nutrient.nutrientName}</td>
                        <td>
                          {nutrient.value}&nbsp;{nutrient.unitName}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FoodDetail;
