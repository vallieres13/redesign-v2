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
			title: 'Start A Call',
			preferred: false
		},
		{
			icon: Mail,
			title: 'Send An E-Mail',
			preferred: true
		},
		{
			icon: LinkedIn,
			title: 'Message me on LinkedIn',
			preferred: true
		},
		{
			icon: Xing,
			title: <>Message me on<br />XING</>,
			preferred: false
		},
		{
			icon: Schedule,
			title: 'Schedule A Call',
			preferred: false
		},
		{
			icon: Postal,
			title: 'Postal Address',
			preferred: false
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
				<meta name="title" content="Let's Talk — Felix Hebgen" />
				<title>Let's Talk — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading" ref={heading}>
				<div className="wrapper container">
					<h1>Let's Talk</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="promo container" ref={promo}>
				<div className="description">
					<p>
						Ready to talk? Let’s go for a coffee together.<br />
						Please select one of the currently available contact methods.
					</p>
					<div className="options">
						{contactItems.map((option: any, index: number) =>
							<div className="option" key={index}>
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
				<p className="title">Contact Disclaimer</p>
				<p>
					To ensure efficient and timely communication, please be advised of the following:<br />
					I will get back to you from Monday through Tuesday, Thursday through Saturday. Regrettably, I cannot guarantee to answer phone calls on Wednesdays and Sundays.
				</p>
				<p>
					For a more prompt and organised response, I encourage you to contact me via email. This method allows me to address your inquiries with the attention they deserve and maintain a comprehensive record of our communication.<br />
					Please select “Send an E-Mail” for an address to direct your messages. I aim to respond to all emails as soon as possible during my regular business hours.
				</p>
			</div>
		</main>
	);
}

export default Contact;