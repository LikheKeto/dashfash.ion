import React, { useState } from 'react';
import Shop from './components/Shop';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
	const [cartItem, setCartItem] = useState([]);
	console.log(cartItem);
	return (
		<>
			<Router>
				<Navbar />
				<Cart setCartItem={setCartItem} cartItem={cartItem} />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/shop">
						<Shop setCartItem={setCartItem} cartItem={cartItem} />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default Routes;
