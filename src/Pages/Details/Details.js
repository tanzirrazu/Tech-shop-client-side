import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { HiShoppingCart } from 'react-icons/hi';
const Details = () => {
	const shipingCart = <HiShoppingCart />;
	const { id } = useParams();
	const [details, setDetails] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:5000/allproducts/${id}`)
			.then((res) => setDetails(res.data));
	});

	return (
		<div className='p-16 '>
			<div className='w-2/4 mx-auto'>
				<div className='flex items-center content-between mr-4'>
					<img src={details.img} alt='dynamicimg' width='400px' />
					<div className='ml-6'>
						<h2 className='text-xl break-words font-bold mb-2'>{details.name}</h2>
						<p className='text-md  font-bold mb-2'>Seller: {details.seller}</p>
						<p className='text-md  font-bold mb-2'>Category: {details.category}</p>
						<p className='text-md  font-bold mb-2'>Stock: {details.stock}</p>
						<h6 className=' mb-1 font-bold text-md'>Price: {details.price}</h6>
						<h6 className=' mb-1 font-bold text-md'>
							Shipping Fee: {details.shipping}
						</h6>
						<button className='px-4 bg-red-600 text-white py-2 mt-4 rounded-md flex items-center'>
							<span>{shipingCart}</span> Add To Cart
						</button>
					</div>
				</div>

				<div className=' mt-4'>
					<h2 className='font-bold text-lg'>Description</h2>
					<p className='mt-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						voluptate inventore optio ut quod, dolores, asperiores, atque eius
						sapiente doloribus repudiandae fugit aliquid quibusdam maiores vel
						expedita recusandae iste eligendi minima enim sed unde repellendus.
						Facilis obcaecati expedita quisquam libero porro aut, temporibus dolorum
						eos! Enim modi quasi quos vitae.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
