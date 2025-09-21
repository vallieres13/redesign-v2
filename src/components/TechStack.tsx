import React, { useEffect, useRef } from 'react';

/* Components */
import Heading from './Heading';

/* Assets */
import Php from '../assets/icons/php.svg';
import PhpStack from '../assets/icons/php-stack.svg';

import Git from '../assets/icons/git.svg';
import GitStack from '../assets/icons/git-stack.svg';

import Html from '../assets/icons/html.svg';
import HtmlStack from '../assets/icons/html-stack.svg';

import Cc from '../assets/icons/cc.svg';
import CcStack from '../assets/icons/cc-stack.svg';

import Java from '../assets/icons/java.svg';
import JavaStack from '../assets/icons/java-stack.svg';

import Database from '../assets/icons/database.svg';
import DatabaseStack from '../assets/icons/database-stack.svg';

import Js from '../assets/icons/js.svg';
import JsStack from '../assets/icons/js-stack.svg';

import Cloud from '../assets/icons/cloud.svg';
import CloudStack from '../assets/icons/cloud-stack.svg';

/* Misc */
import VanillaTilt from 'vanilla-tilt';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const TechStack = () => {

	const navigate = useNavigate();
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const stackCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.techstack .card');
		stackCards.forEach((card: HTMLDivElement) => {
			VanillaTilt.init(card, {
				reverse: true,
				max: 4,
				scale: .98,
				perspective: 1000,
				speed: 2000
			});

			const redirectHire = () => navigate('/profile');
			card.addEventListener('click', redirectHire);
			return () => card.removeEventListener('click', redirectHire);
		});
	}, []);

	const techstack = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.grid.wrapper .card', {
			marginTop: 50
		},{
			scrollTrigger: {
				trigger: '.grid.wrapper',
				start: 'top+=150 bottom',
				end: '+=600',
				scrub: 1,
			},
			marginTop: 8,
			stagger: .1
		});
	}, { scope: techstack });

	return (
		<div className="techstack container" ref={techstack}>
			<Heading>Stack</Heading>
			<div className="grid wrapper">
				<div className="column large-column">
					<div className="grid">
						<div className="column full-column card">
							<img src={Php} alt="php" />
							<img src={PhpStack} alt="php" className="hidden" />
						</div>
					</div>
					<div className="grid">
						<div className="column big-column card">
							<img src={Git} alt="Git" />
							<img src={GitStack} alt="Git" className="hidden" />
						</div>
						<div className="column enormous-column card">
							<img src={Html} alt="HTML" />
							<img src={HtmlStack} alt="HTML" className="hidden" />
						</div>
					</div>
					<div className="grid justify-end">
						<div className="column enormous-column card">
							<img src={Cc} alt="Creative Cloud" />
							<img src={CcStack} alt="Creative Cloud" className="hidden" />
						</div>
					</div>
				</div>
				<div className="column huge-column">
					<div className="grid">
						<div className="column large-and-a-half-column card">
							<img src={Java} alt="Java" />
							<img src={JavaStack} alt="Java" className="hidden" />
						</div>
						<div className="column large-and-a-half-column card">
							<img src={Database} alt="Datenbanken" />
							<img src={DatabaseStack} alt="Datenbanken" className="hidden" />
						</div>
					</div>
					<div className="grid">
						<div className="column full-column card">
							<img src={Js} alt="JavaScript"/>
							<img src={JsStack} alt="JavaScript" className="hidden"/>
						</div>
					</div>
					<div className="grid">
						<div className="column enormous-column card">
							<img src={Cloud} alt="Cloud"/>
							<img src={CloudStack} alt="Cloud" className="hidden"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TechStack;