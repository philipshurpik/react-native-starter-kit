import React, {Component, StyleSheet, View, Text, TextInput, PropTypes} from 'react-native';
import Button from 'react-native-button';
import {container, input, button} from 'commonStyles';

var styles = StyleSheet.create({
    container,
    input,
    button
});

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
        const {errorStatus} = this.props;
        return (
            <View className="loader" style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.username}
                    autoCorrect={false}
                    placeholder="username"
                    maxLength={140}
                    onSubmitEditing={() => this.onSubmit()}
                    onChangeText={(username) => this.setState({username: username})}
                />
                <Button style={styles.button}
                        onPress={() => this.onSubmit()}>
                    Login
                </Button>
                <Text>Status: {errorStatus}</Text>
            </View>
        );
    }

    onSubmit() {
        this.props.login(this.state.username);
        this.setState({username: ''});
    }
}

export default Login;