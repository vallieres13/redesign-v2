import React, { useState } from 'react';

/* Components */
import Header from './Header';
import Footer from './Footer';
import InitialLoadOverlay from './InitialLoadOverlay';
import ScrollToTop from './ScrollToTop';
import Version from './Version';

/* Misc */
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	const [ initialLoadingHasFinished, setInitialLoadingHasFinished ] = useState(sessionStorage.initialLoad);

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
				<meta name="author" content="Felix Hebgen, mail@felixhebgen.de" />
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
			<Version />
			<Footer />
		</>
	);
}

export default Layout;