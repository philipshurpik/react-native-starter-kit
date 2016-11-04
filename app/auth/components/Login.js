import React, {Component, PropTypes} from "react";
import {View, Text, TextInput} from "react-native";
import {Button, Loader} from "app/common/components";
import commonStyles from "app/common/styles";

const INITIAL_STATE = {username: '', password: ''};

class Login extends Component {
	static propTypes = {
		errorStatus: PropTypes.string.isRequired,
		login: PropTypes.func.isRequired
	};

	constructor() {
		super();
		this.state = {...INITIAL_STATE};
	}

	render() {
		const {errorStatus, loading} = this.props;
		return (
			<View style={[commonStyles.container, commonStyles.content]} testID="Login">
				<TextInput
					style={commonStyles.input}
					value={this.state.username}
					autoCorrect={false}
					placeholder="username"
					maxLength={140}
					onSubmitEditing={() => this.onSubmit()}
					onChangeText={(username) => this.setState({username})}
				/>
				<TextInput
					style={commonStyles.input}
					value={this.state.password}
					autoCorrect={false}
					placeholder="password"
					secureTextEntry
					maxLength={140}
					onSubmitEditing={() => this.onSubmit()}
					onChangeText={(password) => this.setState({password})}
				/>
				<Button onPress={() => this.onSubmit()} testID="LoginButton">
					Login
				</Button>
				{errorStatus ? <Text style={commonStyles.errorText}>{errorStatus}</Text> : undefined}
				{loading ? <Loader/> : undefined}
			</View>
		);
	}

	onSubmit() {
		const {username, password} = this.state;
		this.setState({...INITIAL_STATE, loading: true});
		this.props.login(username, password);
	}
}

export default Login;