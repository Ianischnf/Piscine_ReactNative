// screens/LoginScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button as PaperButton, ActivityIndicator, ProgressBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // Mettre la screen en état de chargement
    setLoading(true);

    // Simulation d'une tâche asynchrone (connexion)
    setTimeout(() => {
      // Fin de la tâche asynchrone
      setLoading(false);

      // Rediriger vers la page "dashboard"
      navigation.navigate('Dashboard');
    }, 2000); // Exemple: Tâche de 2 secondes (vous pouvez remplacer par votre propre logique de connexion avec une API)
  };

  const handleSignup = () => {
    // Logique d'inscription ici (non implémentée pour l'exercice)
    // Vous pouvez ajouter votre propre logique d'inscription avec une API, etc.
  };

  return (
    <View>
      <Text>Formulaire de Connexion :</Text>

      <TextInput
        label="Email"
        placeholder="Saisissez votre email"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        label="Mot de passe"
        placeholder="Saisissez votre mot de passe"
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      {loading ? (
        // Afficher une ProgressBar pendant la tâche de connexion
        <ProgressBar indeterminate={true} />
      ) : (
        // Afficher les champs de saisie et les boutons si la page n'est pas en chargement
        <>
          <PaperButton mode="contained" onPress={handleLogin}>
            Connexion
          </PaperButton>

          <Text>Vous n'avez pas de compte ?</Text>
          <PaperButton onPress={handleSignup}>Inscription</PaperButton>
        </>
      )}
    </View>
  );
};

export default LoginScreen;
