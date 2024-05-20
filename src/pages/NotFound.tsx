import React from 'react';

/* Assets */
import NotFoundImage from '../assets/images/notfound.svg';
import { Helmet } from 'react-helmet';

const NotFound = () => {

	return (
		<main className="not-found">
			<Helmet>
				<meta name="title" content="404 Seite nicht gefunden — Felix Hebgen" />
				<title>404 Seite nicht gefunden — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading centered">
				<div className="wrapper container">
					<h1>Verirrt?</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="container">
				<img src={NotFoundImage} alt="404 - Seite nicht gefunden" />
			</div>
		</main>
	);
}

export default NotFound;