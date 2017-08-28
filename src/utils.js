import { indexOf, without } from 'lodash';

export function toggleItemInArray(collection, item) {
	const index = indexOf(collection, item);
	if (index !== -1) {
		return without(collection, item);
	}
	return [...collection, item];
}

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2
});

export function formatUSD(value) {
	return formatter.format(value);
}
