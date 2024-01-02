import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	gsap.registerPlugin(ScrollToPlugin);

	useEffect(() => {
		gsap.to(window, { duration: .6, ease: 'expo.out', scrollTo: 0 });
	}, [pathname]);

	return null;
}

export default ScrollToTop;