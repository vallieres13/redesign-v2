import React, { useEffect, useState } from 'react';

/* Components */
import Header from './Header';
import Footer from './Footer';
import InitialLoadOverlay from './InitialLoadOverlay';
import ScrollToTop from './ScrollToTop';
import Version from './Version';

/* Misc */
import { Helmet } from 'react-helmet';
import { Outlet, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Layout = () => {
	const [ initialLoadingHasFinished, setInitialLoadingHasFinished ] = useState(sessionStorage.initialLoad);
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

	const location = useLocation();

	useEffect(() => {
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
	}, [location.pathname]);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<base href="/" />

				{/* Favicon */}
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FFFFFF" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="application-name" content="Felix Hebgen" />
				<meta name="apple-mobile-web-app-title" content="Felix Hebgen" />
				<meta name="application-name" content="Felix Hebgen" />
				<meta name="theme-color" content="#FFFFFF" />

				{/* Meta Tags */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="title" content="Felix Hebgen — Web-Developer & Designer from Darmstadt" />
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
				<title>Felix Hebgen — Web-Developer & Designer from Darmstadt</title>
			</Helmet>
			<InitialLoadOverlay hasFinished={() => setInitialLoadingHasFinished(true)} />
			<ScrollToTop />
			<Header />
			{initialLoadingHasFinished && <Outlet />}
			{/* <Version /> */}
			<Footer />
			<Version />
		</>
	);
}

export default Layout;