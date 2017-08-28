import React from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';
import CoinInput from './CoinInput';

export default function({
	coins,
	selectedCoins,
	onToggleCoin,
	onCoinValueChanged
}) {
	return (
		<Grid stackable relaxed>
			{coins.map(coin =>
				<Grid.Column
					largeScreen={5}
					mobile={16}
					tablet={16}
					computer={8}
					key={coin}
				>
					<CoinInput
						coin={coin}
						checked={_.includes(selectedCoins, coin)}
						toggleCoin={() => onToggleCoin(coin)}
						onValueChanged={onCoinValueChanged}
					/>
				</Grid.Column>
			)}
		</Grid>
	);
}
