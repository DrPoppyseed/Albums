import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

// create a component
const App = () => (
	<Header />
);

// render it to the screen of the device
AppRegistry.registerComponent('albums', () => App);
