import React, { useRef } from 'react';

/* Static */
import DroneArticle from './../static/images/articles/drone.png';

import UserIcon from './../static/icons/user.svg';
import ClockIcon from './../static/icons/clock.svg';
import ShareIcon from './../static/icons/share.svg';

/* Misc */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const Article = () => {

	const article = {
		title: 'Und wieder wird dein Blick zu Stein vor mir',
		image: DroneArticle,
		author: 'Felix Hebgen',
		readTime: 5
	};

	const content = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.article .image', {
			y: 15,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .3
		});

		gsap.fromTo('.article .container-small', {
			y: 15,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .3,
			delay: .15
		});
	}, { scope: content });

	const dropdownShare = useRef<HTMLUListElement>(null);
	const handleShare = () => {
		if(dropdownShare.current) dropdownShare.current.classList.toggle('display');
	}

	return (
		<article className="article" ref={content}>
			<div className="image container-wide">
				<img src={article.image} alt="Article Image" />
			</div>
			<div className="container-small">
				<h1>{article.title}</h1>
				<ul className="details">
					<li><Link to={'/about'}><img src={UserIcon} alt="User" /> {article.author}</Link></li>
					<li><img src={ClockIcon} alt="Clock" /> {article.readTime} Minutes</li>
				</ul>
				<ul className="details right">
					<li>
						<a onClick={handleShare}><img src={ShareIcon} alt="Share" /> Share</a>
						<ul className="dropdown" ref={dropdownShare}>
							<li><a href="#!">LinkedIn</a></li>
							<li><a href="#!">WhatsApp</a></li>
							<li><a href="#!">Telegram</a></li>
							<li><a href="#!">X (Twitter)</a></li>
							<li><a href="#!">Reddit</a></li>
						</ul>
					</li>
				</ul>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
			</div>
		</article>
	);
}

export default Article;