const csv = require('csvtojson');
var jsonfile = require('jsonfile');
var outputFile = './src/data/data.json';
const format = require('date-fns/format');
const _ = require('lodash');
const coins = ['BTC', 'ETH', 'ZEC'];
const coinToCSVFilePath = coin => `./data/${coin}.csv`;
const initialData = {};

const readCoinDataFromCsv = coin =>
	new Promise((resolve, reject) => {
		csv({
			noheader: true,
			delimiter: '\t',
			trim: true
		})
			.fromFile(coinToCSVFilePath(coin))
			.on('json', jsonObj => {
				const timestamp = new Date(jsonObj.field1).getTime();
				initialData[timestamp] = _.assign({}, initialData[timestamp], {
					[coin]: jsonObj.field4
				});
			})
			.on('done', error => {
				if (error) {
					reject(error);
				}
				resolve();
			});
	});

Promise.all(coins.map(coin => readCoinDataFromCsv(coin))).then(() => {
	const data = _.keys(initialData).map(key =>
		_.assign({ x: Number(key) }, initialData[key])
	);
	jsonfile.writeFile(outputFile, data, function(err) {
		console.error(err);
	});
});
