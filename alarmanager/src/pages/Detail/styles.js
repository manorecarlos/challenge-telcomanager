import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: 'white'
    },

    header: {
        alignItems: 'flex-start'
    },

    back: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    alarmList: {
        marginTop: 24,
        marginBottom: 24,
        borderRadius: 8
    },

    alarmProperty: {
        fontSize: 16,
        paddingBottom: 10,
        color: 'black',
        textAlign: 'center'
    },
});