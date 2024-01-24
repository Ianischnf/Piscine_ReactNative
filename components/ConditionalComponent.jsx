// components/ConditionalComponent.jsx
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

const ConditionalComponent = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <View>
      <Button label="Toggle Content" color="#e74c3c" onClick={toggleContent} />

      {/* Utilisation d'un Modal pour afficher/masquer une partie du contenu */}
      <Modal visible={showContent} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Contenu du Modal</Text>
          <Button label="Fermer" color="#e74c3c" onClick={toggleContent} />
        </View>
      </Modal>

      {/* Le reste du contenu qui est toujours visible même si le Modal est masqué */}
      <View style={{ padding: 20 }}>
        <Text>Contenu toujours visible</Text>
      </View>
    </View>
  );
};

export default ConditionalComponent;
