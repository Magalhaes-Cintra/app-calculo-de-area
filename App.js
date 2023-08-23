import React, {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

function Calculoretangulo(){
  const resultado = b * h;
  alert('A área do retângulo é ' + resultado);
}

const [b, setb] = useState('');
const [h, seth] = useState('');

function Calculotriangulo(){
  const resultado = bt * (ht/2);
  alert('A área do retângulo é ' + resultado);
}

const [bt, setbt] = useState('');
const [ht, setht] = useState('');

function Calculoquadrado(){
  const resultado = bq * hq;
  alert('A área do quadrado é ' + resultado);
}

const [bq, setbq] = useState('');
const [hq, sethq] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Calculo da área do retângulo
      </Text>

      <TextInput style={styles.input}
      placeholder="Digite a altura do retângulo" 
      placeholderTextColor='#fff'
      keyboardType="numeric"
      onChangeText={(h)=>seth(h)}
      />

      <TextInput style={styles.input}
      placeholder ="Digite a base retângulo"
      placeholderTextColor='#fff'
      keyboardType="numeric" 
      onChangeText={(b)=>setb(b)}
      />

     <TouchableOpacity style={styles.btn} onPress={Calculoretangulo}>
      <Text style={styles.textbtn}> Calcular a área do retângulo </Text>
      </TouchableOpacity>

      <Text style={styles.paragraph}>
       Calculo da área do triângulo
      </Text>

      <TextInput style={styles.input}
      placeholder="Digite a altura do triângulo" 
      placeholderTextColor='#fff'
      keyboardType="numeric"
      onChangeText={(ht)=>setht(ht)}
      />

      <TextInput style={styles.input}
      placeholder ="Digite a base tringulo"
      placeholderTextColor='#fff'
      keyboardType="numeric" 
      onChangeText={(bt)=>setbt(bt)}
      />

      <TouchableOpacity style={styles.btn} onPress={Calculotriangulo}>
      <Text style={styles.textbtn}> Calcular a área do triângulo</Text>
      </TouchableOpacity> 

            <Text style={styles.paragraph}>
       Calculo da área do quadrado
      </Text>

      <TextInput style={styles.input}
      placeholder="Digite a altura do Quadrado" 
      placeholderTextColor='#fff'
      keyboardType="numeric"
      onChangeText={(h)=>seth(h)}
      />

      <TextInput style={styles.input}
      placeholder ="Digite a base Quadrado"
      placeholderTextColor='#fff'
      keyboardType="numeric" 
      onChangeText={(b)=>setb(b)}
      />

       <TouchableOpacity style={styles.btn} onPress={Calculoquadrado}>
      <Text style={styles.textbtn}>Calcular a área do quadrado </Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    marginTop: 10,
  },
  textbtn: {
    fontSize: 30,
    color: '#fff',
  },
  input: {
    fontSize: 17,
    padding: 20,
    backgroundColor: '#a0c225',
    borderRadius: 10,
    margin: 10,
  }
});
