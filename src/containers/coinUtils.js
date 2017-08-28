import _ from 'lodash';

export function calcTotal(coinData, selectedCoins, valuePerCoin) {
	const lastHistoricalData = _.head(coinData);
	return _.sumBy(
		selectedCoins,
		coin => (valuePerCoin[coin] || 0) * (lastHistoricalData[coin] || 0)
	);
}
