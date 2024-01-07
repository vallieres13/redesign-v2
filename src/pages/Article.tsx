import React, { useRef } from 'react';

/* Static */
import DroneArticle from './../static/images/articles/drone.png';

import UserIcon from './../static/icons/user.svg';
import ClockIcon from './../static/icons/clock.svg';
import ShareIcon from './../static/icons/share.svg';

/* Social Share */
import {
	EmailIcon,
	EmailShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	RedditShareButton,
	RedditIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
    XIcon
} from 'react-share';


/* Misc */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Article = () => {

	const application = 'Felix Hebgen';

	const article = {
		title: 'Und wieder wird dein Blick zu Stein vor mir',
		image: DroneArticle,
		author: 'Felix Hebgen',
		readTime: 5,
		excerpt: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
		content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'
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
			<Helmet>
				<meta name="title" content={article.title + '— Felix Hebgen'} />
				<title>{article.title} - Felix Hebgen</title>
			</Helmet>
			<div className="image container-wide">
				<img src={article.image} alt="Article Image" />
			</div>
			<div className="container-small">
				<h1>{article.title}</h1>
				<ul className="details">
					<li><Link to={'/about'}><img src={UserIcon} alt="User" /> {article.author}</Link></li>
					<li><img src={ClockIcon} alt="Clock" /> {article.readTime} Minutes read time</li>
				</ul>
				<ul className="details right">
					<li>
						<a onClick={handleShare}><img src={ShareIcon} alt="Share" /> Share</a>
						<ul className="dropdown" ref={dropdownShare}>
							<li><LinkedinShareButton url={window.location.href} title={article.title} summary={article.excerpt} source={application}><LinkedinIcon round={true} size={20} /> LinkedIn</LinkedinShareButton></li>
							<li><WhatsappShareButton url={window.location.href} title={article.title}><WhatsappIcon round={true} size={20} /> WhatsApp</WhatsappShareButton></li>
							<li><RedditShareButton url={window.location.href} title={article.title}><RedditIcon round={true} size={20} /> Reddit</RedditShareButton></li>
							<li><TwitterShareButton url={window.location.href} title={article.title}><XIcon round={true} size={20} /> X (Twitter)</TwitterShareButton></li>
							<li><EmailShareButton url={window.location.href} title={'Check out "' + article.title + '"'}><EmailIcon round={true} size={20} /> as E-Mail</EmailShareButton></li>
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