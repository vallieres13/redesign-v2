import React, {useEffect, useRef, useState } from 'react';

/* Components */
// import Newsletter from './../components/Newsletter';

/* Assets */
import UserIcon from '../assets/icons/user.svg';
import ClockIcon from '../assets/icons/clock.svg';
import ShareIcon from '../assets/icons/share.svg';

/* Misc */
import { SplitText } from '../services/SplitText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet';
import Request from './../services/Request';

const Stories = () => {

	const heading = useRef<HTMLDivElement>(null);
	const articles = useRef<HTMLDivElement>(null);

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

	useGSAP(() => {
		gsap.to('.articles a', { pointerEvents: 'none' });
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

	const [ endpointCalled, setEndpointCalled ] = useState(false);
	const [ articleItems, setArticleItems ] = useState([...Array(5)].fill({
		title: null,
		thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+PT5638ACY8D2iQaH6oAAAAASUVORK5CYII=',
		excerpt: null,
		author: 'Felix Hebgen',
		slug: null,
		readTime: 0,
		skeleton: true
	}) as any);

	const loadPosts = async () => {
		await Request.get('/posts?per_page=5')
			.then(response => response.json())
			.then(async (data) => {

				let articles: any = [];

				data.forEach((post: any) => {
					let article: any = {};

					article.title = post.title.rendered;
					article.thumbnail = post.jetpack_featured_media_url_thumbnail;
					article.excerpt = post.excerpt.rendered.replace('[&hellip;]', '&hellip;');
					article.readTime = post.read_time;
					article.slug = post.slug;
					article.author = 'Felix Hebgen';
					article.skeleton = false;

					articles.push(article);
				});

				setArticleItems(articles);
			});
	};

	useEffect(() => {
		if(!sessionStorage.getItem('articles')) {
			loadPosts().then(() => setEndpointCalled(true));
		} else {
			setArticleItems(JSON.parse(sessionStorage.getItem('articles') || '[]'));
			setEndpointCalled(true);
		}
	}, []);

	useEffect(() => {
		if(!endpointCalled) return;

		// Cache in the browser
		gsap.to('.articles a', { pointerEvents: 'all' });
		gsap.fromTo('.article .preview img', {
			opacity: 0
		}, {
			opacity: 1,
			duration: .1,
			stagger: .1
		});
	}, [endpointCalled]);

	useEffect(() => {
		if(articleItems.length === 0) return;
		// Cache in sessionStorage if not already cached
		if(sessionStorage.getItem('articles')) return;
		if(!articleItems[0].title) return;
		sessionStorage.setItem('articles', JSON.stringify(articleItems));
	}, [articleItems]);

	const truncate = (string: string, maxlength: number): string => {
		return string.length > maxlength ? string.slice(0, maxlength).split(' ').slice(0, -1).join(' ') + ' &hellip;' : string;
	}

	return (
		<main className="stories">
			<Helmet>
				<meta name="title" content="Stories — Felix Hebgen"/>
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
							<Link to={'/article/' + article.slug} key={index}>
								<article className={'article' + (article.skeleton ? ' skeleton' : '')}>
									<div className="preview"><LazyLoadImage src={article.thumbnail} alt="Beitragsbild" /></div>
									<div className="meta">
										{article.title ? <h2 dangerouslySetInnerHTML={{__html: article.title}}></h2> : <SkeletonTitle />}
										{article.excerpt ? <p dangerouslySetInnerHTML={{__html: article.excerpt}}></p> : <SkeletonBlock />}
										<ul className="details">
											<li><img src={UserIcon} alt="Autor" /> {article.author}</li>
											<li><img src={ClockIcon} alt="Lesezeit" /> {article.readTime} Minuten</li>
										</ul>
										<ul className="details right">
											<li><img src={ShareIcon} alt="Teilen" /> Teilen</li>
										</ul>
									</div>
								</article>
							</Link>
						)}
					</div>
					<div className="aside">
						{articleItems.slice(2, 5).map((article: any, index: number) =>
							<Link to={'/article/' + article.slug} key={index}>
								<article className={'article' + (article.skeleton ? ' skeleton' : '')}>
									<div className="preview"><LazyLoadImage src={article.thumbnail} alt="Beitragsbild" /></div>
									<div className="meta">
										{article.title ? <h2 dangerouslySetInnerHTML={{__html: article.title}}></h2> : <SkeletonTitle />}
										{article.excerpt ? <p dangerouslySetInnerHTML={{__html: truncate(article.excerpt, 127)}}></p> : <SkeletonBlock />}
										<ul className="details">
											<li><img src={UserIcon} alt="Autor" /> {article.author}</li>
											<li><img src={ClockIcon} alt="Lesezeit" /> {article.readTime} Minuten</li>
										</ul>
									</div>
								</article>
							</Link>
						)}
					</div>
				</div>
				{/*
					<div style={{margin: '1rem auto 5rem'}}>
						<Newsletter/>
					</div>
				*/}
		</main>
	);
}

export default Stories;

const SkeletonTitle = () => {
	return (
		<>
			<span className="skeleton-text"></span>
			<span className="skeleton-text quarter-width"></span>
		</>
	);
}

const SkeletonBlock = () => {
	return (
		<>
			<span className="skeleton-text small push-top"></span>
			<span className="skeleton-text small"></span>
			<span className="skeleton-text small"></span>
			<span className="skeleton-text small"></span>
			<span className="skeleton-text small half-width push-bottom"></span>
		</>
	);
}