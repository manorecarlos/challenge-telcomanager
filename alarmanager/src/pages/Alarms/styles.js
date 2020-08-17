import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 38,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    description: {
        fontSize: 14,
        lineHeight: 24,
        color: 'black',
        textAlign: 'center'
    },

    alarmList: {
        marginTop: 24,
        padding: 12,
        borderRadius: 8
    },

    alarmProperty: {
        fontSize: 14,
        paddingBottom: 10,
        color: '#fff',
        fontWeight: 'bold'
    },

    detailsButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});