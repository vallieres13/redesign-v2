import React from 'react';

/* Components */
import Heading from './Heading';

/* Assets */
import campointLogo from '../assets/icons/campoint.svg';
import cforgLogo from '../assets/icons/cforg.svg';
import deineitLogo from '../assets/icons/deineit.svg';
import visualstaticLogo from '../assets/icons/visualstatic.svg';
import ragbitLogo from '../assets/icons/ragbit.svg';
import ladadiLogo from '../assets/icons/ladadi.svg';
import odwLogo from '../assets/icons/odw.svg';
import friendelloLogo from '../assets/icons/friendello.svg';
import egsLogo from '../assets/icons/egs.svg';
import feLogo from '../assets/icons/fe.svg';
import totallyhumanLogo from '../assets/icons/totallyhuman.svg';

const Timeline = () => {
	return (
		<div className="timeline container">
			<Heading>Timeline</Heading>
			<p>In den letzten Jahren war ich zunehmend produktiv und habe in vielen Teams gearbeitet, die kreative Projekte innerhalb meines Tech-Stacks verwalten und pflegen.</p>
			<div className="wrapper">
				<div className="year">
					<div className="heading">
						<h2>2025</h2>
					</div>
					<div className="events">
						<ul>
							<li><img src={totallyhumanLogo} style={{width: "280px"}} alt="Totally Human"/></li>
							<li><img src={campointLogo} alt="campoint AG"/></li>
							<li><img src={cforgLogo} alt="Capital for Growth Beteiligungsgesellschaft"/></li>
						</ul>
					</div>
				</div>
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
			<p className="highschool">dt. Abitur</p>
		</div>
	);
}

export default Timeline;
