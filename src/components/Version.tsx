import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Version = () => {

	const location = useLocation();
	const version = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		if(location.pathname.startsWith('/article')) {
			window.location.href = '/article/open-source-repository';
			setTimeout(() => window.location.reload, 0);
		}
	}

	return (
		<Link to={'/article/open-source-repository'} onClick={handleClick}>
			<div className="version" ref={version}>
				<p>Open-Source Repo <span>↗</span></p>
				<div className="lead"></div>
			</div>
		</Link>
	);
}

export default Version;