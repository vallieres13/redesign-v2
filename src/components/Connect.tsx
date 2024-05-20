import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

/* Components */
import Heading from './Heading';

/* Assets */
import FelixTransparent from '../assets/images/promos/felix-transparent.png';
import LinkedInLogo from '../assets/icons/linkedin.svg';
import XingLogo from '../assets/icons/xing.svg';
import GithubLogo from '../assets/icons/github.svg';

/* Misc */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Props {
	title?: string;
	url?: string;
}

const defaultProps = {
	title: 'Connect',
	url: '/profile'
}

const Connect = ({ title = defaultProps.title, url = defaultProps.url }: Props) => {

	const connect = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.messages p', {
			y: 40,
			opacity: 0
		},{
			scrollTrigger: {
				trigger: '.wrapper',
				start: 'top bottom',
				end: '+=50',
				scrub: 1
			},
			y: 0,
			opacity: 1,
			duration: 1,
			delay: .5,
			stagger: .25
		});
	}, { scope: connect });

	return (
		<div className="connect container" ref={connect}>
			<Heading>{title}</Heading>
			<div className="wrapper">
				<div className="messages left">
					<div className="imessage">
						<p className="from-them green">KI Forschung</p>
						<p className="from-them blue">Video Produktion</p>
						<p className="from-them">Online Marketing</p>
					</div>
				</div>
				<div className="profile">
					<div className="picture">
						<LazyLoadImage src={FelixTransparent} alt="Felix Hebgen" />
					</div>
					<h2>Felix Hebgen</h2>
					<div className="underscore"></div>
					<div className="socials">
						<ul>
							<li><Link to={'https://www.linkedin.com/in/felixhebgen/'}><LazyLoadImage src={LinkedInLogo} alt="LinkedIn" /></Link></li>
							<li><Link to={'https://www.xing.com/profile/Felix_Hebgen'}><LazyLoadImage src={XingLogo} alt="Xing" /></Link></li>
							<li><Link to={'https://github.com/vallieres13'}><LazyLoadImage src={GithubLogo} alt="GitHub" /></Link></li>
						</ul>
					</div>
					<Link to={url} className="button primary">Schreibe mir</Link><br />
				</div>
				<div className="messages right">
					<div className="imessage">
						<p className="from-me">Web Entwicklung</p>
						<p className="from-me green">System-Administration</p>
						<p className="from-me blue">UX & UI Design</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Connect;