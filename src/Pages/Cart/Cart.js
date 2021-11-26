import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {
	const [order, setOrder] = useState([]);
	useEffect(() => {
		// fetch('http://localhost:5000/orders')
		// 	.then((res) => res.json())
		// 	.then((data) => setOrder(data));
		axios.get('http://localhost:5000/orders').then((res) => setOrder(res.data));
	}, []);
	return (
		<div className='p-16 bg-green-50'>
			<div>
				<div className='bg-red-50 py-10'>
					<h2 className='text-2xl font-serif font-bold text-center underline'>
						Order Summary {order.length}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Cart;
