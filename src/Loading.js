import React from 'react'
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native'
// import * as firebase from 'firebase'
import firebase from '@firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDE05KjBSB3HTfjdPkmddi4q351_q-3ZRg",
    authDomain: "musicapp-4a267.firebaseapp.com",
    databaseURL: "https://musicapp-4a267.firebaseio.com",
    projectId: "musicapp-4a267",
    storageBucket: "musicapp-4a267.appspot.com",
    messagingSenderId: "577893652933"
}
firebase.initializeApp(firebaseConfig)

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Login')
        })
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large"/>
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