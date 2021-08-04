import React from 'react';

const Cart = ({ setCartItem, cartItem }) => {
	const pushHandler = () => {
		let box = document.getElementsByClassName('items')[0];
		let box2 = document.getElementsByClassName('cart')[0];
		box.classList.toggle('show');
		box2.classList.toggle('show2');
		let cover = document.getElementsByClassName('cover')[0];
		cover.classList.toggle('no-touch');
	};

	const addCnt = (item) => {
		let addedItem = cartItem.filter((i) => i.id === item.id);
		let index = cartItem.indexOf(addedItem[0]);
		addedItem[0].cnt += 1;
		cartItem.splice(index, 1, addedItem[0]);
		setCartItem((p) => [...p]);
	};
	const subCnt = (item) => {
		let subItem = cartItem.filter((i) => i.id === item.id);
		let index = cartItem.indexOf(subItem[0]);
		subItem[0].cnt -= 1;
		if (subItem[0].cnt === 0) {
			cartItem.splice(index, 1);
			return setCartItem((p) => [...p]);
		}
		cartItem.splice(index, 1, subItem[0]);
		setCartItem((p) => [...p]);
	};

	const orderHandler = () => {
		setCartItem([]);
	};

	const sumHandler = () => {
		let sum = 0;
		cartItem.forEach((item) => {
			sum = sum + item.price * item.cnt;
		});
		return sum.toFixed(3);
	};
	sumHandler();

	return (
		<div className="cover no-touch">
			<div onClick={pushHandler} className="cart">
				<i className="fas fa-shopping-cart"></i>
			</div>
			<div className="items">
				<p>Items in your cart</p>
				{cartItem.map((item) => (
					<div className="item" key={item.id}>
						<p>{item.title}</p>
						<div className="group2">
							<button onClick={() => subCnt(item)} className="btn">
								<i className="fas fa-minus fa-xs"></i>
							</button>
							<p>{item.cnt}</p>
							<button onClick={() => addCnt(item)} className="btn">
								<i className="fas fa-plus fa-xs"></i>
							</button>
						</div>
						<p className="price">
							${Number((item.cnt * item.price).toFixed(2))}
						</p>
					</div>
				))}
				<p>Total: ${sumHandler()}</p>
				<button onClick={orderHandler} className="btn">
					Order now
				</button>
			</div>
		</div>
	);
};

export default Cart;
