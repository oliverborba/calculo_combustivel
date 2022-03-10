import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {

  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');


  const calcula = () => {
    const tempGasolina = parseFloat(gasolina);
    const tempAlcool = parseFloat(alcool);

    if ((tempGasolina * 0.7) > tempAlcool) {
      setResultado('Álcool');
    } else {
      setResultado('Gasolina')
    }
  }

  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri:
          'https://start.youse.com.br/wp-content/uploads/2018/06/gasolina-ou-etanol.jpg'
      }}
    >
      <Text style={{
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
      }} >
        Álcool ou Gasolina
      </Text>
      <Text style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
        width: '85%',
        backgroundColor: 'darkgrey'
      }}>
        Saiba qual a melhor opção de abastecimento para o seu veículo
      </Text>

      <TextInput
        onChangeText={(value) => setGasolina(value)}
        placeholder='Digite o valor da gasolina'
        keyboardType='numeric'
        style={{ backgroundColor: 'white', width: "90%", marginVertical: 10, }} />
      <TextInput
        onChangeText={(value) => setAlcool(value)}
        placeholder='Digite o valor da álcool'
        keyboardType='numeric'
        style={{ backgroundColor: 'white', width: "90%", marginVertical: 10, }} />

      <TouchableOpacity onPress={calcula}>
        <Text

          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          Calcular
        </Text>
      </TouchableOpacity>

      <Text style={{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
      }}>
        É melhor abastecer com:
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        {resultado}
      </Text>
    </ImageBackground>
  );
};
export default App;
