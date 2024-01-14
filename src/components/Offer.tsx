import React from 'react';

/* Static */
import AmexLogo from './../static/images/offers/amex.svg';
import AmexCards from './../static/images/offers/amex-cards.png';
import AmexPlat from './../static/images/offers/amex-plat.png';
import AmexGold from './../static/images/offers/amex-gold.png';
import AmexGreen from './../static/images/offers/amex-green.png';
import MilesMoreLogo from './../static/images/offers/milesmore.svg';
import MilesMoreCards from './../static/images/offers/milesmore-cards.png';
import MilesBlue from './../static/images/offers/amex-plat.png';
import MilesGold from './../static/images/offers/amex-plat.png';

interface Props {
	type: string;
	cards?: string;
	reverse?: boolean;
	splash?: null|string;
	subtitle?: null|string;
	small?: null|string;
	button?: null|string;
	buttonUrl?: null|string;
	background?: null|string;
}

const defaultProps = {
	type: 'amex',
	cards: AmexCards,
	reverse: false,
	splash: null,
	subtitle: null,
	small: null,
	button: null,
	buttonUrl: null,
	background: null
}

const Offer = ({
		type = defaultProps.type,
		reverse = defaultProps.reverse,
		cards = defaultProps.cards,
		splash = defaultProps.splash,
		subtitle = defaultProps.subtitle,
		small = defaultProps.small,
		button = defaultProps.button,
		buttonUrl = defaultProps.buttonUrl,
		background = defaultProps.background
	}: Props) => {

	const types = [
		{
			type: 'amex',
			logo: AmexLogo,
			cards: AmexCards,
			splash: '+30.000 Extra',
			subtitle: 'Membership Rewards',
			small: '+20.000 for the Gold Card',
			button: 'Card Details',
			buttonUrl: '#!',
			background: 'linear-gradient(265deg, #016FD0 19.83%, rgba(1, 111, 208, 0.05) 88.25%)'
		},
		{
			type: 'miles-more',
			logo: MilesMoreLogo,
			cards: MilesMoreCards,
			splash: '+4.000 Miles',
			subtitle: 'By adding me as a referrer',
			small: 'Referral Offer',
			button: 'Card Details',
			buttonUrl: '#!',
			background: 'linear-gradient(130deg, #162458 19.83%, rgba(22, 36, 88, 0.05) 88.25%)'
		}
	];

	const offer = types.find((offer) => offer.type === type);

	if(cards !== defaultProps.cards) {
		const cardMap: any = {
			'amex-plat': AmexPlat,
			'amex-gold': AmexGold,
			'amex-green': AmexGreen,
			'miles-blue': MilesBlue,
			'miles-gold': MilesGold
		};

		if(cardMap.hasOwnProperty(cards)) cards = cardMap[cards];
	}

	return (
		<>
			{offer &&
				<div className={'offer ' + offer.type + (reverse ? ' reverse' : '')}>
					<div className="wrapper" style={{ background: background ?? offer.background }}>
						<div className="showcase">
							<img src={cards ?? offer.cards} alt={offer.type} />
						</div>
						<div className="action">
							<img src={offer.logo} className="logo" alt={offer.type} />
							<span className="splash">{splash ?? offer.splash}</span>
							<span>{subtitle ?? offer.subtitle}</span>
							<small>{small ?? offer.small}</small>
							<a href={buttonUrl ?? offer.buttonUrl} className="button">{button ?? offer.button}</a>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default Offer;