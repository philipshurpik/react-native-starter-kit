import React, {Component, StyleSheet, View, Text, TouchableOpacity, PropTypes} from 'react-native';
import Button from 'react-native-button';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 80
    },
    button: {
        fontSize: 20,
        color: 'green'
    }
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