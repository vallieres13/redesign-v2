import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/* Components */
import Spotlight from '../components/Spotlight';
import Connect from '../components/Connect';

/* Assets */
import IntroGraphic from '../assets/images/service/darmstadt.png';
import DotsVector from '../assets/images/service/dots.svg';
import HoefeGraphic from '../assets/images/service/hoefe.png';
import ProjectGraphic from '../assets/images/service/project.png';
import DarmstadtIcon from '../assets/images/service/da-icon.png';

/* Misc */
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { SplitText } from '../services/SplitText';

const Services = () => {

	const guarantee = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.guarantee p', {
			opacity: 0
		}, {
			opacity: 1,
			duration: .5
		});

		const heading = document.querySelector('.guarantee h2') as HTMLElement;
		const split = new SplitText({}).split(heading);
		gsap.fromTo(split.words, {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			duration: .2,
			stagger: .05,
		});

		gsap.fromTo('.guarantee .actions', {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			duration: .15,
			stagger: .03,
			delay: .2
		});
	}, { scope: guarantee });

	return (
		<main className="services">
			<Helmet>
				<meta name="title" content="Web-Designer in Darmstadt — Felix Hebgen"/>
				<title>Web-Designer in Darmstadt — Felix Hebgen</title>
			</Helmet>
			<div className="guarantee container" ref={guarantee}>
				<svg viewBox="0 0 1280 659" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M131 395C95.3673 397.341 0 489.5 0 489.5V351C0 351 76.5798 304.884 106 296.5C362 223.55 552.106 588.896 645 464C676.238 422 443.138 335 465.5 243.5C475.561 202.332 498.076 170.499 532 133.5C617.139 40.6438 752.137 6.66844 873.5 20C1085.42 43.2791 1110.46 182.678 1244.5 308C1256.12 318.864 1275 335 1275 335L1280.5 340.5V610.5C1214.11 608.279 1164.84 593.827 1114.5 548.5C1015.94 459.754 1033.48 287.743 926.5 212.5C874.971 176.256 667.517 115.434 624.5 198C580.536 282.384 820.5 321.5 825 426.5C829.581 533.402 750.966 589.2 624.5 601C416.175 620.438 326.408 382.163 131 395Z"
						fill="url(#paint0_linear_886_414)" fillOpacity="0.75"/>
					<path
						d="M494.5 213.666C507.345 310.142 646 401.666 634.5 446.666C603.298 568.762 198 183.5 -0.5 347.5V450.5C-0.5 450.5 50.6881 407.67 101.5 399.666C230.823 379.293 355.91 517.279 457.5 571.166C543.212 616.63 701.051 644.223 751.5 529.166C818 377.5 547.72 280.215 602 201.666C656.187 123.251 829.06 278.619 859.5 311.666C959.551 420.287 967.451 563.52 1120.5 629.166C1179.86 654.626 1279.5 658.5 1279.5 658.5V353.5C1279.5 353.5 1244.34 391.21 1211 399.666C1097.68 428.407 1003 76.9241 738.5 7.16579C602 -28.8342 476.115 75.5737 494.5 213.666Z"
						fill="url(#paint1_linear_886_414)"/>
					<defs>
						<linearGradient id="paint0_linear_886_414" x1="344.5" y1="200" x2="988.5" y2="190"
										gradientUnits="userSpaceOnUse">
							<animateTransform
								attributeName="gradientTransform"
								type="translate"
								from="-1400 0"
								to="300 0"
								begin="0s"
								dur="2.25s"
								fill="freeze"

								calcMode="spline"
								keyTimes="0;1"
								keySplines=".2 .2 .2 1"
							/>
							<stop stopColor="#F4FEFF"/>
							<stop offset="0.52" stopColor="#B8D0FF"/>
							<stop offset=".7" stopColor="#C097FD"/>
							<stop offset="2" stopColor="#FFFFFF"/>
						</linearGradient>

						<linearGradient id="paint1_linear_886_414" x1="459" y1="507.166" x2="1168.5" y2="220.166"
										gradientUnits="userSpaceOnUse">
							<animateTransform
								attributeName="gradientTransform"
								type="translate"
								from="-1400 0"
								to="100 0"
								begin="0s"
								dur="2s"
								fill="freeze"

								calcMode="spline"
								keyTimes="0;1"
								keySplines=".2 .2 .2 1"

							/>
							<stop stopColor="#E4F6FF"/>
							<stop offset="0.346774" stopColor="#A1B9FD"/>
							<stop offset=".9" stopColor="#D261F7"/>
							<stop offset="2" stopColor="#FFFFFF"/>
						</linearGradient>
					</defs>
				</svg>
				<p>
					<img className="da-icon" src={DarmstadtIcon} alt="Based in Wissenschaftsstadt Darmstadt"
						 title="Based in Wissenschaftsstadt Darmstadt"/>
					<span>Elevate Your Business with an Interactive Website</span>
				</p>
				<h2>We're Crafting<br/>Digital Experiences.</h2>
				<div className="actions">
					<Link to={'/work'} className="button primary big">Get started</Link>
					<Link to={'/hire'} className="button big">Get a Quote</Link>
				</div>
			</div>
			<div className="intro container">
				<div className="graphic">
					<img src={IntroGraphic} alt="Web-Design in Darmstadt"/>
					<div className="overlay"></div>
				</div>
				<div className="content">
					<h1>Web-Design &mdash;<br/>Made in Darmstadt</h1>
					<p>We combine interaction design, online marketing and web development, seamlessly into one
						comprehensive service for customers in and around Darmstadt-Dieburg, Odenwald, Offenbach and
						surroundings.</p>
					<div className="actions">
						<Link to={'/contact'} className="button primary">Get in Touch</Link>
						<Link to={'/work'} className="button">My Work</Link>
					</div>
					<img src={DotsVector} alt="Dots"/>
				</div>
			</div>
			<div className="feature rtl container">
				<div className="content">
					<h1>The Heart of Darmstadt</h1>
					<p>Located in Elisabethenstraße, this place used to be the home of Wilhelm Klein’s
						architectural enterprise. Together with his family, he helped to reconstruct and paint
						70% of Darmstadt’s destroyed buildings, transforming the city like never before.</p>
					<div className="actions">
						<Link to={'/contact'} className="button primary">Get in Touch</Link>
						<Link to={'/work'} className="button">References</Link>
					</div>
				</div>
				<div className="graphic">
					<img src={HoefeGraphic} alt="Located in a Historic Place"/>
					<div className="overlay"></div>
				</div>
			</div>
			<div className="feature container">
				<div className="graphic">
					<img src={ProjectGraphic} alt="Let’s Plan Your Project"/>
					<div className="overlay"></div>
				</div>
				<div className="content">
					<h1>Let’s Plan Your Project</h1>
					<p>Ready to make your online vision a reality? From concept to launch, I’ll
						guide you every step of the way and deliver a product that exceeds your expectations.</p>
					<div className="actions">
						<Link to={'/contact'} className="button primary">Get in Touch</Link>
						<Link to={'/work'} className="button">References</Link>
					</div>
				</div>
			</div>
			<Spotlight/>
			<Connect title="Let's Talk" url="/contact" />
		</main>
	);
}

export default Services;