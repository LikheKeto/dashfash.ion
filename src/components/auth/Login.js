import React from 'react';

const Login = () => {
	return (
		<div className="login-box">
			<div className="box">
				<h2>Login</h2>
				<label>
					username
					<input type="text" />
				</label>
				<label>
					password
					<input type="password" />
				</label>
				<button className="btn">Login</button>
			</div>
		</div>
	);
};

export default Login;
