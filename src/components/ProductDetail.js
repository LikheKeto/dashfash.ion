import React from 'react';

const ProductDetail = ({ product, setSelectedProduct }) => {
	const closeHandler = (e) => {
		if (e.target.className === 'product-detail' || e.target.className === 'btn')
			setSelectedProduct([]);
	};

	return (
		<div className="product-detail" onClick={closeHandler}>
			<div className="details">
				<h4>{product.title}</h4>
				<img src={product.image} alt={product.name} />
				<h3>${product.price}</h3>
				<p>{product.description}</p>
				<button onClick={closeHandler} className="btn">
					Close
				</button>
			</div>
		</div>
	);
};

export default ProductDetail;
