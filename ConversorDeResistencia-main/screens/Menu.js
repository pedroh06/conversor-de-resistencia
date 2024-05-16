import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Menu = ({ navigation }) => {
  function TrocarCorParaValor() {
    navigation.navigate('Cor Para Valor');
  }

  function TrocarValorParaCor() {
    navigation.navigate('Valor Para Cor');
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>CONVERSORES DE RESISTÊNCIA ELÉTRICA</Text>
        <TouchableOpacity onPress={TrocarValorParaCor} style={styles.botao}>
            <Text style={styles.textoBotao}>Valor para cor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={TrocarCorParaValor} style={styles.botao}>
            <Text style={styles.textoBotao}>Cor para valor</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDEAD',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#2F4F4F',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Menu;
