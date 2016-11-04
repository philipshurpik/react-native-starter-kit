import React from "react";
import {View, StyleSheet} from "react-native";

const Footer = ({children}) => (
	<View style={styles.footer}>
		{children}
	</View>
);

export default Footer;

const styles = StyleSheet.create({
	footer: {
		flex: 1,
		padding: 20,
		position: 'absolute',
		height: 100,
		bottom: 0,
		left: 0,
		right: 0
	},
});