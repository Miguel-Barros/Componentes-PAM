import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Titulo from './components/component';

export default function App() {
  return (
    <View style={styles.index}>
      <StatusBar style="auto" />
      <View style={styles.box}>
        <Titulo/>
        <Text style={styles.h2}>Primeiro valor: </Text><TextInput style={styles.input} placeholder='Insira o primeiro valor'/>
        <Text style={styles.h2}>Segundo valor: </Text><TextInput  style={styles.input}placeholder='Insira o segundo valor'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    width: '80vw',
    height: '50vh',
    borderRadius: 50,
    padding: '5%',
    borderWidth: '1px',
    borderColor: '#f24fcb',
  },
  h2: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center'
  },
  input: {
    borderWidth: .5,
    fontSize: 18,
    borderRadius: 12,
    height: '5vh'
  }
});
