import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';

// import api from '../../services/api'; 

import styles from './styles';

export default function Alarms() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Alarmanager
                </Text>

                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 alarmes</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos alarmes abaixo.</Text>

            <FlatList 
                data={[1, 2, 3]}
                style={styles.alarmList}
                keyExtractor={alarm => String(alarm)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.alarm}>
                    <Text style={styles.alarmProperty}>Alarme:</Text>
                    <Text style={styles.alarmValue}>Challenge Mobile</Text>

                    <Text style={styles.alarmProperty}>Início:</Text>
                    <Text style={styles.alarmValue}>14:00</Text>

                    <Text style={styles.alarmProperty}>Fim:</Text>
                    <Text style={styles.alarmValue}>23:00</Text> 

                    <TouchableOpacity onPress={navigateToDetail}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}