import React, {useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* Components */
import Navigation from "./Navigation";

/* Static */
import Logo from './../static/logo.svg';
import Hamburger from './../static/icons/hamburger.svg';

/* Misc */
import gsap from 'gsap';

const Header = () => {

	const location = useLocation();
	const [ isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const mobile = useRef<HTMLDivElement>(null);

	const handleHamburgerClick = () => toggleMobileNav();

	const toggleMobileNav = () => {
		if(isMobileNavOpen) {
			gsap.to('main, article, footer', {
				x: 0,
				opacity: 1,
				duration: .4,
				ease: 'expo.out',
				delay: .1,
				filter: 'none'
			});
			gsap.to(mobile.current!.querySelectorAll(':scope nav > .mobile ul li a'), {
				x: 200,
				opacity: 0,
				duration: .2,
				stagger: .02,
				pointerEvents: 'none',
				ease: 'power4.in'
			});
			setIsMobileNavOpen(false);
		} else {
			gsap.to('main, article, footer', {
				x: -200,
				opacity: .6,
				duration: .4,
				ease: 'expo.out',
				filter: 'blur(8px)'
			});
			gsap.to(mobile.current!.querySelectorAll(':scope nav > .mobile ul li a'), {
				x: 0,
				opacity: 1,
				duration: .25,
				stagger: .025,
				pointerEvents: 'all',
				ease: 'power4.out'
			});
			setIsMobileNavOpen(true);
		}
	}

	useEffect(() => {
		if(isMobileNavOpen) toggleMobileNav();
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
				<div className="hamburger" onClick={handleHamburgerClick}><img src={Hamburger} alt="Menu" /></div>
				<Navigation mobile={true} />
			</header>
		</>
	)
}

export default Header;