import React, { useRef } from 'react';

/* Static */
import PierArticle from './../static/images/articles/pier.png';
import CardArticle from './../static/images/articles/card.png';
import DroneArticle from './../static/images/articles/drone.png';
import KotlinArticle from './../static/images/articles/kotlin.png';
import MacbookArticle from './../static/images/articles/macbook.png';
import NotesArticle from './../static/images/articles/notes.png';

import UserIcon from './../static/icons/user.svg';
import ClockIcon from './../static/icons/clock.svg';
import ShareIcon from './../static/icons/share.svg';

import NewsletterTop from './../static/images/newsletter/newsletter-top.png';
import NewsletterBottom from './../static/images/newsletter/newsletter-bottom.png';

/* Misc */
import { SplitText } from '../services/SplitText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Stories = () => {

	const articleItems = [
		{
			title: 'Und wieder wird dein Blick zu Stein vor mir',
			image: DroneArticle,
			author: 'Felix Hebgen',
			readTime: 2,
			extract: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
		},
		{
			title: 'Und wieder wird dein Blick zu Stein vor mir',
			image: MacbookArticle,
			author: 'Felix Hebgen',
			readTime: 5,
			extract: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
		},
		{
			title: 'Und wieder wird dein Blick zu Stein vor mir',
			image: NotesArticle,
			author: 'Felix Hebgen',
			readTime: 3,
			extract: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
		},
		{
			title: 'Und wieder wird dein Blick zu Stein vor mir',
			image: KotlinArticle,
			author: 'Felix Hebgen',
			readTime: 7,
			extract: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
		},
		{
			title: 'Und wieder wird dein Blick zu Stein vor mir',
			image: PierArticle,
			author: 'Felix Hebgen',
			readTime: 1,
			extract: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
		},
		{
			title: 'Und wieder wird dein Blick zu Stein vor mir',
			image: CardArticle,
			author: 'Felix Hebgen',
			readTime: 5,
			extract: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
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

	const articles = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.article', {
			y: 25,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .2,
			stagger: .1,
			delay: .4
		});
	}, { scope: articles });


	return (
		<main className="stories">
			<div className="page-heading" ref={heading}>
				<div className="wrapper container">
					<h1>Stories</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="articles container" ref={articles}>
				<div className="featured">
					{articleItems.slice(0, 2).map((article: any, index: number) =>
						<div className="article" key={index}>
							<img src={article.image} alt="Article Image" />
							<div className="meta">
								<h2>{article.title}</h2>
								<p>{article.extract}</p>
								<ul className="details">
									<li><a href="#!"><img src={UserIcon} alt="User"/> {article.author}</a></li>
									<li><a href="#!"><img src={ClockIcon} alt="Clock "/> {article.readTime} Minutes</a></li>
								</ul>
								<ul className="details right">
									<li><a href="#!"><img src={ShareIcon} alt="Share"/> Share</a></li>
								</ul>
							</div>
						</div>
					)}
				</div>
				<div className="aside">
					{articleItems.slice(2, 5).map((article: any, index: number) =>
						<div className="article" key={index}>
							<img src={article.image} alt="Article Image" />
							<div className="meta">
								<h2>{article.title}</h2>
								<p>{article.extract}</p>
								<ul className="details">
									<li><a href="#!"><img src={UserIcon} alt="User"/> {article.author}</a></li>
									<li><a href="#!"><img src={ClockIcon} alt="Clock "/> {article.readTime} Minutes</a></li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="newsletter container">
				<img src={NewsletterTop} alt="Background Image" className="bg-top" />
				<img src={NewsletterBottom} alt="Background Image" className="bg-bottom" />
				<div className="description">
					<p>Free newsletter</p>
					<h3>Consider staying in the stream.</h3>
				</div>
				<div className="form">
					<input type="text" placeholder="your name" required></input>
					<input type="text" placeholder="email address" required></input>
					<button>Sign Up</button>
				</div>
			</div>
		</main>
	);
}

export default Stories;