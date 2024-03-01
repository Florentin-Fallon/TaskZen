import React from 'react';
import { Button, View } from 'react-native';

function Ville({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Retour à Accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}

export default Ville;
