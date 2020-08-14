import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    alarm: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 32,
        marginBottom: 16 
    },

    alarmProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },

    alarmValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    graphic: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF'
    },
});