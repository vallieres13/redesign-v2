import React, {useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* Components */
import Navigation from "./Navigation";

/* Assets */
import Logo from '../assets/logo.svg';
import Hamburger from '../assets/icons/hamburger.svg';

/* Misc */
import gsap from 'gsap';

const Header = () => {

	const location = useLocation();
	const [ isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const mobile = useRef<HTMLDivElement>(null);

	/* Mobile Nav Handler */

	const handleHamburgerClick = () => toggleMobileNav();

	const toggleMobileNav = () => {
		if(isMobileNavOpen) {
			gsap.to('main, #app > article, footer', {
				x: 0,
				opacity: 1,
				duration: .4,
				ease: 'expo.out',
				delay: .1,
				filter: 'none',
				pointerEvents: 'all'
			});
			gsap.to('svg', {
				top: '-13rem',
				duration: 0,
				delay: 0
			});
			gsap.to(mobile.current!.querySelectorAll(':scope nav > .mobile ul li a'), {
				x: 200,
				opacity: 0,
				duration: .2,
				stagger: .02,
				pointerEvents: 'none',
				ease: 'power4.in'
			});
			gsap.to(mobile.current!.querySelector(':scope nav > .mobile ul li sup'), {
				x: 15,
				opacity: 0,
				duration: .15,
				pointerEvents: 'none',
				ease: 'power4.in'
			});
			setIsMobileNavOpen(false);
		} else {
			gsap.to('main, #app > article, footer', {
				x: -100,
				opacity: .4,
				duration: .4,
				ease: 'expo.out',
				filter: 'blur(8px)',
				pointerEvents: 'none'
			});
			gsap.to('svg', {
				top: '-13rem',
				duration: 0,
				delay: 0
			});
			gsap.to(mobile.current!.querySelectorAll(':scope nav > .mobile ul li a'), {
				x: 0,
				opacity: 1,
				duration: .25,
				stagger: .025,
				pointerEvents: 'all',
				ease: 'power4.out'
			});
			gsap.to(mobile.current!.querySelector(':scope nav > .mobile ul li sup'), {
				x: 0,
				opacity: 1,
				delay: .16,
				duration: .025,
				pointerEvents: 'all',
				ease: 'power4.out'
			});
			setIsMobileNavOpen(true);
		}
	}


	/* Sticky Nav Handler */

	const [ sticky, setSticky ] = useState(false);

	useEffect(() => {
		let lastScrollTop = 0;
		const scrollListener = () => {
			let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
			if(currentScrollTop > lastScrollTop || currentScrollTop < 100) {
				setSticky(false);
			} else {
				setSticky(true);
			}
			lastScrollTop = currentScrollTop;
		}
		window.addEventListener('scroll', scrollListener);
		return () => window.removeEventListener('scroll', scrollListener);
	}, []);

	useEffect(() => {
		if(sticky) {
			const stickyHeaders = document.querySelectorAll('header.sticky') as NodeListOf<HTMLElement>;

			stickyHeaders.forEach((stickyHeader: any) => stickyHeader.classList.add('display'));

			gsap.fromTo(stickyHeaders, {
				y: -100,
				autoAlpha: 0
			}, {
				y: 0,
				autoAlpha: 1,
				duration: .3,
				ease: 'back.out'
			})
		} else {
			const stickyHeaders = document.querySelectorAll('header.sticky') as NodeListOf<HTMLElement>;

			gsap.fromTo(stickyHeaders, {
				y: 0,
				autoAlpha: 1
			}, {
				y: -100,
				autoAlpha: 0,
				duration: .15,
				ease: 'power4.in',
				onComplete: () => stickyHeaders.forEach((stickyHeader: any) => stickyHeader.classList.remove('display'))
			});
		}
	}, [sticky]);


	/* Hook */

	useEffect(() => {
		if(isMobileNavOpen) toggleMobileNav();

		if(!sticky) return;
		const stickyHeader = document.querySelector('header.sticky') as HTMLElement;
		gsap.fromTo(stickyHeader, {
			y: 0,
			opacity: 1
		}, {
			y: -100,
			opacity: 0,
			duration: 0,
			onComplete: () => stickyHeader.classList.remove('display')
		});
	}, [location]);

	return (
		<>
			<header className="container desktop">
				<div className="logo">
					<NavLink to="/">
						<img src={Logo} alt="Logo" />
					</NavLink>
				</div>
				<Navigation />
			</header>
			<header className="container desktop sticky">
				<div className="logo">
					<NavLink to="/">
						<img src={Logo} alt="Logo" />
					</NavLink>
				</div>
				<Navigation />
			</header>
			<header className="container mobile" ref={mobile}>
				<div className="logo">
					<NavLink to="/">
						<img src={Logo} alt="Logo" />
					</NavLink>
				</div>
				<div className="hamburger" onClick={handleHamburgerClick}><img src={Hamburger} alt="Menü" /></div>
				<Navigation mobile={true} />
			</header>
		</>
	)
}

export default Header;