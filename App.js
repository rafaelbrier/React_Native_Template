import { Font } from 'expo';
import React from 'react';
import AppRouter from './src/AppNavigator';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

   async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
      
    });
    this.setState({ fontLoaded: true });
  }
  
  render() {
    return (
             this.state.fontLoaded ? (<AppRouter />) : null
    );
  }
}