import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();
	const isActive = (path) => {
		if (path === location.pathname) {
			return 'active';
		}
	};
	return (
		<>
			<div className="navigation-bar">
				<Link to="/">
					<button className={isActive('/')}>Home</button>
				</Link>
				<Link to="/shop">
					<button className={isActive('/shop')}>Shop</button>
				</Link>
				<Link to="/login">
					<button className={isActive('/login')}>Login</button>
				</Link>
				<Link to="/signup">
					<button className={isActive('/signup')}>Signup</button>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
