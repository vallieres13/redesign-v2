import React from 'react';
import { Link } from 'react-router-dom';

/* Static */
import FelixTransparent from './../static/images/promos/felix-transparent.png';
import LinkedInLogo from './../static/icons/linkedin.svg';
import XingLogo from './../static/icons/xing.svg';
import GithubLogo from './../static/icons/github.svg';

interface Props {
	title?: string;
}

const defaultProps = {
	title: 'Connect'
}

const Connect = ({ title = defaultProps.title }: Props) => {
	return (
		<div className="connect container">
			<div className="heading">
				<div className="lead"></div>
				<h1>{title}</h1>
			</div>
			<div className="wrapper">
				<div className="messages left">
					<div className="imessage">
						<p className="from-them green">AI Research</p>
						<p className="from-them blue">Video Production</p>
						<p className="from-them">Online Marketing</p>
					</div>
				</div>
				<div className="profile">
					<div className="picture">
						<img src={FelixTransparent} alt="Felix Hebgen"/>
					</div>
					<h2>Felix Hebgen</h2>
					<div className="underscore"></div>
					<div className="socials">
						<ul>
							<li><Link to={'https://www.linkedin.com/in/felixhebgen/'}><img src={LinkedInLogo} alt="LinkedIn"/></Link></li>
							<li><Link to={'https://www.xing.com/profile/Felix_Hebgen'}><img src={XingLogo} alt="Xing"/></Link></li>
							<li><Link to={'https://github.com/vallieres13'}><img src={GithubLogo} alt="GitHub"/></Link></li>
						</ul>
					</div>
				</div>
				<div className="messages right">
					<div className="imessage">
						<p className="from-me">Web Development</p>
						<p className="from-me green">UX & UI Design</p>
						<p className="from-me blue">Full-Stack Development</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Connect;