import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { RestaurantDetail } from './components/RestaurantDetail/RestaurantDetail';
import { RestaurantTable } from './components/RestaurantTable/RestaurantTable';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details">
          <RestaurantDetail />
        </Route>
        <Route path="/">
          <RestaurantTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
