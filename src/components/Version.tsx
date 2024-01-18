import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Version = () => {

	const version = useRef<HTMLDivElement>(null);

	return (
		<Link to={'/article/open-source-repository'}>
			<div className="version" ref={version}>
				<p>Open-Source Repo <span>↗</span></p>
				<div className="lead"></div>
			</div>
		</Link>
	);
}

export default Version;