import React from 'react';

/* Static */
import NewsletterTop from './../static/images/newsletter/newsletter-top.png';
import NewsletterBottom from './../static/images/newsletter/newsletter-bottom.png';
import InputForm from './../static/icons/form.svg';
import EnvelopeForm from './../static/icons/envelope.svg';

const Newsletter = () => {
	return (
		<div className="newsletter container">
			<img src={NewsletterTop} alt="Background Image" className="bg-top"/>
			<img src={NewsletterBottom} alt="Background Image" className="bg-bottom"/>
			<div className="description">
				<p>Free newsletter</p>
				<h3>Consider staying in the stream.</h3>
			</div>
			<div className="form">
				<input type="text" placeholder="your name" required></input>
				<img src={InputForm} alt="Input Form"
					 style={{height: '16px', width: '16px', marginRight: '4px', transform: 'translateY(2px)'}}/>
				<input type="text" placeholder="email address" required></input>
				<img src={EnvelopeForm} alt="Envelope Form"/>
				<button>Sign Up</button>
			</div>
		</div>
	);
}

export default Newsletter;