import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableOpacity} from 'react-native'
// import firebase from 'firebase'
import firebase from '@firebase/app'
import '@firebase/auth'
import i18n from './i18n'
import TrackPlayer from 'react-native-track-player';

import FeaturedSongs from './components/FeaturedSongs'


export default class Main extends React.Component {
  state = { currentUser: null, 
            language: "en",
            toggle: true
          }

  
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  componentWillMount() {

    TrackPlayer.setupPlayer().then(async () => {
        await TrackPlayer.add({
          id: 'trackId',
          url: "https://firebasestorage.googleapis.com/v0/b/musicapp-4a267.appspot.com/o/Abraham%20Afewerki%20-%20Nay%20Mebtsea%20Desiet.mp3?alt=media&token=2fdaf7be-98cf-4a34-ab9b-8357bfa0e375",
          title: 'Track Title',
          artist: 'Track Artist',
          artwork: require('./sample.jpeg')
        })
        //TrackPlayer.play();
    })

  }


  handleLogout = () => {
    firebase.auth().signOut()
    .then(()=>this.props.navigation.navigate('Login'))
    .catch(error => this.setState({errorMessage: error.message}))
  }

  handleLanguageChange = (lang) => {
    i18n.locale = lang
  }
  playerToggle() {
    const newButtonState = !this.state.toggle
    this.setState({toggle: newButtonState})
    this.state.toggle?TrackPlayer.play():TrackPlayer.pause()
  }
  render() {
    const { currentUser } = this.state
    const { toggle } = this.state
    const playButtonText = toggle?i18n.t('play'):i18n.t('pause')
    return (
      <View style={styles.container}>
        {/* <Text>
        {i18n.t('welcome_message')} {currentUser && currentUser.email}!
        </Text>
        <TouchableOpacity onPress={() => this.playerToggle()}>
          <Text>{playButtonText}</Text>
        </TouchableOpacity> */}
        <FeaturedSongs/>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});