import React, {Component, PropTypes} from "react";
import { View, Text, StyleSheet} from "react-native";
import {Button, Footer} from "app/common/components";
import commonStyles from "app/common/styles";

class Dashboard extends Component {
	static propTypes = {
		counter: PropTypes.number.isRequired,
		increment: PropTypes.func.isRequired,
		decrement: PropTypes.func.isRequired,
		openProfile: PropTypes.func.isRequired
	};

	render() {
		const {counter, openProfile, increment, decrement} = this.props;
		return (
			<View style={commonStyles.container} testID="Dashboard">
				<View style={commonStyles.content}>
					<Button onPress={increment} testID="CounterPlus">
						Increase
					</Button>
					<Button onPress={decrement} testID="CounterMinus">
						Decrease
					</Button>
					<View style={styles.row}>
						<Text style={commonStyles.label}>Counter:</Text>
						<Text testID="CounterValue" style={commonStyles.label}>
							{counter}
						</Text>
					</View>
				</View>
				<Footer>
					<Button onPress={openProfile}>
						Open User Profile
					</Button>
				</Footer>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
});

export default Dashboard;