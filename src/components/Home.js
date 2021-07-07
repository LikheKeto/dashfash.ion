import React, { useEffect, useState } from 'react';
import { getLimitedProducts } from './Api';
import Carousal from '../helpers/Carousal';
const Home = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getLimitedProducts(4)
			.then((data) => {
				setProducts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{products.length !== 0 ? (
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h3>Trending Products</h3>
							<Carousal products={products} />
						</div>
					</div>
				</div>
			) : (
				<div className="center enter">
					<div className="spinner-border" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Home;
