import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default class Button extends Component {
	render() {
		return <TouchableOpacity {...this.props} style={styles.button}>
			<Text style={styles.text}>{this.props.children}</Text>
		</TouchableOpacity>
	}
}

const styles = StyleSheet.create({
	button: {
		marginBottom: 10,
		padding: 10,
		backgroundColor: 'orange',
		borderRadius: 24,
		alignItems: 'center',
		shadowOpacity: 0.2,
		shadowRadius: 2,
		shadowOffset:{width:2,height:4}
	},
	text: {
		color: 'white',
		fontSize: 18
	}
});