import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Picker} from 'react-native'
// import firebase from 'firebase'
import firebase from '@firebase/app'
import '@firebase/auth'
import i18n from './i18n'
//import TrackPlayer from 'react-native-track-player';

export default class Main extends React.Component {
  state = { currentUser: null, language: "en" }

  
  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  handleLogout = () => {
    firebase.auth().signOut()
    .then(()=>this.props.navigation.navigate('Login'))
    .catch(error => this.setState({errorMessage: error.message}))
  }

  handleLanguageChange = (lang) => {
    i18n.locale = lang
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
        {i18n.t('welcome_message', {language: i18n.currentLocale()})} {currentUser && currentUser.email}!
        </Text>

        {/* TrackPlayer.setupPlayer().then(() => {
          TrackPlayer.add({
            id: 'trackId',
            url: require('./soul.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('./sample.jpeg')
        })
        });

        TrackPlayer.play(); */}

        {/* "https://firebasestorage.googleapis.com/v0/b/musicapp-4a267.appspot.com/o/Abraham%20Afewerki%20-%20Nay%20Mebtsea%20Desiet.mp3?alt=media&token=2fdaf7be-98cf-4a34-ab9b-8357bfa0e375" */}

        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})