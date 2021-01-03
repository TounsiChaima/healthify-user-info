import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import meals from "./data/meals"
import Slider from "./components/slider";
import Recipe from "./pages/recipe/recipe";
import Bilan from "./pages/bilan/bilan";
const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route  exact path="/" component={Home} />
      <Route  exact path="/slider" component={Slider} />
      <Route  exact path="/bilan" component={Bilan} />
      {
      meals.map(meal=>{
              return (<Route exact path={"/"+meal.name}
                 component={() => <Recipe name={meal.name} image={meal.image}
                  />}/>)
               }
                )}
    </Switch>
  </BrowserRouter>
);

export default routes;