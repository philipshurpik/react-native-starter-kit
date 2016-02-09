import React, {Component, StyleSheet, View, Text, TextInput, PropTypes} from 'react-native';
import Button from 'react-native-button';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 44,
        padding: 20
    },
    input: {
        height: 40,
        padding: 10
    },
    button: {
        padding: 10,
        fontSize: 20,
        backgroundColor: 'orange',
        color: 'white'
    }
});

class Login extends Component {
    static propTypes = {
        identity: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {username: ''};
    }

    render() {
        const {identity, auth} = this.props;
        return (
            <View style={styles.container}>
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
                <Text>Username: {identity.username}</Text>
                <Text>Status: {auth.errorStatus}</Text>
            </View>
        );
    }

    onSubmit() {
        this.props.login(this.state.username);
        this.setState({username: ''});
    }
}

export default Login;