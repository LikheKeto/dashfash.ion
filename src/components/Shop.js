import React, { useEffect, useState } from 'react';
import { getProducts, getCategories } from './Api';
import useWindowDimensions from '../helpers/windowDimension';

//importing components
import Options from './Options';
import Products from './Products';
import ProductDetail from './ProductDetail';

const Shop = ({ setCartItem, cartItem }) => {
	let { width } = useWindowDimensions();
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loaded, setLoaded] = useState(true);
	const [selectedProduct, setSelectedProduct] = useState([]);
	useEffect(() => {
		getProducts().then((data) => {
			setProducts(data);
		});
		getCategories().then((data) => {
			setCategories(data);
		});
	}, []);

	const hideandseek = () => {
		let options = document.getElementsByClassName('options')[0];
		options.classList.toggle('hidden');
	};

	return (
		<>
			{selectedProduct.length === 0 ? null : (
				<ProductDetail
					setSelectedProduct={setSelectedProduct}
					product={selectedProduct[0]}
				/>
			)}
			{products.length !== 0 ? (
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="jumbotron">
								<h1 className="display-4">DashFash.ion</h1>
								<p className="lead">Always Dashing.</p>
								<hr className="my-4" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-2 col-md-12">
							<span className="group">
								<h4>Filter</h4>
								<button
									onClick={hideandseek}
									className={`btn filter ${width <= 768 ? '' : 'hidden'}`}
								>
									<i className="fas fa-filter"></i>
								</button>
							</span>
							<div className={`options show ${width <= 768 ? 'hidden' : ''} `}>
								<Options
									categories={categories}
									setProducts={setProducts}
									setLoaded={setLoaded}
								/>
							</div>
						</div>
						<div className="col-lg-10 col-md-12">
							<h4>Products</h4>
							{loaded ? (
								<div className="grid">
									<Products
										setSelectedProduct={setSelectedProduct}
										products={products}
										setCartItem={setCartItem}
										cartItem={cartItem}
									/>
								</div>
							) : (
								<div className="center">
									<div className="spinner-border" role="status">
										<span className="sr-only">Loading...</span>
									</div>
								</div>
							)}
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

export default Shop;
