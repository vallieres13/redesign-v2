import React from 'react';

/* Assets */
import AmexLogo from '../assets/images/offers/amex.svg';
import AmexCards from '../assets/images/offers/amex-cards.png?format=avif';
import AmexPlat from '../assets/images/offers/amex-plat.png?format=avif';
import AmexGold from '../assets/images/offers/amex-gold.png?format=avif';
import AmexGreen from '../assets/images/offers/amex-green.png?format=avif';
import AmexPlatPlain from '../assets/images/offers/amex-plat-plain.png?format=avif';
import AmexGoldPlain from '../assets/images/offers/amex-gold-plain.png?format=avif';
import AmexGreenPlain from '../assets/images/offers/amex-green-plain.png?format=avif';
import MilesMoreLogo from '../assets/images/offers/milesmore.svg';
import MilesMoreCards from '../assets/images/offers/milesmore-cards.png?format=avif';
import MilesBlue from '../assets/images/offers/amex-plat.png?format=avif';
import MilesGold from '../assets/images/offers/amex-plat.png?format=avif';
import MilesBluePlain from '../assets/images/offers/milesmore-blue-plain.png?format=avif';
import MilesGoldPlain from '../assets/images/offers/milesmore-gold-plain.png?format=avif';

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
			small: '+20.000 für die Gold Card',
			button: 'Mehr erfahren',
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
			subtitle: 'Indem du mich als Weiterempfehlung angibst',
			small: 'Empfehlungs-Angebot',
			button: 'Mehr erfahren',
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

	console.log(buttonUrl!);
	console.log(window.location.hostname);

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
							<a href={buttonUrl ?? offer.buttonUrl} className="button" type={buttonUrl!.includes(window.location.hostname) ? '' : '_blank'}>{button ?? offer.button}</a>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default Offer;