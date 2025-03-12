import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';

import { ModalPassword } from '../../components/modal';

export function Home() {

    const [size, setSize] = useState(6);
    const [passwordValue, setPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    function generatePassword() {
        console.log('gerando a senha com', size, 'caracteres');

        let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%%¨&*()_?';
        let password = '';

        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }

        console.log('password gerado', password);
        setPassword(password);
        setModalVisible(true);

    }


    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

            <Text style={styles.tittle}>{size} Caracteres</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 40 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor='#FF0000'
                    minimumTrackTintColor='#000'
                    thumbTintColor='#392de9'
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Password</Text>
            </TouchableOpacity>


            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3FF',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 60
    },
    area: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: '#392de9',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    },
    tittle: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})