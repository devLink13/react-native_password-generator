import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Pressable, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';


export function ModalPassword({ password, handleClose }) {

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        Alert.alert("Sucesso", "Senha copiada");
        handleClose();
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.password}>SENHA GERADA</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        backgroundColor: '#FFF',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    password: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 10
    },

    innerPassword: {
        backgroundColor: '#0E0E0E',
        width: '90%',
        padding: 14,
        borderRadius: 8,

    },

    text: {
        color: '#FFF',
        textAlign: 'center',

    },

    buttonArea: {
        flexDirection: 'row',
        marginTop: 8,
        width: '90%',
        justifyContent: 'space-between',
    },

    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,

    },
    buttonSaveText: {
        color: '#FFF',
        fontWeight: 'bold',
    }
})