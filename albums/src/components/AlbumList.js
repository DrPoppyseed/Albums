import React, { Component } from 'react';
import {Views} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails.js';

class AlbumList extends Component {
  state = {albums: []};

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} albumData={album}/>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
