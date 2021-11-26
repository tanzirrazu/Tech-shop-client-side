import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination';
import 'swiper/components/navigation';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import slide1 from '../../../Images/slide9.jpg';
import slide2 from '../../../Images/slide10.jpg';
import slide3 from '../../../Images/slide8.jpg';
import slide4 from '../../../Images/slide11.jpg';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Autoplay, Navigation]);
const Banner = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				className='mySwiper'>
				<SwiperSlide>
					<img src={slide1} alt='slide' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt='slide2' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt='slide3' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} alt='slide4' />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Banner;
