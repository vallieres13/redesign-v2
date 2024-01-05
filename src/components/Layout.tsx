import React, {useEffect, useState } from 'react';

/* Components */
import Navigation from './Navigation';
import Footer from './Footer';
import InitialLoadOverlay from './InitialLoadOverlay';
import ScrollToTop from './ScrollToTop';

/* Static */
import Logo from './../static/logo.svg';

/* Misc */
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';
import gsap from 'gsap';

const Layout = () => {
	const [ initialLoadingHasFinished, setInitialLoadingHasFinished ] = useState(localStorage.initialLoad);
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
			const stickyHeader = document.querySelector('header.sticky') as HTMLElement;
			stickyHeader.classList.add('display');

			gsap.fromTo(stickyHeader, {
				y: -100,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: .3,
				ease: 'back.out'
			})
		} else {
			const stickyHeader = document.querySelector('header.sticky') as HTMLElement;

			gsap.fromTo(stickyHeader, {
				y: 0,
				opacity: 1
			}, {
				y: -100,
				opacity: 0,
				duration: .15,
				ease: 'power4.in',
				onComplete: () => stickyHeader.classList.remove('display')
			});
		}
	}, [sticky]);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<base href="/" />

				{/* Favicon */}
				{/*
					<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
					<link rel="manifest" href="/favicons/site.webmanifest" />
					<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#FFFFFF" />
					<link rel="shortcut icon" href="/favicons/favicon.ico" />
				*/}
				<meta name="apple-mobile-web-app-title" content="Felix Hebgen" />
				<meta name="application-name" content="Felix Hebgen" />
				<meta name="theme-color" content="#FFFFFF" />

				{/* Meta Tags */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="title" content="Felix Hebgen" />
				<meta name="description" content="The personal website of Felix Hebgen, a German full-stack web developer in today's ever so fast growing web-app economy, based in Darmstadt, Hessen." />
				<meta name="keywords" content="felix hebgen, portfolio, web developer, designer, web design, darmstadt web developer, darmstadt web design, höchst im odenwald, hessen, job profile, cv, felix hebgen web design, felix hebgen design" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Felix Hebgen, hire@felixhebgen.de" />
				<meta name="designer" content="Felix Hebgen" />
				<meta name="url" content="https://www.felixhebgen.de" />
				<meta name="identifier-URL" content="https://www.felixhebgen.de" />
				<meta name="coverage" content="Germany" />
				<meta name="revised" content="Tuesday, January 2nd, 20234 1:04 pm" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="expires" content="" />

				{/* Title */}
				<title>Felix Hebgen</title>
			</Helmet>
			<InitialLoadOverlay hasFinished={() => setInitialLoadingHasFinished(true)} />
			<ScrollToTop />
			<header className="container">
				<div className="logo">
					<NavLink to="/">
						<img src={Logo} alt="Logo"/>
					</NavLink>
				</div>
				<Navigation/>
			</header>
			<header className="container sticky">
				<div className="logo">
					<NavLink to="/">
						<img src={Logo} alt="Logo"/>
					</NavLink>
				</div>
				<Navigation/>
			</header>
			{initialLoadingHasFinished && <Outlet />}
			{/* <Version /> */}
			<Footer />
		</>
	);
}

export default Layout;