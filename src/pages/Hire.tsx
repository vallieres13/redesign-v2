import React, {useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SplitText } from "../services/SplitText";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/* Components */
import Connect from './../components/Connect';
import TechStack from './../components/TechStack';

/* Assets */
import Scroll from '../assets/icons/scroll.gif';

import Curriculum from '../assets/images/hire/curriculum.png?format=avif';
import Qualification from '../assets/images/hire/qualification.png?format=avif';
import Motivation from '../assets/images/hire/motivation.png?format=avif';

import PDFIcon from '../assets/icons/pdf.svg';
import InfoIcon from '../assets/icons/info.svg';
import ChevronRightIcon from '../assets/icons/chevron.svg';

import CoffeeLike from '../assets/images/hire/coffee.svg';
import TeamLike from '../assets/images/hire/team.svg';
import HardwareLike from '../assets/images/hire/hardware.svg';
import JavaLike from '../assets/images/hire/java.svg';
import SalaryLike from '../assets/images/hire/salary.svg';
import HybridLike from '../assets/images/hire/hybrid.svg';

import PhpHi from '../assets/icons/php-hi.svg';
import JsHi from '../assets/icons/js-hi.svg';
import JavaHi from '../assets/icons/java-hi.svg';
import CcHi from '../assets/icons/cc-hi.svg';
import NetHi from '../assets/icons/net-hi.svg';

/* Misc */
import VanillaTilt from 'vanilla-tilt';
import Timeline from "../components/Timeline";
import Heading from "../components/Heading";
import { Helmet } from 'react-helmet';

