import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

import styles from './styles';

const stylesAlarm = [
      {
        name: 'Normal',
        text_color: '#fff',
        background_color: '#0f0',
        priority: 0
      },
      {
        name: 'Level 1',
        text_color: '#fff',
        background_color: '#c00',
        priority: 1
      },
      {
        name: 'Level 2',
        text_color: '#fff',
        background_color: '#a0a000',
        priority: 2
      },
      {
        name: 'Level 3',
        text_color: '#fff',
        background_color: '#d7d700',
        priority: 3
      }
]

export default function Alarms({navigation}) {

    const [dataAlarm, setDataAlarm] = useState('')

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/84a532b2-5206-4ae6-a6f5-7153484ece16') 
            .then(function (response) {
                // handle success
                console.log(response.data);
                setDataAlarm(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])

    function renderItem({item}) {

        return (
            <View style={[styles.alarmList, {backgroundColor: stylesAlarm[item.id_priority].background_color}]}>
                <Text style={styles.alarmProperty}>Alarme: {item.alarm_name}</Text>

                <Text style={styles.alarmProperty}>Início: {item.start}</Text>

                <Text style={styles.alarmProperty}>Fim: {item.end}</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', {post:item})}
                >
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                </TouchableOpacity>
            </View>
        )   
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos alarmes abaixo e visualize o seu gráfico.</Text>

            <FlatList  
                data = {dataAlarm}
                renderItem={renderItem}
            />
        </View>
    );
}