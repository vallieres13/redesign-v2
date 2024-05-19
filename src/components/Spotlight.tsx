import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

/* Assets */
import DesignSpotlight from '../assets/images/spotlight/design.png?format=avif';
import MarketingSpotlight from '../assets/images/spotlight/marketing.png?format=avif';
import CodeSpotlight from '../assets/images/spotlight/code.png?format=avif';
import AiSpotlight from '../assets/images/spotlight/ai.png?format=avif';

/* Misc */
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Heading from '../components/Heading';

const Spotlight = () => {

	const spotlightItems = [
		{
			illustration: DesignSpotlight,
			title: 'Interaction Design',
			description: 'Crafting intuitive and seamless user experiences through thoughtful interaction design is my passion and expertise.',
			buttonTitle: 'Learn more',
			buttonTarget: '/hire'
		},
		{
			illustration: MarketingSpotlight,
			title: 'Online Marketing',
			description: 'Driving digital success through strategic marketing initiatives to maximise reach and engagement.',
			buttonTitle: 'Learn more',
			buttonTarget: '/hire'
		},
		{
			illustration: CodeSpotlight,
			title: 'Web & App Development',
			description: 'Empowering digital experiences through dynamic web development and impactful solutions in the realm of the web.',
			buttonTitle: 'Learn more',
			buttonTarget: '/hire'
		},
		{
			illustration: AiSpotlight,
			title: 'Artificial Intelligence',
			description: 'Harnessing the power of AI, I innovate and implement solutions that redefine possibilities and elevate user experiences.',
			buttonTitle: 'Learn more',
			buttonTarget: '/hire'
		}
	];

	return (
		<div className="spotlight">
			<Heading container={true}>Spotlight</Heading>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				slidesPerView={'auto'}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true
				}}
				pagination={{clickable: true}}
				modules={[Autoplay, Pagination]}
				className="cards"
			>
				{spotlightItems.map((item: any, index: number) =>
					<SwiperSlide className="card" key={index}>
						<div className="illustration">
							<img src={item.illustration} alt={item.title}/>
						</div>
						<div className="description">
							<h2>{item.title}</h2>
							<p>{item.description}</p>
							<div className="actions">
								<Link to={item.buttonTarget} className="button primary">{item.buttonTitle}</Link>
							</div>
						</div>
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	)
}

export default Spotlight;