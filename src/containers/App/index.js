import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Segment, Container, Grid, Divider } from 'semantic-ui-react';

import CoinInputGroup from '../../components/CoinInputGroup';
import CoinChart from '../../components/CoinChart';
import TotalLabel from '../../components/TotalLabel';
import coinHistoricalData from '../../data/data.json';

import { toggleCoin, changeCoinValue } from './actions';

import { COINS } from './constants';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>unPROPHIT</h2>
				</div>
				<Container>
					<p className="App-intro">Prophesing your unProfits</p>
					<Segment>
						<Grid relaxed>
							<Grid.Row centered>
								<Grid>
									<Grid.Row centered>
										<h3>Enter past invesement for each coin:</h3>
									</Grid.Row>
									<hr />
									<Grid.Row centered>
										<CoinInputGroup
											coins={COINS}
											selectedCoins={this.props.selectedCoins}
											onToggleCoin={this.props.onToggleCoin}
											onCoinValueChanged={this.props.onCoinValueChanged}
										/>
									</Grid.Row>
									<Grid.Row centered>
										<TotalLabel value={this.props.selectedCoinTotal} />
									</Grid.Row>
								</Grid>
							</Grid.Row>
							<Divider />
							<Grid.Row>
								<CoinChart
									coinHistoricalData={coinHistoricalData}
									coinValues={this.props.valuePerCoin}
									selectedCoins={this.props.selectedCoins}
								/>
							</Grid.Row>
						</Grid>
					</Segment>
				</Container>
			</div>
		);
	}
}

export function mapDispatchToProps(dispatch) {
	return {
		onToggleCoin: coin => dispatch(toggleCoin(coin)),
		onCoinValueChanged: (coin, value) => dispatch(changeCoinValue(coin, value))
	};
}

const mapStateToProps = ({
	global: { selectedCoins, valuePerCoin, selectedCoinTotal }
}) => {
	return { selectedCoins, valuePerCoin, selectedCoinTotal };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
