import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBMzks41qcwcPX_qbw2QQfPbhLp-PEo2cs",
      authDomain: "auth-a8b8a.firebaseapp.com",
      databaseURL: "https://auth-a8b8a.firebaseio.com",
      projectId: "auth-a8b8a",
      storageBucket: "auth-a8b8a.appspot.com",
      messagingSenderId: "393931736183",
      appId: "1:393931736183:web:ae0438adbb3aa95b"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    marginTop: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
