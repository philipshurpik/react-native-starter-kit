import React, {Component, PropTypes} from "react";
import { View, Text} from "react-native";
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
					<Button onPress={increment}>
						Increase
					</Button>
					<Button onPress={decrement}>
						Decrease
					</Button>
					<Text style={commonStyles.label}>Counter: {counter}</Text>
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

export default Dashboard;