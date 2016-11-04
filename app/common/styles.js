import {StyleSheet} from 'react-native';
const HEADER_HEIGHT = 64;

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: HEADER_HEIGHT + 150
	},
	content: {
		flex: 1,
		padding: 20
	},
	input: {
		height: 40,
		padding: 10,
		marginBottom: 10,
		borderColor: 'orange',
		borderWidth: 1,
		borderStyle: 'solid'
	},
	label: {
		color: 'orange',
		padding: 5,
		fontWeight: "700",
		fontStyle: 'italic'
	},
	errorText: {
		backgroundColor: 'red',
		color: 'white',
		padding: 5,
		fontWeight: "700",
		fontStyle: 'italic'
	}
});