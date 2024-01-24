import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Button from './components/button';
import ConditionalComponent from './components/ConditionalComponent';
import ListeComponent from './components/ListeComponent';
import FormComponent from './components/FormComponent';
import LoginScreen from './screens/LoginScreen';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const DashboardScreen = () => (
  <View style={styles.container}>
    <Text>Bienvenue sur le Dashboard !</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent(appName, () => App);
