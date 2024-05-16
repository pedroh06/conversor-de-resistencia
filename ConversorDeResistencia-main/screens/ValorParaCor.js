import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, Button } from 'react-native';
import Conversor from '../model/conversor.js'

const ValorParaCor = ({navigation}) => {

    function trocarTelaMenu() {
        navigation.navigate("Menu")
    }

    const [valor, setValor] = useState("");
    const [cores, setCores] = useState("");

    let conversor = new Conversor();

    function valorParaCor() {
        let resp = conversor.valorParaCor(valor);
        setCores(resp);
        if (resp == "VALOR INVÁLIDO") {
          setValor("");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Converter valor para cor</Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

            <Text style={styles.fonte}>Insira o valor da resistência elétrica</Text>
            <TextInput value={valor} onChangeText={setValor} style={styles.input} />

            <Text style={styles.fonte}>{cores}</Text>

            <TouchableOpacity onPress={valorParaCor} style={styles.botao}>
                <Text style={styles.textoBotao}>Gerar cores</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={trocarTelaMenu} style={styles.botao}>
                <Text style={styles.textoBotao}>Voltar para o menu</Text>
            </TouchableOpacity>
        </View>

    )
      
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

export default ValorParaCor;