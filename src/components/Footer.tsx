import React from 'react';
import { Link } from 'react-router-dom';

/* Static */
import Partners from './../static/icons/partners.svg';
import Oracle from './../static/icons/oracle.svg';

const Footer = () => {

	const thisYear = new Date().getFullYear();

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
						<li><Link to={'/stories'}>Stories (Blog)</Link></li>
						<li><Link to={'/about'}>What I do</Link></li>
						<li><Link to={'/labs'}>Labs</Link></li>
						<li><Link to={'/hire'}>Hire Me</Link></li>
						<li><Link to={'/contact'}>Get In Touch</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'/partners'}>Partners</Link></li>
						<li><Link to={'/partners'}>Customers</Link></li>
						<li><Link to={'/contact'}>Business Inquiry</Link></li>
						<li><Link to={'/contact'}>Connect</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'/ai'}>AI at work</Link></li>
						<li><Link to={'/about'}>What I do</Link></li>
						<li><Link to={'/impressions'}>References</Link></li>
						<li><Link to={'/impressions'}>Impressions</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'/sitemap.xml'}>Sitemap</Link></li>
						<li><Link to={'/contact'}>Contact</Link></li>
						<li><Link to={'/privacy'}>Privacy Policy</Link></li>
						<li><Link to={'/imprint'}>Imprint</Link></li>
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
					<Link to={'https://www.oracle.com/cloud/'} target="_blank">
						Hosted on
						<img src={Oracle} alt="Oracle Cloud" />
					</Link>
				</div>
			</div>
		</footer>
	);

};

export default Footer;