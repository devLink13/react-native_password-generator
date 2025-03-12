import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem ( {data, removePassword} ) {
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>
                {data}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: '#0e0e0e',
        marginBottom: 14,
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#FFF',
        fontSize: 16
    }
})