const Index = () => {

	const promo = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const headingPromo = document.querySelector('.promo p') as HTMLElement;
		const split = new SplitText({}).split(headingPromo);
		gsap.fromTo(split.chars, {
			opacity: 0
		}, {
			opacity: 1,
			stagger: .02
		});

		gsap.fromTo('.promo .actions', {
			y: 15,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .3
		});

		gsap.fromTo('.promo .scroll', {
			opacity: 0
		}, {
			opacity: 1,
			duration: .3,
			delay: .25
		});

		gsap.fromTo('.promo .documents img', {
			y: 50,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .25,
			stagger: .2,
			delay: .25,
			ease: 'back.out',
		});
	}, { scope: promo });

	const handleOpenCollapsible = (ev: React.MouseEvent, file: string) => {
		const target = ev.currentTarget as HTMLDivElement;
		target.classList.toggle('open');

		if(target.classList.contains('open')) {
			const link = document.createElement('a');
			link.href = file;
			link.setAttribute('download', file);
			link.target = '_blank';
			link.click();
		}
	}

	useEffect(() => {
		const stackCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.likes .like');
		stackCards.forEach((card: HTMLDivElement) => {
			VanillaTilt.init(card, {
				reverse: true,
				max: 9,
				scale: .98,
				perspective: 1000,
				speed: 2000,
				glare: true
			});
		});
	}, []);

	const downloadItems = [
		{
			name: 'Curriculum Vitae (Résumé)',
			icon: PDFIcon,
			size: '65 KB',
			file: 'https://api.felixhebgen.de/wp-content/uploads/Lebenslauf.pdf',
			description: <>
				<p>Get a closer look at my skills and experience.</p>
				<p>Dive into my experience, projects, and passion for crafting outstanding digital solutions.</p>
			</>
		},
		{
			name: 'Experience & Qualifications',
			icon: PDFIcon,
			size: '65 KB',
			file: 'https://api.felixhebgen.de/wp-content/uploads/Erfahrungen-Qualifikationen-Felix-Hebgen.pdf',
			description: <>
				<p>A collection of projects, experiences, and qualifications in various IT fields
					throughout several companies.</p>
				<p>This document also includes a listing of skills, as well as the indication of
					technical understanding through individual, self-determined measurements.</p>
			</>
		},
		/*
		{
			name: 'C1 English Cambridge University',
			icon: PDFIcon,
			size: '65 KB',
			file: 'https://api.felixhebgen.de/downloads/certificate.pdf',
			description: <>
				<p>Discover my proficiency in English through my Cambridge Certificate of English C1.</p>
				<p>This document also includes a listing of skills, as well as the indication of
					technical understanding through individual, self-determined measurements.</p>
			</>
		}
		*/
	];

	const highlightItems = [
		{
			name: 'PHP',
			icon: PhpHi,
			progress: 94,
			related: [
				'OOP 8.3',
				'Laravel',
				'Symfony',
				'HHVM & Hack',
				'WordPress',
				'Joomla!',
				'WoltLab Suite'
			],
			projects: 99
		},
		{
			name: 'JavaScript / TypeScript',
			icon: JsHi,
			progress: 84,
			related: [
				'TypeScript',
				'ECMA 23',
				'React',
				'Redux',
				'Next',
				'node',
				'webpack',
				'Lodash'
			],
			projects: 99
		},
		{
			name: 'Java / Kotlin',
			icon: JavaHi,
			progress: 34,
			related: [
				'Spring Boot',
				'Gradle',
				'Ktor',
				'Hibernate',
				'ODBC'
			],
			projects: 8
		},
		{
			name: 'Creative Cloud & other creative platforms',
			icon: CcHi,
			progress: 73,
			related: [
				'Photoshop',
				'Illustrator',
				'Experience Design',
				'Figma',
				'MAGIX Vegas Pro'
			],
			projects: 99
		},
		{
			name: '.NET Core',
			icon: NetHi,
			progress: 13,
			related: [
				'C#',
				'Visual Basic'
			],
			projects: 3
		}
	].sort((a, b) => b.progress - a.progress);


	const likeItems = [
		{
			name: 'Good Coffee!',
			icon: CoffeeLike
		},
		{
			name: 'Experienced Tech-Team',
			icon: TeamLike
		},
		{
			name: 'Company Hardware',
			icon: HardwareLike
		},
		{
			name: 'Kotlin & TypeScript',
			icon: JavaLike
		},
		{
			name: 'Fair Salary',
			icon: SalaryLike
		},
		{
			name: 'Hybrid',
			icon: HybridLike
		}
	];

	return (
		<main className="hire">
			<Helmet>
				<meta name="title" content="Hire Me — Felix Hebgen" />
				<title>Hire Me — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading centered">
				<div className="wrapper container">
					<h1>Hire Me</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="promo container" ref={promo}>
				<p>
					Get to know me before we talk.<br/>
					Or schedule a call.
				</p>
				<div className="actions">
					<Link to={'/contact'} className="button primary">Schedule a call</Link>
				</div>
				<div className="scroll">
					<p>Scroll</p>
					<img src={Scroll} alt="Scroll"/>
				</div>
				<div className="documents">
					<img src={Qualification} alt="Qualifications" className="qualification"/>
					<img src={Curriculum} alt="Curriculum Vitae" className="curriculum"/>
					<img src={Motivation} alt="Motivation Letter" className="motivation"/>
				</div>
				<div className="downloads">
					<h2>Downloads</h2>
					<div className="wrapper">
						{downloadItems.map((download: any, index: number) =>
							<div className="download" key={index} onClick={(e: React.MouseEvent) => handleOpenCollapsible(e, download.file)}>
								<div className="icon">
									<img src={download.icon} alt="PDF"/>
								</div>
								<div className="details">
									<h3>{download.name}</h3>
									<p>{download.size} — PDF-File</p>
								</div>
								<div className="action">
									<img src={ChevronRightIcon} alt="Open"/>
								</div>
								<div className="collapsible">
									<div className="icon">
										<img src={InfoIcon} alt="Info"/>
									</div>
									<div className="description">
										{download.description}
										<p className="disclaimer">Your download will start shortly &hellip;</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="highlights container">
				<Heading>Highlights</Heading>
				<div className="wrapper">
					<h2>Techstack</h2>
					{highlightItems.map((highlight: any, index: number) =>
						<div className="highlight" key={index}>
							<div className="icon">
								<img src={highlight.icon} alt={highlight.name}/>
							</div>
							<div className="progress">
								<div className="bar">
									<div style={{ width: highlight.progress + '%' }}></div>
								</div>
							</div>
							<div className="related">
								<ul>
									{highlight.related.map((related: string, indexInner: number) =>
										<li key={indexInner}>{related}</li>
									)}
								</ul>
								<p>&hellip; more than {highlight.projects}+ projects total</p>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="likes container">
				<Heading>Likes</Heading>
				<div className="wrapper">
					{likeItems.map((like: any, index: number) =>
						<div className="like" key={index}>
							<img src={like.icon} alt={like.name}/>
							<h2>{like.name}</h2>
						</div>
					)}
				</div>
			</div>
			<TechStack />
			<Timeline />
			<Connect title="Let's Talk" url="/contact" />
		</main>
	);
}

export default Index;