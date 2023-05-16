import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigate = useNavigation();

  const handleSobreClick = () => {
    // props.navigation.navigate('Sobre');
    navigate.navigate('Sobre');
  };

  const [name, setName] = useState('');

  const handleSendButton = () => {
    //primeiro parametro do navigate é o nome da tela
    //segundo parametro do navgate e o que quero
    navigate.navigate('Sobre', {name: name});
  }

  return (
    <View style={styles.container}>
      <Text>Qual seu nome?</Text>
      <TextInput style={styles.input}
        value={name}
        onChangeText={t => setName(t)}>
      </TextInput>
      <Button title="enviar" onPress={handleSendButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: 250,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#ccc',
  }
});

export default HomeScreen;
