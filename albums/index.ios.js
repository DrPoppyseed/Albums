import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// render it to the screen of the device
AppRegistry.registerComponent('albums', () => App);
