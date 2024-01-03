import React, { useState } from 'react';

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

const Layout = () => {
	const [ initialLoadingHasFinished, setInitialLoadingHasFinished ] = useState(localStorage.initialLoad);

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
				<meta name="description" content="The personal website of Felix Hebgen, a striving full-stack web developer in today's ever so fast growing web-app economy." />
				<meta name="keywords" content="felix hebgen, hebgen, felix, personal blog, blog, portfolio, hire, web developer, designer, web design, artificial intelligence, job profile" />
				<meta name="robots" content="index, follow" />
				<meta name="Classification" content="Personal Blog" />
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
			{initialLoadingHasFinished && <Outlet />}
			<Footer />
		</>
	);
}

export default Layout;