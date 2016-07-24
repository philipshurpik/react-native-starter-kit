import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Button from 'app/common/Button';
import {container, content, footer, label} from 'app/common/commonStyles';

var styles = StyleSheet.create({
    container,
    content,
    footer,
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
                    <Button onPress={logout}>
                        Logout
                    </Button>
                </View>
            </View>
        )
    }
}

export default Profile;