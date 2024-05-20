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
			description: 'Die Gestaltung intuitiver und nahtloser Benutzererfahrungen durch durchdachtes Interaktionsdesign ist meine Leidenschaft.',
			buttonTitle: 'Mein Profil',
			buttonTarget: '/profile'
		},
		{
			illustration: MarketingSpotlight,
			title: 'Online Marketing',
			description: 'Digitale Erfolge durch strategische Marketinginitiativen vorantreiben, um Kunden-Engagement zu maximieren.',
			buttonTitle: 'Mein Profil',
			buttonTarget: '/profile'
		},
		{
			illustration: CodeSpotlight,
			title: 'Web & App Entwicklung',
			description: 'Digitale Erlebnisse durch dynamische Webentwicklung und wirkungsvolle Lösungen im Bereich des Webs stärken.',
			buttonTitle: 'Mein Profil',
			buttonTarget: '/profile'
		},
		{
			illustration: AiSpotlight,
			title: 'Künstliche Intelligenz',
			description: 'Durch die Nutzung von KI schaffe ich Innovationen und setze Lösungen um, die die Grenzen neu definieren und aufwerten.',
			buttonTitle: 'Mein Profil',
			buttonTarget: '/profile'
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