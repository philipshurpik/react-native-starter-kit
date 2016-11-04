import React, {Component, PropTypes} from "react";
import {View, Text} from "react-native";
import {Button, Footer} from "app/common/components";
import commonStyles from "app/common/styles";

class Profile extends Component {
	static propTypes = {
		identity: PropTypes.object.isRequired,
		logout: PropTypes.func.isRequired
	};

	render() {
		const {identity, logout} = this.props;
		return (
			<View style={commonStyles.container} testID="Dashboard">
				<View style={commonStyles.content}>
					<Text style={commonStyles.label}>
						Username: {identity.username}
					</Text>
				</View>
				<Footer>
					<Button onPress={logout}>
						Logout
					</Button>
				</Footer>
			</View>
		)
	}
}

export default Profile;