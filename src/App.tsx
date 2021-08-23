import React, { useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import FoodList from "./components/foodlist";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FoodDetail from "./components/food-detail";

const App: React.FC = () => {
  const [query, setQuery] = useState("");

  const onSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <div className="container">
      <Header text="Foodie Exchange - FX" />
      <Router>
        <Switch>
          <Route path="/foods">
            <Search onSearch={onSearch} />
            <FoodList query={query} />
          </Route>
          <Route path="/food/:id">
            <FoodDetail />
          </Route>
          <Route path="/">
            <h1>You are on home page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
