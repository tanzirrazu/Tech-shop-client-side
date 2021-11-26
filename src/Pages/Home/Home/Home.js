import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Navigation/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
