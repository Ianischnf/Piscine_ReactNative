// components/FormComponent.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button as PaperButton } from 'react-native';

const FormComponent = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCoffeeButtonClick = () => {
    alert('Café prêt ! ☕');
  };

  return (
    <View>
      <Text>Formulaire :</Text>

      <TextInput
        label="Nom"
        value={nom}
        onChangeText={(text) => setNom(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        label="Prénom"
        value={prenom}
        onChangeText={(text) => setPrenom(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        label="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        label="Confirmer le mot de passe"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <PaperButton mode="contained" onPress={handleCoffeeButtonClick}>
        Faire le café ☕
      </PaperButton>
    </View>
  );
};

export default FormComponent;
