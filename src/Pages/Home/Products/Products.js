import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);

	const handelCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		// axios.post('http://localhost:5000/orders').then((res) => res.product);

		fetch('http://localhost:5000/orders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('Product added to cart');
				}
			});
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/products')
			.then((res) => setProducts(res.data));
	}, []);

	return (
		<div>
			<div>
				<div>
					<h1 className='text-5xl py-16 font-serif bg-pink-200 text-pink-600 font-semibold text-center'>
						Our Featured Products
					</h1>
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 place-items-center bg-pink-100 py-10'>
				{products.map((product) => (
					<Product
						key={product.key}
						product={product}
						handelCart={handelCart}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
