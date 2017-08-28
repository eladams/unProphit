import _ from 'lodash';
import { toggleItemInArray } from '../../utils';

import { TOGGLE_COIN, CHANGE_COIN_VALUE } from './constants';
import { calcTotal } from '../coinUtils';
import coinHistoricalData from '../../data/data.json';

function getSelectedCoinTotal(selectedCoins, valuePerCoin) {
	return calcTotal(coinHistoricalData, selectedCoins, valuePerCoin);
}

// The initial state of the App
const initialState = {
	selectedCoins: [],
	valuePerCoin: {
		BTC: 0,
		ETH: 0,
		ZEC: 0
	},
	selectedCoinTotal: 0
};

function appReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_COIN:
			const selectedCoins = toggleItemInArray(state.selectedCoins, action.coin);
			return _.assign({}, state, {
				selectedCoins,
				selectedCoinTotal: getSelectedCoinTotal(
					selectedCoins,
					state.valuePerCoin
				)
			});
		case CHANGE_COIN_VALUE:
			const { coin, value } = action;
			const valuePerCoin = _.assign({}, state.valuePerCoin, {
				[coin]: value
			});
			return _.assign({}, state, {
				valuePerCoin,
				selectedCoinTotal: getSelectedCoinTotal(
					state.selectedCoins,
					valuePerCoin
				)
			});
		default:
			return state;
	}
}

export default appReducer;
