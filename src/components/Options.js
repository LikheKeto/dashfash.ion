import React, { useState } from 'react';
import { getFilteredProducts, getProducts } from './Api';

const Options = ({ categories, setProducts, setLoaded }) => {
	const [sortBy, setSortBy] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const sortHandler = (e) => {
		setSortBy(e.target.value);
	};

	const selectHandler = (e) => {
		setSelectedCategory(e.target.value);
	};

	const fetchHandler = () => {
		setLoaded(false);
		if (selectedCategory === 'all' || selectedCategory === '') {
			getProducts(sortBy)
				.then((data) => {
					setLoaded(true);
					if (data.length !== 0) setProducts(data);
				})
				.catch((err) => console.log(err));
		} else if (selectedCategory !== '') {
			getFilteredProducts(selectedCategory, sortBy)
				.then((data) => {
					setLoaded(true);
					if (data.length !== 0) setProducts(data);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			<h5>Sort By</h5>
			<select onChange={sortHandler} name="sortBy" id="sortBy">
				<option value="">sort by</option>
				<option value="asc">price ascending</option>
				<option value="desc">price descending</option>
			</select>
			<h5>Categories</h5>
			<ul>
				<li style={{ listStyle: 'none' }} value="all">
					<input
						defaultChecked={true}
						onChange={selectHandler}
						value="all"
						type="radio"
						name="radio"
					></input>
					All
				</li>
				{categories.map((category) => (
					<li key={category} style={{ listStyle: 'none' }}>
						<input
							onChange={selectHandler}
							value={category}
							type="radio"
							name="radio"
						></input>
						{category}
					</li>
				))}
			</ul>
			<button onClick={fetchHandler} className="btn btn-outline-info">
				Appy filters
			</button>
		</>
	);
};

export default Options;
