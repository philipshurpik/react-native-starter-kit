import React, {Component} from "react";
import {StatusBar, TouchableOpacity, Text, StyleSheet} from "react-native";
import {Actions as routes} from "react-native-router-flux";
import {connect} from "react-redux";

class TestRunner extends Component {
	async executeActions() {
		try {
			const {dispatch} = this.props;
			const res = await fetch('http://localhost:5555');
			const data = await res.json();

			data.actions.forEach(dispatch);
			data.redirects.forEach(redirect => {
				routes[redirect.name](redirect.params || {});
			});
		}
		catch (e) {
			console.warn(e);
		}
	}

	componentWillMount() {
		StatusBar.setHidden(true);
	}

	render() {
		return <TouchableOpacity style={styles.container} onPress={this.executeActions.bind(this)} testID="Execute">
			<Text style={styles.action}>Execute</Text>
		</TouchableOpacity>;
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: 'red',
		alignItems: 'center',
		left: 0,
		right: 0,
		zIndex: 1
	},
	action: {
		marginHorizontal: 4,
		paddingVertical: 2,
		fontSize: 16
	}
});

export default connect(state => state)(TestRunner);
