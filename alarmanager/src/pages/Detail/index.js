import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import { Dimensions } from "react-native";

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    
    function navigateToAlarms() {
        navigation.navigate('Alarms')
    }

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ]
      };

      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

      const screenWidth = Dimensions.get("window").width;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToAlarms}>
                    <Text>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.headerText}>
                    Alarmanager
                </Text>                
            </View>

            <View style={styles.alarm}>
                <Text style={[styles.alarmProperty, {marginTop: 0}]}>Alarme:</Text>
                <Text style={styles.alarmValue}>Challenge Mobile</Text>

                <Text style={styles.alarmProperty}>Início:</Text>
                <Text style={styles.alarmValue}>14:00</Text>

                <Text style={styles.alarmProperty}>Fim:</Text>
                <Text style={styles.alarmValue}>23:00</Text> 
            </View>

            <View style={styles.graphic}>
                <Text>Line Chart</Text>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />
            </View>
        </View>
    );
}