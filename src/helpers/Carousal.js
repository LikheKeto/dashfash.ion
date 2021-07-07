import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carousal = ({ products }) => {
	const [currentlyShowing, setCurrentlyShowing] = useState(products[0]);

	const changeCurrentlyShowing = (id) => {
		let newShowing = products.filter((product) => product.id === id);

		setCurrentlyShowing(newShowing[0]);
	};

	return (
		<>
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<div className="carousal">
						<img src={currentlyShowing.image} alt={currentlyShowing.title} />
						<div className="details">
							<h4>{currentlyShowing.title}</h4>
							<h3>${currentlyShowing.price}</h3>
							<p>{currentlyShowing.description}</p>
							<Link to="/shop">
								<button className="btn">Shop now</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-sm-12">
					<div className="product-list">
						{products.map((product) => (
							<div
								key={product.id}
								onClick={() => changeCurrentlyShowing(product.id)}
								className="list-item"
							>
								<img src={product.image} alt={currentlyShowing.title} />
								<h5 className="productTitle">{product.title}</h5>
								<h4>${product.price}</h4>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousal;
