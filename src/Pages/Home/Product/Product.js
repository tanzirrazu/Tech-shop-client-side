import React from 'react';
import Rating from 'react-rating';
import { HiStar, HiShoppingCart, HiOutlineStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Product = (props) => {
	const { name, img, stock, price, star, _id, handelCart } = props.product;
	const starfill = <HiStar />;
	const starOutline = <HiOutlineStar />;
	const shipingCart = <HiShoppingCart />;

	return (
		<div>
			<div className='flex items-center w-full justify-center'>
				<div className='max-w-sm rounded  bg-white dark:bg-gray-800'>
					<div className='flex items-center shadow-2xl'>
						<div className='px-6 py-5'>
							<Link to={`/details/${_id}`}>
								<div>
									<p className='text-base leading-none text-gray-800 dark:text-gray-100'>
										{name.slice(0, 60)}
									</p>
									<p className='text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2'>
										{stock} /product left
									</p>
									<p className='text-xs pt-2 text-yellow-500'>
										<Rating
											fullSymbol={starfill}
											emptySymbol={starOutline}
											initialRating={star}
											readonly
										/>
									</p>
									<p className='text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-3'>
										{price}
									</p>
								</div>
							</Link>
							{/* <Link to='/cart'> */}
							<div className='pt-4'>
								<button
									onClick={() => props.handelCart(props.product)}
									className='py-2 flex px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white'>
									<span className='mr-2 '>{shipingCart}</span> Add To Cart
								</button>
							</div>
							{/* </Link> */}
						</div>
						<div className='px-3'>
							<img src={img} style={{ width: '400px' }} alt='medal' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
