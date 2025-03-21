import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { iseIsFocused, useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';

import { PasswordItem } from './components/passwordItem';

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect( () => {
    async function loadPasswords() {
      const passwords = await getItem('@pass');
      setListPasswords(passwords);

    }

    loadPasswords();
  }, [focused])

  async function handleDeletePassword(password) {
    console.log('deletando :', password);
    const passwords = await removeItem('@pass', password)
    setListPasswords(passwords);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style ={styles.header}>
        <Text style={styles.tittle}> Minhas Senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style = {{flex: 1, paddingTop: 14}}
          data={listPasswords}
          keyExtractor={item => String(item)}
          renderItem = { ({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item)}/>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  tittle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  }
});