import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Grid from './src/Grid';
import Navbar from './src/Navbar';

const MainNavigator = createStackNavigator(
  {
    Grid: { screen: Grid },
  },
  {
    initialRouteName: 'Grid',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return (
    <PaperProvider>
      <Navbar />
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
