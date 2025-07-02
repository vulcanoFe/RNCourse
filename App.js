import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.redBordered}>Hello world!!!</Text>
      <Button title='Tap me!' /> 
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
  redBordered: {
    borderWidth: 2,
    borderColor: 'red',
    margin: 16,
    padding: 16,
  }
});
  