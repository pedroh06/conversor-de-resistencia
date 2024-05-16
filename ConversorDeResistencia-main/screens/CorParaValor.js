import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, Button } from 'react-native';
import Conversor from '../model/conversor.js'

const CorParaValor = ({navigation}) => {

    function trocarTelaMenu() {
        navigation.navigate("Menu")
    }

    const [faixa1, setFaixa1] = useState("");
    const [faixa2, setFaixa2] = useState("");
    const [faixa3, setFaixa3] = useState("");
    const [valorSaida, setValorSaida] = useState("")

    let conversor = new Conversor();

    function corParaValor(params) {
        let resp = conversor.corParaValor(faixa1, faixa2, faixa3);
        setValorSaida(resp);
    }
    
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Converter cor para valor</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>

          <Text style={styles.fonte}>Escolha a faixa 1:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={faixa1}
              onValueChange={(itemValue) => setFaixa1(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione uma cor" value="" />
              {["Marrom", "Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo", "Cinza", "Branco"].map((cor) => (
                <Picker.Item key={cor} label={cor} value={cor} />
              ))}
            </Picker>
          </View>
    
          <Text style={styles.fonte}>Escolha a faixa 2:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={faixa2}
                onValueChange={(itemValue) => setFaixa2(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Selecione uma cor" value="" />
                {["Preto", "Marrom", "Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo", "Cinza", "Branco", ""].map((cor) => (
                  <Picker.Item key={cor} label={cor} value={cor} />
                ))}
              </Picker>
            </View>
    
          <Text style={styles.fonte}>Escolha a faixa 3:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={faixa3}
              onValueChange={(itemValue) => setFaixa3(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione uma cor" value="" />
              {["Preto", "Marrom", "Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo", "Cinza", "Branco", "Dourado"].map((cor) => (
                <Picker.Item key={cor} label={cor} value={cor} />
              ))}
            </Picker>
          </View>

          <Text style={styles.fonte}>{valorSaida}</Text>
    
          <TouchableOpacity onPress={corParaValor} style={styles.botao}>
            <Text style={styles.textoBotao}>Gerar valor</Text>
          </TouchableOpacity>
    
          <TouchableOpacity onPress={trocarTelaMenu} style={styles.botao}>
                <Text style={styles.textoBotao}>Voltar para o menu</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFDEAD',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    pickerContainer: {
      borderWidth: 2,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      width: '80%',
    },
    picker: {
      height: 50,
      width: '100%',
      color: 'black',
    },
    input: {
      padding: 5,
      borderWidth: 2,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      width: '80%',
      fontSize: 15,
      fontWeight: 'bold',
    },
    fonte: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    botao: {
      backgroundColor: '#2F4F4F',
      padding: 10,
      borderRadius: 8,
      marginTop: 15,
      marginBottom: 15,
    },
    textoBotao: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default CorParaValor;