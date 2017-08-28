import React from 'react';
import './LedIndicator.css';

export default function({ on, color }) {
	return (
		<div
			className="Led-Indicator"
			style={{
				backgroundColor: color,
				opacity: on ? 1 : 0.2
			}}
		/>
	);
}
