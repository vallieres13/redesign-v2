import React from 'react';

/* Components */
import Heading from './Heading';

/* Static */
import campointLogo from './../static/icons/campoint.svg';
import cforgLogo from './../static/icons/cforg.svg';
import deineitLogo from './../static/icons/deineit.svg';
import visualstaticLogo from './../static/icons/visualstatic.svg';
import ragbitLogo from './../static/icons/ragbit.svg';
import ladadiLogo from './../static/icons/ladadi.svg';
import odwLogo from './../static/icons/odw.svg';
import friendelloLogo from './../static/icons/friendello.svg';
import egsLogo from './../static/icons/egs.svg';
import feLogo from './../static/icons/fe.svg';

const Timeline = () => {
	return (
		<div className="timeline container">
			<Heading>Timeline</Heading>
			<p>The past few years, I’ve been increasingly productive and worked with many teams, who administer and
				maintain creative projects within the ranges of my tech-stack.</p>
			<div className="wrapper">
				<div className="year">
					<div className="heading">
						<h2>2024</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={campointLogo} alt="campoint AG"/></li>
							<li><img src={cforgLogo} alt="Capital for Growth Beteiligungsgesellschaft"/></li>
						</ul>
					</div>
				</div>
				<div className="year">
					<div className="heading">
						<h2>2023</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={deineitLogo} alt="DeineIT"/></li>
							<li><img src={campointLogo} alt="campoint AG"/></li>
							<li><img src={cforgLogo} alt="Capital for Growth Beteiligungsgesellschaft"/></li>
						</ul>
					</div>
				</div>
				<div className="year">
					<div className="heading">
						<h2>2022</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={visualstaticLogo} alt="visualstatic"/></li>
							<li><img src={deineitLogo} alt="DeineIT"/></li>
						</ul>
					</div>
				</div>
				<div className="year">
					<div className="heading">
						<h2>2021</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={ragbitLogo} alt="RAGBIT.NET"/></li>
							<li><img src={deineitLogo} alt="DeineIT"/></li>
						</ul>
					</div>
				</div>
				<div className="year">
					<div className="heading">
						<h2>2020</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={ladadiLogo} alt="Landkreis Darmstadt-Dieburg"/></li>
							<li><img src={odwLogo} alt="Odenwaldkreis"/></li>
							<li><img src={deineitLogo} alt="DeineIT"/></li>
							<li><img src={friendelloLogo} alt="Friendello"/></li>
						</ul>
					</div>
				</div>
				<div className="year">
					<div className="heading">
						<h2>2019</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={egsLogo} alt="Ernst-Göbel-Schule"/></li>
							<li><img src={deineitLogo} alt="DeineIT"/></li>
						</ul>
					</div>
				</div>
				<div className="year">
					<div className="heading">
						<h2>2018</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={feLogo} alt="www.Felix-Hebgen.de"/></li>
						</ul>
					</div>
				</div>
			</div>
			<p className="highschool">Highschool</p>
		</div>
	);
}

export default Timeline;