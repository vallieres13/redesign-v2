import React, {useEffect, useRef, useState } from 'react';

/* Static */
import First from './../static/images/impressions/first.png';
import Second from './../static/images/impressions/second.png';
import Third from './../static/images/impressions/third.png';
import Fourth from './../static/images/impressions/fourth.png';
import Misc from './../static/images/impressions/misc.png';

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
			description: 'The company DeineIT and I collaborated on “Wanderschäfer Stapp”—a site promoting modern shepherding. With lively design, marketing, and branding, we showcased a shepherds\' vital role and their connection to the land. Our goal was to make the significant role of shepherding accessible and appreciated by all.'
		},
		{
			title: 'Friendello Social Media Metaverse',
			image: Second,
			launched: 2019,
			description: 'Friendello was a German social media hub reminiscent of Facebook but tailored for a vibrant online community where members role-played fictional characters. By immersive character design and storytelling, thousands of users engaged with shared messages and posts, creating a rich, interactive digital landscape.'
		},
		{
			title: 'Branding & Marken-Illustration',
			image: Third,
			launched: 2022,
			description: 'Effective branding involves a standout logo, carefully chosen colors, and consistent design. These elements create instant recognition. A well-crafted strategy ensures these visuals, along with engaging content, tell a compelling story that resonates with your audience, leaving a lasting impression.'
		},
		{
			title: 'Web-Design Mentoring in Schools',
			image: Fourth,
			launched: 2020,
			description: 'For a few months, I mentored a web-design workshop at a school in Roßdorf, Darmstadt-Dieburg. Together, we explored new ideas, honed skills, and fostered creativity. Witnessing my student\'s growth in knowledge and enthusiasm was truly rewarding.'
		},
		{
			title: 'Many other noteworthy projects',
			image: Misc,
			launched: '2016 — 2019',
			description: 'While there are numerous other noteworthy projects I\'ve been involved in, this page is already fairly long. If you\'re interested in learning more about these projects or want a quote, feel free to get in touch with me! I\'d be happy to share further details and insights about my experiences.'
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
				<meta name="title" content="Work — Felix Hebgen" />
				<title>Work — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading" ref={heading}>
				<div className="wrapper container">
				<h1>Work</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="impressions container" ref={impressions}>
				{impressionItems.map((item: any, index: number) =>
					<div className={`impression ${index % 2 === 0 ? '' : 'rtl'} slide-${index}`} key={index}>
						<div className="intro">
							<div className="title">
								<span>{index % 2 === 0 ? '' : '<--'} .0{index + 1} {index % 2 === 0 ? '-->' : ''}</span>
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
									<Link to={'/hire'} className="button primary">Get in Touch</Link>
									<Link to={'/contact'} className="button">Contact</Link>
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