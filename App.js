import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>etec profesor milton</Text>
      <Text style={styles.italicText}>3º série</Text>
      <Text style={{ textDecorationLine: 'line-through' }}>Texto Riscado</Text>    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  italicText: {
    fontStyle: 'italic',
  },
});
