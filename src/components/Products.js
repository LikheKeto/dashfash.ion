import React from 'react';

const Products = ({ products, setSelectedProduct, setCartItem, cartItem }) => {
	const showProduct = (product) => {
		setSelectedProduct([product]);
	};
	const cartHandler = (product) => {
		let item = cartItem.filter((i) => i.id === product.id);
		if (item.length === 0) {
			product.cnt = 1;
			setCartItem([...cartItem, product]);
		} else {
			let index = cartItem.indexOf(item[0]);
			item[0].cnt += 1;
			cartItem.splice(index, 1, item[0]);
			setCartItem((p) => [...p]);
		}
	};

	return (
		<>
			{products.map((product) => (
				<div key={product.id} className="product">
					<p className="productTitle">{product.title}</p>
					<p>{product.category}</p>
					<img src={product.image} alt={product.title} />
					<p className="price">${product.price}</p>
					<div className="buttons">
						<button
							onClick={() => cartHandler(product)}
							className="btn btn-outline-info special"
						>
							<i className="fas fa-shopping-cart"></i>Add to cart
						</button>
						<button
							onClick={() => showProduct(product)}
							className="btn btn-outline-info special"
						>
							View Product
						</button>
					</div>
				</div>
			))}
		</>
	);
};

export default Products;
