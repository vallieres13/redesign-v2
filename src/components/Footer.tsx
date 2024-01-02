import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import gsap from 'gsap';

/* Static */
import Partners from './../static/icons/partners.svg';
import Oracle from './../static/icons/oracle.svg';

const Footer = () => {

	const thisYear = new Date().getFullYear();
	const location = useLocation();
	const [ pastLocation, setPastLocation ] = useState('');

	const navigate = useNavigate();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		const href = (e.target as HTMLAnchorElement).getAttribute('href') as string;

		if(href.startsWith('https://')) {
			window.open(href, '_blank')!.focus();
		} else {
			navigate(href);
		}
	};

	useEffect(() => {
		if(location.pathname === pastLocation) return;
		setPastLocation(location.pathname);

		gsap.fromTo('footer', {
			autoAlpha: 0
		}, {
			autoAlpha: 1,
			delay: .1,
			duration: .5
		})
	}, [location, pastLocation]);

	const devNotes: any[] = [
		<>Cooked up with <span>🍳</span> as coding is my secret recipe.</>,
		<>Built with <span>🚀</span> because I love to launch great stuff.</>,
		<>Assembled with <span>🤖</span> as robots get creative too.</>,
		<>Brewed with <span>☕️</span> for that perfect blend.</>,
		<>Forged with <span>⚒️</span> for a site that's tough as nails.</>,
		<>Assembled with <span>🧲</span> to attract the best UX.</>
	];

	return (
		<footer className="container">
			<div className="partners">
				<img src={Partners} alt="Partners" />
			</div>
			<div className="grid">
				<div className="column">
					<ul>
						<li><Link to={'#!'}>Stories (Blog)</Link></li>
						<li><Link to={'#!'}>What I do</Link></li>
						<li><Link to={'#!'}>Labs</Link></li>
						<li><Link to={'#!'}>Hire Me</Link></li>
						<li><Link to={'#!'}>Get In Touch</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'#!'}>Stories (Blog)</Link></li>
						<li><Link to={'#!'}>What I do</Link></li>
						<li><Link to={'#!'}>Labs</Link></li>
						<li><Link to={'#!'}>Hire Me</Link></li>
						<li><Link to={'#!'}>Get In Touch</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'#!'}>Stories (Blog)</Link></li>
						<li><Link to={'#!'}>What I do</Link></li>
						<li><Link to={'#!'}>Labs</Link></li>
						<li><Link to={'#!'}>Hire Me</Link></li>
						<li><Link to={'#!'}>Get In Touch</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'#!'}>Stories (Blog)</Link></li>
						<li><Link to={'#!'}>What I do</Link></li>
						<li><Link to={'#!'}>Labs</Link></li>
						<li><Link to={'#!'}>Hire Me</Link></li>
						<li><Link to={'#!'}>Get In Touch</Link></li>
					</ul>
				</div>
				<div className="column empty"></div>
				<div className="column">
					Felix Hebgen is a striving full-stack web developer in today's ever so fast growing web-app economy.
				</div>
			</div>
			<div className="copyright">
				<div className="disclaimer">
					Copyright &copy; 2012 — {thisYear} Felix Hebgen. All Rights Reserved.<br />
					{devNotes[Math.floor(Math.random() * devNotes.length)]} — Made in Darmstadt, Germany. 🌳🌲
				</div>
				<div className="host">
					<Link to={'#!'}>
						Hosted on
						<img src={Oracle} alt="Oracle Cloud" />
					</Link>
				</div>
			</div>
		</footer>
	);

};

export default Footer;