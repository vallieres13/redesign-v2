import React from 'react';

/* Static */
import NotFoundImage from './../static/images/notfound.svg';

const NotFound = () => {

	return (
		<main className="not-found">
			<div className="page-heading centered">
				<div className="wrapper container">
					<h1>Got Lost?</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="container">
				<img src={NotFoundImage} alt="404 - Not Found" />
			</div>
		</main>
	);
}

export default NotFound;