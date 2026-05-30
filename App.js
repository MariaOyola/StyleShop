import AppNavigation from './navigation/AppNavigation';

export default function App() {
  return <AppNavigation /> ;
}


/*

import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';

const icon = require('./assets/hola.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mariana</Text>

      <Image
        source={icon}
        style={{ width: 200, height: 200 }}
      />

      <Button
        title="Presióname"
        onPress={() => Alert.alert('Botón funcionando')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

*/ 

