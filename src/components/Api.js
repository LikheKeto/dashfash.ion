export const getProducts = (sortBy) => {
	let url;
	if (sortBy === 'asc' || sortBy === 'desc') {
		url = `https://fakestoreapi.com/products?sort=${sortBy}`;
	} else {
		url = `https://fakestoreapi.com/products`;
	}
	return fetch(url)
		.then((data) => data.json())
		.catch((err) => console.log(err));
};

export const getLimitedProducts = (limit) => {
	let url = `https://fakestoreapi.com/products?limit=${limit}`;
	return fetch(url)
		.then((data) => data.json())
		.catch((err) => console.log(err));
};

export const getCategories = () => {
	return fetch('https://fakestoreapi.com/products/categories')
		.then((data) => data.json())
		.catch((err) => console.log(err));
};

export const getFilteredProducts = (filterCategory, sortBy) => {
	let url;
	if (sortBy === 'asc' || sortBy === 'desc') {
		url = `https://fakestoreapi.com/products/category/${filterCategory}?sort=${sortBy}`;
	} else {
		url = `https://fakestoreapi.com/products/category/${filterCategory}`;
	}

	return fetch(url)
		.then((data) => data.json())
		.catch((err) => console.log(err));
};
