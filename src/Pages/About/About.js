import React from 'react';

const About = () => {
	return (
		<div>
			<div className='my-10'>
				<div>
					<h1 className='text-6xl font-bold font-sans text-center'>About Us</h1>
				</div>
				<div className='rounded-full py-3 mt-4 mb-8 px-4 bg-indigo-200 hover:bg-indigo-600 hover:text-white w-1/6 mx-auto'>
					<h1 className='text-lg font-bold hover:text-white font-sans text-center text-gray-800'>
						Home / About
					</h1>
				</div>
			</div>
			<div className=' lg:flex md:flex items-center justify-center w-10/12 mx-auto my-10'>
				<div className='mx-6'>
					<h1 className='text-6xl font-sans font-bold'>About Our Store</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga aliquam
						ratione, ipsa fugiat, soluta autem deserunt, culpa aliquid similique iste
						eveniet eligendi blanditiis mollitia incidunt deleniti dolores esse
						distinctio quasi tempore dolor quos repellendus rem. Aut perspiciatis quo
						saepe perferendis sit suscipit, incidunt doloribus delectus iure
						architecto! Culpa, minima!
					</p>
					<button className='mx-2 my-2 mt-4 bg-white transition duration-500 ease-in-out border-indigo-600 text-indigo-600 rounded border  hover:bg-indigo-600 hover:text-white px-8 py-3 text-sm'>
						CONTACT US
					</button>
				</div>
				<div>
					<img
						width='2000px'
						className='rounded-2xl'
						src='https://i.ibb.co/x3k5n6W/Best-Products-Wallpaper-1.jpg'
						alt='Best-Products-Wallpaper-1.jpg'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
