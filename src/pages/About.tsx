import React, { useEffect, useRef } from 'react';

/* Components */
import Timeline from './../components/Timeline';
import Heading from './../components/Heading';

/* Assets */
import BalconyPicture from '../assets/images/about/balcony.png?format=avif';
import TowerPicture from '../assets/images/about/tower.png?format=avif';
import NewYearsPicture from '../assets/images/about/newyears.png?format=avif';

import StarCitizen from '../assets/images/about/sc.png?format=avif';
import WorldOfWarships from '../assets/images/about/wows.png?format=avif';
import Eco from '../assets/images/about/eco.png?format=avif';

import WavingEmoji from '../assets/emojis/waving.gif';
import SmileyEmoji from '../assets/emojis/smiley.gif';
import WinkingEmoji from '../assets/emojis/wink.gif';
import CoolEmoji from '../assets/emojis/cool.gif';
import CoffeeEmoji from '../assets/emojis/coffee.gif';
import RocketEmoji from '../assets/emojis/rocket.gif';

/* Misc */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VanillaTilt from 'vanilla-tilt';
import {SplitText} from "../services/SplitText";
import { Helmet } from 'react-helmet';

const About = () => {

	const hello = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const pageHeading = document.querySelector('.hello .heading h1') as HTMLElement;
		const split = new SplitText({}).split(pageHeading);
		gsap.fromTo(split.chars, {
			x: 25,
			opacity: 0
		}, {
			x: 0,
			opacity: 1,
			duration: .15,
			stagger: .03,
			delay: .25
		});

		gsap.fromTo('.hello .heading h1 img', {
			x: 25,
			opacity: 0
		}, {
			x: 0,
			opacity: 1,
			duration: .15,
			stagger: .03,
			delay: .4
		});

		gsap.fromTo('.hello .description p', {
			y: 25,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .15,
			stagger: .03,
			delay: .3
		});

		gsap.fromTo('.hello .pictures img', {
			y: 45,
			x: 60,
			opacity: 0
		}, {
			y: 0,
			x: 0,
			opacity: 1,
			ease: 'back.out',
			duration: .4,
			stagger: .15,
			delay: .4
		});
	}, { scope: hello });

	useEffect(() => {
		const musicEmbeds: NodeListOf<HTMLDivElement> = document.querySelectorAll('.music iframe');
		musicEmbeds.forEach((embed: HTMLDivElement) => {
			VanillaTilt.init(embed, {
				reverse: true,
				max: 5,
				scale: .98,
				perspective: 1000,
				speed: 2000
			});
		});

		const gameCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.games .game');
		gameCards.forEach((card: HTMLDivElement) => {
			VanillaTilt.init(card, {
				reverse: true,
				max: 5,
				scale: .98,
				perspective: 1000,
				speed: 2000
			});
		});
	}, []);

	const headlines = [
		{
			slug: 'Guude!',
			emoji: WavingEmoji
		},
		{
			slug: 'Hallo!',
			emoji: SmileyEmoji
		},
		{
			slug: 'Guude!',
			emoji: WinkingEmoji
		},
		{
			slug: 'Hey!',
			emoji: CoolEmoji
		},
		{
			slug: 'Hallo!',
			emoji: CoffeeEmoji
		},
		{
			slug: 'Hallo!',
			emoji: RocketEmoji
		}
	];

	const headline = headlines[Math.floor(Math.random() * headlines.length)];

	const handleSelected = (ev: React.ChangeEvent<HTMLSelectElement>) => {
		const span = document.querySelector('.hello p .select') as HTMLSpanElement;
		const value = ev.currentTarget.value;

		gsap.to(span, {
			autoAlpha: 0,
			duration: .2,
			onComplete: () => {
				span.innerHTML = value;
				gsap.to(span, {
					autoAlpha: 1,
					duration: .2
				});
			}
		});
	}

	return (
		<main className="about">
			<Helmet>
				<meta name="title" content="Über mich — Felix Hebgen"/>
				<title>Über mich — Felix Hebgen</title>
			</Helmet>
			<div className="hello container" ref={hello}>
				<div className="description">
					<Heading>{headline.slug} <img src={headline.emoji} alt={headline.slug} className={'emoji' + (headline.emoji === WavingEmoji ? ' waving' : '')} /></Heading>
					<p>
						Ich bin Felix, ein 22-jähriger Entwickler aus dem Odenwald, Hessen. <span className="emoji" style={{ paddingRight: '6px' }}>🌳</span>
						Seit meinem ersten Blog in 2012, bin ich immer weiter in die digitale Content Creation gestürzt! <span className="emoji" style={{ paddingLeft: '6px' }}>🚀</span>
					</p>
					<p>
						Angetrieben durch
						<span className="select">
							<select onChange={handleSelected}>
								<option value="Inspiration.">Inspiration</option>
								<option value="Kreativität.">Kreativität</option>
								<option value="Motivation.">Motivation</option>
								<option value="steigende Zahlen.">steigende Zahlen</option>
								<option value="Kunden.">Kunden</option>
								<option value="Teamarbeit.">Teamarbeit</option>
							</select>
						</span> <span className="hyphen"></span>
					</p>
				</div>
				<div className="pictures">
					<img src={BalconyPicture} alt="Auf dem Balkon"/>
					<img src={TowerPicture} alt="Auf einem Turm"/>
					<img src={NewYearsPicture} alt="Silvester 2023"/>
				</div>
			</div>
			<div className="interests container">
				<div className="music">
					<Heading>Musik</Heading>
					<p>Eine kleine Auswahl von Songs, die mir gefallen. Mal reinhören?</p>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/take-it-easy/635791801?i=635791802"></iframe>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/all-or-nothing/396455030?i=396455031"></iframe>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/the-logical-song/1440756022?i=1440756472"></iframe>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/a-horse-with-no-name/63820303?i=63820146"></iframe>
				</div>
				<div className="games">
					<Heading right={true}>Games</Heading>
					<p>Die Zeit wird kommen, an dem Star Citizen ein Veröffentlichungsdatum erhält.</p>
					<div className="game" title="Star Citizen">
						<img src={StarCitizen} alt="Star Citizen"/>
					</div>
					<div className="game" title="World of Warships">
						<img src={WorldOfWarships} alt="World of Warships"/>
					</div>
					<div className="game" title="Eco: Global Survival">
						<img src={Eco} alt="Eco: Global Survival"/>
					</div>
					<div className="game empty"></div>
				</div>
			</div>
			<div className="timeline-wrapper">
				<Timeline />
			</div>
		</main>
	);
}

export default About;