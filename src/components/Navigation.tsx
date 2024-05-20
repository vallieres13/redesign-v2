import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface Props {
	mobile?: boolean;
}

const defaultProps = {
	mobile: false
}

const Navigation = ({ mobile = defaultProps.mobile }: Props) => {

	const [ navigating, setNavigating ] = useState(false);
	const { pathname } = useLocation();

	const clickedItem = (e: React.MouseEvent) => {
		if(navigating) return;
		setNavigating(true);

		(e.target as HTMLElement).classList.add('active');

		/* Don't apply flicker to highlight element */
		if((e.target as HTMLElement).classList.contains('highlight')) return;

		gsap.to(e.target, {
			autoAlpha: 0,
			repeat: 2,
			yoyo: true,
			duration: .1
		});
		gsap.to(e.target, {
			autoAlpha: 1,
			duration: .1,
			delay: .3
		});

	};

	const unhoverItem = () => {
		if(navigating) setNavigating(false);
	};

	const items = [
		{
			title: 'Stories',
			url: 'stories'
		},
		{
			title: 'Profil',
			url: 'profile'
		},
		{
			title: 'Referenzen',
			url: 'work'
		},
		{
			title: 'Web Design',
			url: 'webdesign',
			highlight: true
		}
	];

	return (
		<nav style={mobile ? { flexBasis: '100%' } : {}}>
			<div className={mobile ? 'mobile' : 'desktop'}>
				<ul>
					{items.map((items: any, index: number) => {
						return (
							<li key={index}>
								<NavLink onMouseLeave={unhoverItem} onClick={clickedItem} to={'/' + items.url} className={({ isActive }) => (isActive || (items.url === 'stories' && pathname.includes('/article')) ? 'active' : '') + /* (items.url === 'hire' ? ' hire' : '') + */ (items.highlight ? ' highlight' : '')} data-hover={items.title}>
									<span>{items.title}</span>
								</NavLink>
								{/* {items.url === 'hire' && <sup>Busy &mdash; No offers</sup>} */}
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);

};

export default Navigation;
