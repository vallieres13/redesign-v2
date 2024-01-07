import React, { useRef } from 'react';

/* Components */
import Newsletter from './../components/Newsletter';

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

/* Misc */
import { SplitText } from '../services/SplitText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet';

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
			<Helmet>
				<meta name="title" content="Stories — Felix Hebgen" />
				<title>Stories — Felix Hebgen</title>
			</Helmet>
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
						<Link to={'/article'} key={index}>
							<article className="article">
								<LazyLoadImage src={article.image} alt="Article Image" />
								<div className="meta">
									<h2>{article.title}</h2>
									<p>{article.extract}</p>
									<ul className="details">
										<li><img src={UserIcon} alt="User" /> {article.author}</li>
										<li><img src={ClockIcon} alt="Clock" /> {article.readTime} Minutes</li>
									</ul>
									<ul className="details right">
										<li><img src={ShareIcon} alt="Share" /> Share</li>
									</ul>
								</div>
							</article>
						</Link>
					)}
				</div>
				<div className="aside">
					{articleItems.slice(2, 5).map((article: any, index: number) =>
						<Link to={'/article'} key={index}>
							<article className="article">
								<LazyLoadImage src={article.image} alt="Article Image" />
								<div className="meta">
									<h2>{article.title}</h2>
									<p>{article.extract}</p>
									<ul className="details">
										<li><img src={UserIcon} alt="User" /> {article.author}</li>
										<li><img src={ClockIcon} alt="Clock" /> {article.readTime} Minutes</li>
									</ul>
								</div>
							</article>
						</Link>
					)}
				</div>
			</div>
			<div style={{ margin: '1rem auto 5rem' }}>
				<Newsletter />
			</div>
		</main>
	);
}

export default Stories;