import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  

  return (

    <View style={styles.container}>
      <Text style={styles.text2}>Você clicou</Text>
      <Text style={styles.text}>Contador: {count}</Text>
      
      <TouchableHighlight
        style={styles.button} onPress={() => { incrementCount() }}>
        <Text
          style={{ color: '#fff', fontSize: 15 }}>
          Clique aqui!
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  text2:{
fontSize: 24,
margin:100,




  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    backgroundColor: '#6676f1',
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    bottom: 50,
  },
  
});

export default App;
