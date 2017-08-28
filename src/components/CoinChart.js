import React, { Component } from 'react';
import { VictoryLine, VictoryChart } from 'victory';

import _ from 'lodash';
import { coinColors } from '../styles';

export default class CoinChart extends Component {
	defaultProps = {
		coinHistoricalData: {},
		coinValues: {},
		selectedCoins: []
	};
	render() {
		const { coinHistoricalData, coinValues, selectedCoins } = this.props;

		return (
			<VictoryChart
				padding={{ left: 100, top: 20, bottom: 40, right: 50 }}
				scale={{ x: 'time' }}
				height={180}
				domainPadding={{ y: 0 }}
			>
				{selectedCoins.map((coin, index) =>
					<VictoryLine
						interpolation="natural"
						style={{
							labels: { fontSize: 2 },

							data: {
								strokeWidth: 0.5,
								stroke: coinColors[coin]
							}
						}}
						animate={{
							duration: 200,
							onLoad: { duration: 500 }
						}}
						key={coin}
						data={coinHistoricalData}
						x={d => new Date(d.x)}
						y={d => (d[coin] || 0) * (coinValues[coin] || 0)}
					/>
				)}
				{selectedCoins.length > 1 &&
					<VictoryLine
						interpolation="natural"
						style={{
							data: {
								strokeWidth: 0.5,
								stroke: '#333'
							}
						}}
						animate={{
							duration: 200,
							onLoad: { duration: 500 }
						}}
						data={coinHistoricalData}
						x={d => new Date(d.x)}
						y={d =>
							_.sumBy(
								selectedCoins,
								coin => (d[coin] || 0) * (coinValues[coin] || 0)
							)}
					/>}
			</VictoryChart>
		);
	}
}
