import React, {Component, PropTypes} from "react";
import {View, Text, TextInput} from "react-native";
import {Button, Loader} from "app/common/components";
import commonStyles from "app/common/styles";

class Login extends Component {
	static propTypes = {
		errorStatus: PropTypes.string.isRequired,
		login: PropTypes.func.isRequired
	};

	constructor() {
		super();
		this.state = {username: ''};
	}

	render() {
		const {errorStatus, loading} = this.props;
		return (
			<View style={[commonStyles.container, commonStyles.content]}>
				<TextInput
					style={commonStyles.input}
					value={this.state.username}
					autoCorrect={false}
					placeholder="username"
					maxLength={140}
					onSubmitEditing={() => this.onSubmit()}
					onChangeText={(username) => this.setState({username})}
				/>
				<Button onPress={() => this.onSubmit()}>
					Login
				</Button>
				{errorStatus ? <Text style={commonStyles.errorText}>{errorStatus}</Text> : undefined}
				{loading ? <Loader/> : undefined}
			</View>
		);
	}

	onSubmit() {
		this.props.login(this.state.username);
		this.setState({username: ''});
	}
}

export default Login;