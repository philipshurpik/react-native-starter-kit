import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
		backgroundColor: 'orange'
	},
	text: {
		color: 'white',
		fontSize: 16
	}
});