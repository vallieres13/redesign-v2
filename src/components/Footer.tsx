import React from 'react';
import { Link } from 'react-router-dom';

/* Assets */
import Partners from '../assets/icons/partners.svg';
import PartnersMobile from '../assets/icons/partners-mobile.svg';
import Oracle from '../assets/icons/oracle.svg';
import GermanyEmoji from '../assets/emojis/germany.png?format=avif';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {

	const thisYear = new Date().getFullYear();

	const devNotes: any[] = [
		<>Zubereitet mit <span>🍳</span> denn Coding ist mein Geheimrezept.</>,
		<>Gebaut mit <span>🚀</span>, weil ich gerne großartige Dinge starte.</>,
		<>Mit Hilfe von <span>🤖</span>, denn KI ist auch kreativ.</>,
		<>Gebraut mit <span>☕️</span> für die perfekte Tasse.</>,
		<>Gebaut mit <span>⚛️</span> React.ts & vite.</>
	];

	return (
		<footer className="container">
			<div className="partners">
				<LazyLoadImage src={Partners} className="desktop" alt="Partner" />
				<LazyLoadImage src={PartnersMobile} className="mobile" alt="Partner" />
			</div>
			<div className="grid">
				<div className="column">
					<ul>
						<li><Link to={'/stories'}>Stories (Blog)</Link></li>
						<li><Link to={'/about'}>Über Mich</Link></li>
						<li><Link to={'/labs'}>Labs</Link></li>
						<li><Link to={'/profile'}>Portfolio</Link></li>
						<li><Link to={'/contact'}>Kontakt</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'/partners'}>Partner</Link></li>
						<li><Link to={'/partners'}>Kunden</Link></li>
						<li><Link to={'/contact'}>Geschäftl. Anfrage</Link></li>
						<li><Link to={'/contact'}>Connect</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'/work'}>Impressionen</Link></li>
						<li><Link to={'/work'}>Meine Arbeit</Link></li>
						<li><Link to={'/work'}>Referenzen</Link></li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li><Link to={'/sitemap.xml'}>Sitemap</Link></li>
						<li><Link to={'/contact'}>Kontakt</Link></li>
						<li><Link to={'/privacy'}>Datenschutz</Link></li>
						<li><Link to={'/imprint'}>Impressum</Link></li>
					</ul>
				</div>
				<div className="column empty"></div>
				<div className="column">
					Felix Hebgen ist ein <span className="emoji"><img src={GermanyEmoji} alt="Germany"/></span> deutscher Full-Stack Entwickler &
					Designer mit Sitz in Darmstadt, Hessen.
				</div>
			</div>
			<div className="copyright">
				<div className="disclaimer">
					Copyright &copy; 2012 — {thisYear} Felix Hebgen. Alle Rechte vorbehalten.<br />
					{devNotes[Math.floor(Math.random() * devNotes.length)]} — Made in Darmstadt, Germany. 🌳🌲
				</div>
				<div className="host">
					<Link to={'https://www.oracle.com/cloud/'} target="_blank">
						_ deployed on
						<img src={Oracle} alt="Oracle Cloud" />
					</Link>
				</div>
			</div>
		</footer>
	);

};

export default Footer;