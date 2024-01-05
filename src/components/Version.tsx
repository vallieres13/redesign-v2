import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Version = () => {

	const version = useRef<HTMLDivElement>(null);
	useGSAP(() => {
	}, { scope: version });

	return (
		<div className="version" ref={version}>
			<p>Switch version</p>
			<div className="lead"></div>
		</div>
	);
}

export default Version;