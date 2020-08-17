import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { LineChart } from "react-native-chart-kit";

import styles from './styles';

export default function Detail({route, navigation}) {

   const [dataAlarm, useDataAlarm] = useState('')

   useEffect(() => {
      console.log('param: ', route) 
      useDataAlarm(route.params.post)
   },[])
    
    function navigateToAlarms() {
        navigation.navigate('Alarms')
    }

    const chartConfig = {
        backgroundGradientFrom: "#7474BF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#348AC7",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        barPercentage: 0.5,
      };  

    const data = {
        labels: [dataAlarm.start, dataAlarm.end ],
        datasets: [
          {
            data: Array.from({length:288}, () => Math.floor(Math.random()*288)),
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`
          }
        ]
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToAlarms}>
                    <Text style={styles.back}>Voltar</Text>
                </TouchableOpacity>               
            </View>

            <View style={styles.alarmList}>
                <Text style={[styles.alarmProperty, { marginTop: 0 }]}>
                    Alarme: {dataAlarm.alarm_name}
                </Text>
            </View>

            <View>
                <LineChart style={{borderRadius: 8}}
                    data={data}
                    width={370}
                    height={600}
                    chartConfig={chartConfig}
                />
            </View>
        </View>
    );
}