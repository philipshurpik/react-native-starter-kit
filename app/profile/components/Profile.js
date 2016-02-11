import React, {Component, StyleSheet, View, Text, TouchableOpacity, PropTypes} from 'react-native';
import Button from 'react-native-button';
import {container, button} from 'commonStyles';

var styles = StyleSheet.create({
    container,
    button
});

class Profile extends Component {
    static propTypes = {
        identity: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const {identity, logout} = this.props;
        return (
            <View style={styles.container}>
                <Text>username: {identity.username}</Text>
                <Button style={styles.button}
                        onPress={logout}>
                    Logout
                </Button>
            </View>
        )
    }
}

export default Profile;