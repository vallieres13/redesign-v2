import React, { useEffect, useRef } from 'react';

/* Assets */
import Picture from '../assets/images/contact/picture.png?format=avif';

import NumberPad from '../assets/icons/numberpad.svg';
import Mail from '../assets/icons/mail.svg';
import LinkedIn from '../assets/icons/linkedin-contact.svg';
import Xing from '../assets/icons/xing-contact.svg';
import Schedule from '../assets/icons/schedule.svg';
import Postal from '../assets/icons/postal.svg';

/* Misc */
import { SplitText } from '../services/SplitText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VanillaTilt from 'vanilla-tilt';
import { Helmet } from 'react-helmet';

const Contact = () => {

	const contactItems = [
		{
			icon: NumberPad,
			title: 'Anruf starten',
			preferred: false,
			disabled: false,
			action: () => { window.location.href = 'tel:+4915159132500' }
		},
		{
			icon: Mail,
			title: 'E-Mail versenden',
			preferred: true,
			disabled: false,
			action: () => window.location.href = 'mailto:mail@felixhebgen.de?subject=Hi%20Felix,%20let\'s%20work%20together!'
		},
		{
			icon: LinkedIn,
			title: 'Nachricht auf LinkedIn',
			preferred: true,
			disabled: false,
			action: () => window.location.href = 'https://www.linkedin.com/in/felixhebgen/'
		},
		{
			icon: Xing,
			title: <>Nachricht auf<br />XING</>,
			preferred: false,
			disabled: false,
			action: () => window.location.href = 'https://www.xing.com/profile/Felix_Hebgen'
		},
		{
			icon: Schedule,
			title: 'Anruf vereinbaren',
			preferred: false,
			disabled: true,
			action: () => {}
		},
		{
			icon: Postal,
			title: 'Postanschrift',
			preferred: false,
			disabled: false,
			action: () => alert('Postanschrift:\n\nFelix Hebgen\nElisabethenstraße 68A\n64283 Darmstadt\nDeutschland')
		}
	];

	useEffect(() => {
		const optionCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.options .option');
		optionCards.forEach((card: HTMLDivElement) => {
			VanillaTilt.init(card, {
				reverse: true,
				max: 7,
				scale: .98,
				perspective: 1000,
				speed: 2000
			});
		});
	}, []);

	const promo = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.promo .description p', {
			y: 20,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .25,
			stagger: .1,
			delay: .25,
			ease: 'back.out',
		});

		gsap.fromTo('.promo .options .option', {
			y: 20,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .25,
			stagger: .1,
			delay: .25,
			ease: 'back.out',
		});

		gsap.fromTo('.promo .picture img', {
			x: 20,
			opacity: 0
		}, {
			x: 0,
			opacity: 1,
			duration: .25,
			delay: .25,
			ease: 'back.out',
		});
	}, { scope: promo });

	const heading = useRef<HTMLDivElement>(null);
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

	const disclaimer = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.disclaimer *', {
			opacity: 0
		}, {
			opacity: 1,
			duration: .25,
			delay: .75
		});
	}, { scope: disclaimer });

	return (
		<main className="contact">
			<Helmet>
				<meta name="title" content="Kontakt — Felix Hebgen" />
				<title>Kontakt — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading" ref={heading}>
				<div className="wrapper container">
					<h1>Kontakt</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="promo container" ref={promo}>
				<div className="description">
					<p>
						Bereit für ein Gespräch? Treffen wir uns auf einen Kaffee.<br />
						Wählen Sie eine der derzeit verfügbaren Kontaktmethoden aus.
					</p>
					<div className="options">
						{contactItems.map((option: any, index: number) =>
							<div className={'option' + (option.disabled ? ' disabled' : '')} key={index} onClick={option.action}>
								<img src={option.icon} alt={option.title} />
								<span>{option.title}</span>
								{option.preferred &&
									<div className="preferred">
										Preferred
									</div>
								}
							</div>
						)}
					</div>
				</div>
				<div className="picture">
					<img src={Picture} alt="Felix Hebgen" />
				</div>
			</div>
			<div className="disclaimer container" ref={disclaimer}>
				<p className="title">Hinweis</p>
				<p>
					Um eine effiziente und zeitnahe Antwort zu erhalten, möchten ich Sie auf Folgendes hinweisen:<br />
					Ich stehe Ihnen von Montag bis Dienstag sowie Donnerstag bis Samstag zur Verfügung. Bedauerlicherweise kann ich am Mittwoch und Sonntag keine Anrufe entgegennehmen.
				</p>
			</div>
		</main>
	);
}

export default Contact;