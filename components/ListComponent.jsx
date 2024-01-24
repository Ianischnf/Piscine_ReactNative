// components/ListeComponent.jsx
import React from 'react';
import { View, Text } from 'react-native';

const ListeComponent = ({ liste }) => {
  return (
    <View>
      <Text>Liste des prénoms :</Text>
      <ul>
        {liste.map((item, index) => (
          <li key={index}>{item.prenom}</li>
        ))}
      </ul>
    </View>
  );
};

export default ListeComponent;
