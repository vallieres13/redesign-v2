import React, { useEffect, useRef } from 'react';

/* Components */
import Timeline from './../components/Timeline';

/* Static */
import BalconyPicture from './../static/images/about/balcony.png';
import TowerPicture from './../static/images/about/tower.png';
import NewYearsPicture from './../static/images/about/newyears.png';

import StarCitizen from './../static/images/about/sc.png';
import WorldOfWarships from './../static/images/about/wows.png';
import Eco from './../static/images/about/eco.png';

import WavingEmoji from './../static/emojis/waving.gif';
import CowboyEmoji from './../static/emojis/cowboy.gif';
import SmileyEmoji from './../static/emojis/smiley.gif';
import WinkingEmoji from './../static/emojis/wink.gif';
import CoolEmoji from './../static/emojis/cool.gif';
import CoffeeEmoji from './../static/emojis/coffee.gif';
import RocketEmoji from './../static/emojis/rocket.gif';
import MoyaiEmoji from './../static/emojis/moyai.gif';

/* Misc */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VanillaTilt from 'vanilla-tilt';

const About = () => {

	const hello = useRef<HTMLDivElement>(null);
	useGSAP(() => {
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
			stagger: .15
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
			slug: 'Hello!',
			emoji: WavingEmoji
		},
		{
			slug: 'Howdy!',
			emoji: CowboyEmoji
		},
		{
			slug: 'Hello!',
			emoji: SmileyEmoji
		},
		{
			slug: 'Hey!',
			emoji: WinkingEmoji
		},
		{
			slug: 'Hey!',
			emoji: CoolEmoji
		},
		{
			slug: 'Coffee?',
			emoji: CoffeeEmoji
		},
		{
			slug: 'Hello!',
			emoji: RocketEmoji
		},
		{
			slug: 'Hello.',
			emoji: MoyaiEmoji
		}
	];

	const headline = headlines[Math.floor(Math.random() * headlines.length)];

	return (
		<main className="about">
			<div className="hello container" ref={hello}>
				<div className="description">
					<div className="heading">
					<div className="lead"></div>
						<h1>{headline.slug} <img src={headline.emoji} alt={headline.slug} className={'emoji' + (headline.emoji === WavingEmoji ? ' waving' : '')} /></h1>
					</div>
					<p>I’m Felix, a 21 year old fellow who’s interest has always sparked in digital content creation.
						Including diverse world of online entertainment and the latest tech trends of the 21st century. <div className="hyphen"></div></p>
				</div>
				<div className="pictures">
					<img src={BalconyPicture} alt="Balcony"/>
					<img src={TowerPicture} alt="Tower"/>
					<img src={NewYearsPicture} alt="New Years"/>
				</div>
			</div>
			<div className="interests container">
				<div className="music">
					<div className="heading">
						<div className="lead"></div>
						<h1>Music</h1>
					</div>
					<p>A small selection of songs I currently enjoy. Have a listen! My favourites frequently change over
						time.</p>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/sharp-dressed-man/655184882?i=655185090&l=en-GB"></iframe>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/take-it-easy/635791801?i=635791802&l=en-GB"></iframe>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/the-logical-song/1440756022?i=1440756472&l=en-GB"></iframe>
					<iframe allow="autoplay *; encrypted-media *;" frameBorder="0"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/album/a-horse-with-no-name/63820303?i=63820146&l=en-GB"></iframe>
				</div>
				<div className="games">
					<div className="heading right">
						<div className="lead"></div>
						<h1>Games</h1>
					</div>
					<p>There’s going to be the time where Star Citizen will get its release date. Just give it a few
						more years and ...! — Delayed.</p>
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