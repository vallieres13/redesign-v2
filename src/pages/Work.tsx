import React, { useEffect, useRef, useState } from 'react';

/* Assets */
import First from '../assets/images/impressions/first.png?format=avif';
import Second from '../assets/images/impressions/second.png?format=avif';
import Third from '../assets/images/impressions/third.png?format=avif';
import Fourth from '../assets/images/impressions/fourth.png?format=avif';
import Misc from '../assets/images/impressions/misc.png?format=avif';

/* Misc */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
import { SplitText } from '../services/SplitText';
import { Helmet } from 'react-helmet';

const Work = () => {

	const [ enableTiltEffects, setEnableTiltEffects ] = useState([] as number[]);

	/* Register ScrollTrigger */
	gsap.registerPlugin(ScrollTrigger);

	const impressionItems = [
		{
			title: 'Marketing Schäferei Stapp',
			image: First,
			launched: 2021,
			description: 'Die Firma DeineIT und ich haben mit "Wanderschäfer Stapp" zusammengearbeitet - eine Website, die moderne Schafhaltung bewirbt. Mit lebendigem Design, Marketing und Branding haben wir die wichtige Rolle der Schäfer und ihre Verbindung zum Land präsentiert. Unser Ziel war es, die bedeutende Rolle der Schafhaltung für alle zugänglich und geschätzt zu machen.'
		},
		{
			title: 'Friendello Social Media Metaverse',
			image: Second,
			launched: 2019,
			description: 'Friendello war ein deutscher Social-Media-Hub, der an Facebook erinnerte, aber für eine lebendige Online-Community maßgeschneidert war, in der Mitglieder fiktive Charaktere verkörperten. Durch immersives Charakterdesign und Storytelling interagierten Tausende von Benutzern mit gemeinsamen Nachrichten und Beiträgen und schufen eine reiche, interaktive digitale Landschaft.'
		},
		{
			title: 'Branding & Marken-Illustration',
			image: Third,
			launched: 2022,
			description: 'Effektives Branding umfasst ein auffälliges Logo, sorgfältig ausgewählte Farben und konsistentes Design. Diese Elemente schaffen sofortige Wiedererkennung. Eine durchdachte Strategie gewährleistet, dass diese visuellen Elemente zusammen mit ansprechenden Inhalten eine überzeugende Geschichte erzählen, die bei Ihrem Publikum Anklang findet und einen bleibenden Eindruck hinterlässt.'
		},
		{
			title: 'Web-Design Mentor in Schulen',
			image: Fourth,
			launched: 2020,
			description: 'Für einige Monate habe ich ein Webdesign-Workshop an einer Schule in Roßdorf, Darmstadt-Dieburg, betreut. Gemeinsam haben wir neue Ideen erkundet, Fähigkeiten verfeinert und Kreativität gefördert. Es war wirklich erfüllend, das Wachstum meiner Schülerinnen und Schüler in Wissen und Enthusiasmus zu beobachten.'
		},
		{
			title: 'Viel mehr einzigartige Projekte',
			image: Misc,
			launched: '2016 — 2019',
			description: 'Während es noch zahlreiche weitere bemerkenswerte Projekte gibt, an denen ich beteiligt war, ist diese Seite bereits recht lang. Wenn Sie mehr über diese Projekte erfahren möchten oder ein Angebot wünschen, zögern Sie nicht mich zu kontaktieren! Ich teile sehr gerne weitere Details und Einblicke über meine Erfahrungen.'
		}
	];

	const heading = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.line', {
			x: -1800,
		}, {
			x: 0,
			duration: 2,
			ease: 'power4.out',
			delay: .25
		});

		const pageHeading = document.querySelector('.page-heading h1') as HTMLElement;
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

		gsap.fromTo('.underscore', {
			opacity: 0
		}, {
			opacity: 1,
			duration: .2,
			delay: .3
		});
	}, { scope: heading });

	const impressions = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const allImpressions = impressions.current!.querySelectorAll(':scope > .impression');
		allImpressions.forEach((impression: any, index: number) => {
			const span = impression.querySelector('.intro span') as HTMLSpanElement;
			const title = impression.querySelector('.intro h2') as HTMLHeadingElement;
			const imageOverlay = impression.querySelector('.intro .image .overlay') as HTMLImageElement;
			const description = impression.querySelector('.description') as HTMLImageElement;

			gsap.to('.slide-' + index, {
				scrollTrigger: {
					trigger: '.slide-' + index,
					start: 'top bottom',
					end: '+=300px',
					scrub: true
				},
				onComplete: () => {
					gsap.to(span, {
						y: 0,
						opacity: 1,
						duration: .3,
						delay: .25
					});

					gsap.to(title,{
						x: 0,
						opacity: 1,
						duration: .25,
						delay: .2
					});

					gsap.to(imageOverlay, {
						height: 0,
						duration: 1.5,
						ease: 'power4.out',
						delay: .25,
						onComplete: () => setEnableTiltEffects(enableTiltEffects => [ ...enableTiltEffects, index ])
					});

					gsap.to(description, {
						y: 0,
						opacity: 1,
						duration: .3,
						delay: .25
					});
				}
			});
		});
	}, { scope: impressions });

	useEffect(() => {
		if(!enableTiltEffects) return;

		enableTiltEffects.forEach((index: number) => {
			const card = document.querySelector('.slide-' + index + ' img') as HTMLImageElement;
			VanillaTilt.init(card, {
				reverse: true,
				max: 7,
				glare: true,
				perspective: 2000,
				speed: 2000
			});
		});
	}, [enableTiltEffects]);

	return (
		<main className="work">
			<Helmet>
				<meta name="title" content="Impressionen — Felix Hebgen" />
				<title>Impressionen — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading" ref={heading}>
				<div className="wrapper container">
				<h1>Impressionen</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="impressions container" ref={impressions}>
				{impressionItems.map((item: any, index: number) =>
					<div className={`impression ${index % 2 === 0 ? '' : 'rtl'} slide-${index}`} key={index}>
						<div className="intro">
							<div className="title">
								<span><figure className="arrow">{index % 2 === 0 ? '' : '<--'}</figure> .0{index + 1} <figure className="arrow">{index % 2 === 0 ? '-->' : ''}</figure></span>
								<h2>{item.title}</h2>
							</div>
							<div className="image">
								<div className="overlay"></div>
								{/* first pic as img tag, all others as lazyloadimage */}
								<img src={item.image} alt={item.title}/>
							</div>
						</div>
						<div className="description">
							<span className="launched">{item.launched}</span>
							<p>{item.description}</p>
							{index + 1 === impressionItems.length &&
								<div className="actions container">
									<Link to={'/profile'} className="button primary">Mein Profil</Link>
									<Link to={'/contact'} className="button">Kontakt</Link>
								</div>
							}
						</div>
					</div>
				)}
			</div>
		</main>
	);
}

export default Work;