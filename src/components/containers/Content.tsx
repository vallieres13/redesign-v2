import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Content = (props: { children: boolean | React.ReactNode | React.ReactPortal | null | undefined; }) => {

	const location = useLocation();
	const [ pastLocation, setPastLocation ] = useState('');

	useEffect(() => {
		if(location.pathname === pastLocation) return;

		setPastLocation(location.pathname);

		gsap.to(window, {
			scrollTo: 0,
			duration: .75,
			ease: 'power4'
		});

		animate();

	}, [location, pastLocation]);


	/* Page Switch animation */
	const animate = () => {
		const main = document.querySelector('main') as HTMLDivElement;

		gsap.fromTo(main, {
			autoAlpha: 0
		}, {
			autoAlpha: 1,
			duration: .5
		});
	};

	return (
		<main>
		  {props.children}
		</main>
	);
};

export default Content;
