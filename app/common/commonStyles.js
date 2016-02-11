/**
 * @providesModule commonStyles
 */

var HEADER_HEIGHT = 64;

module.exports = {
    container: {
        flex: 1,
        paddingTop: HEADER_HEIGHT + 150
    },
    content: {
        flex: 1,
        padding: 20
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0
    },
    input: {
        height: 40,
        padding: 10,
        marginBottom: 10,
        borderColor: 'orange',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    button: {
        marginBottom: 10,
        padding: 10,
        fontSize: 20,
        backgroundColor: 'orange',
        color: 'white'
    },
    label: {
        color: 'orange',
        padding: 5,
        fontWeight: "700",
        fontStyle: 'italic'
    },
    errorText: {
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        fontWeight: "700",
        fontStyle: 'italic'
    }
};