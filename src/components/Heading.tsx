import React from 'react';

const Heading = (props: { children: React.ReactNode, right?: boolean, container?: boolean }) => {
	return (
		<div className={'heading' + (props.right ? ' right' : '') + (props.container ? ' container' : '')}>
			<div className="lead"></div>
			<h1>{props.children}</h1>
		</div>
	);
}

export default Heading;