export default class FoodService {
  static APIKey = "UgMlwsSuL7gJ0AvB8Ppqsg1j2tTv6ZrLL4rhwhtb";
  static APIUrl = "https://api.nal.usda.gov/fdc/v1/foods/search";
  static FoodAPIUrl = "https://api.nal.usda.gov/fdc/v1/food/";

  static getFoodItems(query: string) {
    const url = `${this.APIUrl}?query=${query}&api_key=${this.APIKey}`;
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log("Error while fetching data from API.", err));
  }

  static getFoodItem(id: string) {
    const url = `${this.APIUrl}/${id}?api_key=${this.APIKey}`;
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log("Error while fetching data from API.", err));
  }
}
