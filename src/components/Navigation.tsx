import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

interface Props {
	mobile?: boolean;
}

const defaultProps = {
	mobile: false
}

const Navigation = ({ mobile = defaultProps.mobile }: Props) => {

	const [ navigating, setNavigating ] = useState(false);

	const clickedItem = (e: React.MouseEvent) => {
		if(navigating) return;
		setNavigating(true);

		(e.target as HTMLElement).classList.add('active');

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
			url: 'stories',
			colour: 'none'
		},
		{
			title: 'About Me',
			url: 'about',
			colour: 'none'
		},
		{
			title: 'Work',
			url: 'work',
			colour: 'none'
		},
		{
			title: 'Hire Me',
			url: 'hire',
			colour: 'none'
		}
	];

	return (
		<nav style={mobile ? { flexBasis: '100%' } : {}}>
			<div className={mobile ? 'mobile' : 'desktop'}>
				<ul>
					{items.map((items: any, index: number) => {
						return (
							<li key={index}>
								<NavLink onMouseLeave={unhoverItem} onClick={clickedItem} to={'/' + items.url} className={({ isActive }) => (isActive ? 'active' : '') + (items.url === 'hire' ? ' hire' : '')} data-colour={items.colour} data-hover={items.title}>
									<span>{items.title}</span>
								</NavLink>
								{items.url === 'hire' && <sup>Looking!</sup>}
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);

};

export default Navigation;
