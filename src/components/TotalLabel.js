import React from 'react';
import { Label } from 'semantic-ui-react';
import { formatUSD } from '../utils';

export default function({ value }) {
	return (
		<Label color="black" pointing="below" size="huge">
			Total: {formatUSD(value)}
		</Label>
	);
}
