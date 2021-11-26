import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Navigation/Header';
import Rating from 'react-rating';
import { HiStar, HiShoppingCart, HiOutlineStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Allproducts = () => {
	const starfill = <HiStar />;
	const starOutline = <HiOutlineStar />;
	const shipingCart = <HiShoppingCart />;
	const [allProducts, setAllProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	useEffect(() => {
		axios
			.get('http://localhost:5000/allproducts')
			.then((res) => setAllProducts(res.data));
	}, []);
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
	const productsPerPage = 20;
	const pagesVisited = pageNumber * productsPerPage;
	const displayProducts = allProducts
		.slice(pagesVisited, pagesVisited + productsPerPage)
		.map((products) => {
			return (
				<div key={products._id}>
					<div>
						<div className='flex items-center w-full justify-center'>
							<div className='max-w-sm rounded  bg-white dark:bg-gray-800'>
								<div className='flex items-center shadow-2xl'>
									<div className='px-6 py-5'>
										<Link to={`/details/${products._id}`}>
											<div>
												<p className='text-base leading-none text-gray-800 dark:text-gray-100'>
													{products.name.slice(0, 60)}
												</p>
												<p className='text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2'>
													{products.stock} /product left
												</p>
												<p className='text-xs pt-2 text-yellow-500'>
													<Rating
														fullSymbol={starfill}
														emptySymbol={starOutline}
														initialRating={products.star}
														readonly
													/>
												</p>
												<p className='text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-3'>
													{products.price}
												</p>
											</div>
										</Link>
										<div className='pt-4'>
											<button
												onClick={() => handelCart(products)}
												className='py-2 flex px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white'>
												<span className='mr-2 '>{shipingCart}</span> Add To Cart
											</button>
										</div>
									</div>
									<div className='px-3'>
										<img src={products.img} style={{ width: '400px' }} alt='medal' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	const pageCount = Math.ceil(allProducts.length / productsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	return (
		<div>
			<Header cart={cart} />
			<div>
				<div>
					<div>
						<h1 className='text-5xl py-16 font-serif bg-red-200 text-red-600 font-semibold text-center'>
							Our All Products
						</h1>
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 place-items-center bg-red-100 py-10'>
					{displayProducts}
				</div>
				<ReactPaginate
					previousLabel={'Previous'}
					nextLabel={'Next'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'paginationBttns'}
					previousLinkClassName={'previousBttn'}
					nextLinkClassName={'nextBttn'}
					disabledClassName={'paginationDisabled'}
					activeClassName={'paginationActive'}
				/>
			</div>

			<Footer />
		</div>
	);
};

export default Allproducts;
