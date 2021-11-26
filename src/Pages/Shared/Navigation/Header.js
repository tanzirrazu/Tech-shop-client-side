import React, { useState } from 'react';
import logo from '../../../Images/log.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { TiShoppingCart } from 'react-icons/ti';

const Header = () => {
	const { user, logout } = useAuth();
	const [show, setShow] = useState(false);
	const cartIcon = <TiShoppingCart />;
	return (
		<div>
			<header className='grid sm:grid-cols-3 gap-4  place-items-center py-2'>
				<div className='flex items-center justify-between'>
					<h1 className='leading-none text-2xl text-grey-darkest'>
						<Link
							to='/home'
							className='no-underline flex items-center text-grey-darkest hover:text-black'>
							<img src={logo} width='80px' alt='' />
							<span className='font-bold text-red-900'> Tech </span>
							<span>Shop</span>
						</Link>
					</h1>
					<Link className='text-black hover:text-orange md:hidden' to='/'>
						<i className='fa fa-2x fa-bars'></i>
					</Link>
				</div>

				<nav className='flex items-center justify-between'>
					<ul className='list-reset sm:flex'>
						<li className='sm:ml-4'>
							<Link
								className='block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0'
								to='/allproducts'>
								Products
							</Link>
						</li>
						<li className='sm:ml-4'>
							<Link
								className='border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0'
								to='/about'>
								About
							</Link>
						</li>
						<li className='sm:ml-4'>
							<Link
								className='border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0'
								to='/contact'>
								Contact
							</Link>
						</li>
						<li className='sm:ml-4'>
							<Link
								className='border-t block text-2xl no-underline  py-2 text-grey-darkest hover:text-indigo-600 md:border-none md:p-0'
								to='/cart'>
								<span className='relative'>
									<span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'></span>
								</span>
								{cartIcon}
							</Link>
						</li>
					</ul>
				</nav>
				{user.email ? (
					<div className='relative z-50'>
						<div
							className='bg-white  dark:bg-gray-800 flex justify-between'
							onClick={() => setShow(!show)}>
							<div style={{ cursor: 'pointer' }}>
								{user.photoURL ? (
									<img
										style={{
											width: '50px',
											borderRadius: '50%',
											border: '1px solid red',
										}}
										src={user.photoURL}
										alt='userphoto'
									/>
								) : (
									<p className='ml-4'>{user.displayName}</p>
								)}
							</div>

							<div className='bg-white dark:bg-gray-800 items-center flex'></div>
						</div>
						{show && (
							<ul className='visible transition border-2 border-gray-300 duration-300 opacity-100 bg-white dark:bg-gray-800  shadow rounded mt-2 py-1 w-48 absolute'>
								<div className='text-center dark:text-gray-400 text-gray-600 py-3'>
									<img
										className='text-center mx-auto mb-2'
										style={{ width: '70px', borderRadius: '50%' }}
										src={user.photoURL}
										alt='userphoto'
									/>
									<p>{user.displayName}</p>
								</div>
								<li
									onClick={logout}
									className='cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-x'
										width={16}
										height={16}
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path stroke='none' d='M0 0h24v24H0z' />
										<line x1={18} y1={6} x2={6} y2={18} />
										<line x1={6} y1={6} x2={18} y2={18} />
									</svg>
									<span className='ml-2'>Sign Out</span>
								</li>
							</ul>
						)}
					</div>
				) : (
					<Link
						className='border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black  md:border-none md:p-0 ml-4'
						to='/login'>
						<button className='px-4  shadow-lg bg-gradient-to-r from-green-400 to-blue-500  py-2 rounded-lg hover:text-white'>
							Login
						</button>
					</Link>
				)}
			</header>
		</div>
	);
};

// grab everything we need
export default Header;
