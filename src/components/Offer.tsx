import React from 'react';

/* Static */
import AmexLogo from './../static/images/offers/amex.svg';
import AmexCards from './../static/images/offers/amex-cards.png';
import AmexPlat from './../static/images/offers/amex-plat.png';
import AmexGold from './../static/images/offers/amex-gold.png';
import AmexGreen from './../static/images/offers/amex-green.png';
import AmexPlatPlain from './../static/images/offers/amex-plat-plain.png';
import AmexGoldPlain from './../static/images/offers/amex-gold-plain.png';
import AmexGreenPlain from './../static/images/offers/amex-green-plain.png';
import MilesMoreLogo from './../static/images/offers/milesmore.svg';
import MilesMoreCards from './../static/images/offers/milesmore-cards.png';
import MilesBlue from './../static/images/offers/amex-plat.png';
import MilesGold from './../static/images/offers/amex-plat.png';
import MilesBluePlain from './../static/images/offers/milesmore-blue-plain.png';
import MilesGoldPlain from './../static/images/offers/milesmore-gold-plain.png';

interface Props {
	type: string;
	promo?: boolean;
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
	promo: true,
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
		promo = defaultProps.promo,
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
			promo: true,
			logo: AmexLogo,
			cards: AmexCards,
			splash: '+30.000 Extra',
			subtitle: 'Membership Rewards',
			small: '+20.000 for the Gold Card',
			button: 'Card Details',
			buttonUrl: '#!',
			background: 'linear-gradient(265deg, #016FD0 19.83%, rgba(1, 111, 208, 0.05) 88.25%)',
			reverse: false
		},
		{
			type: 'miles-more',
			promo: true,
			logo: MilesMoreLogo,
			cards: MilesMoreCards,
			splash: '+4.000 Miles',
			subtitle: 'By adding me as a referrer',
			small: 'Referral Offer',
			button: 'Card Details',
			buttonUrl: '#!',
			background: 'linear-gradient(130deg, #162458 19.83%, rgba(22, 36, 88, 0.05) 88.25%)',
			reverse: true
		}
	];

	const offer = types.find((offer) => offer.type === type);

	if(cards !== defaultProps.cards) {
		const cardMap: any = {
			'amex-plat': AmexPlat,
			'amex-plat-plain': AmexPlatPlain,
			'amex-gold': AmexGold,
			'amex-gold-plain': AmexGoldPlain,
			'amex-green': AmexGreen,
			'amex-green-plain': AmexGreenPlain,
			'miles-blue': MilesBlue,
			'miles-blue-plain': MilesBluePlain,
			'miles-gold': MilesGold,
			'miles-gold-plain': MilesGoldPlain
		};

		if(cardMap.hasOwnProperty(cards)) cards = cardMap[cards];
	}

	if(!promo) background = '#F6F6F6';

	return (
		<>
			{offer &&
				<div className={'offer ' + offer.type + (reverse ? ' reverse' : '') + (promo ? ' promo' : '')}>
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