import React from 'react';
import { Input, Label, Checkbox } from 'semantic-ui-react';
import DebounceInput from 'react-debounce-input';
import LedIndicator from './LedIndicator';
import { coinColors } from '../styles';

export default function({ coin, toggleCoin, onValueChanged, checked }) {
	return (
		<Input labelPosition="right" type="number" placeholder="Amount [$]">
			<Label style={{ display: 'flex', alignItems: 'center' }}>
				<Checkbox checked={checked} label={coin} slider onChange={toggleCoin} />
			</Label>
			<DebounceInput
				placeholder="Enter amount in USD"
				debounceTimeout={300}
				type="number"
				step="0.01"
				onChange={e => onValueChanged(coin, e.target.value)}
			/>
			<Label style={{ display: 'flex', alignItems: 'center' }}>
				<LedIndicator on={checked} color={coinColors[coin]} />
			</Label>
		</Input>
	);
}
