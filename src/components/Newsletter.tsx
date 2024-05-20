import React from 'react';

/* Assets */
import NewsletterTop from '../assets/images/newsletter/newsletter-top.png';
import NewsletterBottom from '../assets/images/newsletter/newsletter-bottom.png';
import InputForm from '../assets/icons/form.svg';
import EnvelopeForm from '../assets/icons/envelope.svg';

const Newsletter = () => {
	return (
		<div className="newsletter container">
			<img src={NewsletterTop} alt="Background Image" className="bg-top"/>
			<img src={NewsletterBottom} alt="Background Image" className="bg-bottom"/>
			<div className="description">
				<p>Kostenloser Newsletter</p>
				<h3>Bleib im Strom der Neuigkeiten.</h3>
			</div>
			<div className="form">
				<input type="text" placeholder="dein name" required></input>
				<img src={InputForm} alt="Input Form"
					 style={{height: '16px', width: '16px', marginRight: '4px', transform: 'translateY(2px)'}}/>
				<input type="text" placeholder="email addresse" required></input>
				<img src={EnvelopeForm} alt="Envelope Form"/>
				<button>Anmelden</button>
			</div>
		</div>
	);
}

export default Newsletter;