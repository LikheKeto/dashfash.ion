import React from 'react';

const Signup = () => {
	return (
		<div className="login-box">
			<div className="box">
				<h2>Sign up</h2>
				<label>
					username
					<input type="text" />
				</label>
				<label>
					password
					<input type="password" />
				</label>
				<button className="btn">sign up</button>
			</div>
		</div>
	);
};

export default Signup;
