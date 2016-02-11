import React, {Component, StyleSheet, View, Text, TouchableOpacity, PropTypes} from 'react-native';
import Button from 'react-native-button';
import {container, content, footer, button, label} from 'commonStyles';

var styles = StyleSheet.create({
    container,
    content,
    footer,
    button,
    label
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
                <View style={styles.content}>
                    <Text style={label}>Username: {identity.username}</Text>
                </View>
                <View style={[styles.footer, styles.content]}>
                    <Button style={styles.button}
                            onPress={logout}>
                        Logout
                    </Button>
                </View>
            </View>
        )
    }
}

export default Profile;