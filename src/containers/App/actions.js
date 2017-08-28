import { TOGGLE_COIN, CHANGE_COIN_VALUE } from './constants';

export function toggleCoin(coin) {
	return {
		type: TOGGLE_COIN,
		coin
	};
}

export function changeCoinValue(coin, value) {
	return {
		type: CHANGE_COIN_VALUE,
		coin,
		value
	};
}
