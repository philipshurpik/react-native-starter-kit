import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from 'app/common/Button';
import Loader from 'app/common/Loader';
import {container, content, input, errorText} from 'app/common/commonStyles';

var styles = StyleSheet.create({
    container,
    content,
    input,
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
        const {errorStatus, loading} = this.props;
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
                <Button onPress={() => this.onSubmit()}>
                    Login
                </Button>
                {errorStatus ? <Text style={styles.errorText}>{errorStatus}</Text> : undefined}
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