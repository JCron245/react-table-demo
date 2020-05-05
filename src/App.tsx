import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RestaurantDetail } from './components/RestaurantDetail/RestaurantDetail';
import RestaurantTable from './components/RestaurantTable/RestaurantTable';
import ThemeControl from './components/Theme/Theme';

function App() {
	return (
		<Router>
			<main className={'main'}>
				<Switch>
					<Route path="/details" component={RestaurantDetail} />
					<Route path="/" component={RestaurantTable} />
				</Switch>
			</main>
			<ThemeControl />
		</Router>
	);
}

export default App;
