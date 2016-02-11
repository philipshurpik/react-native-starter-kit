import React, {Component, StyleSheet, View, Text, TextInput, PropTypes} from 'react-native';
import Button from 'react-native-button';
import {container, content, input, button, errorText} from 'commonStyles';

var styles = StyleSheet.create({
    container,
    content,
    input,
    button,
    errorText
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
            <View style={[styles.container, styles.content]}>
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
                {errorStatus ? <Text style={styles.errorText}>{errorStatus}</Text> : <Text/>}
            </View>
        );
    }

    onSubmit() {
        this.props.login(this.state.username);
        this.setState({username: ''});
    }
}

export default Login;