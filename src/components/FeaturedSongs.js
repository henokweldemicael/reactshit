import React from 'react'
import {StyleSheet, Text, TextInput, View, Button, Image} from 'react-native'
import GridView from 'react-native-super-grid'
import firebase from '@firebase/app'
import {db} from '../config/db'

export default class FeaturedSongs extends React.Component {

    state = {songs: []}

    componentDidMount(){
        
        let songs = []

        db.collection("Songs").onSnapshot((songsSnapshot) => {
            songs = []
            songsSnapshot.forEach((doc)=> {
                const {songName, artistName, artworkURL} = doc.data()
                songs.push({
                    key: doc.id,
                    doc,
                    songName,
                    artistName,
                    artworkURL
                })
            })
            this.setState({songs})
        })

        // let songs = [
        //     {
        //         name: "Desiet",
        //         artist: "Abraham Afwerki",
        //         artworkURL: "https://firebasestorage.googleapis.com/v0/b/musicapp-4a267.appspot.com/o/songsStorage%2Fyh67HGFuLIqqmEPIRrpL%2Fabraham_hadera.jpg?alt=media&token=ec1beda0-887f-44b7-ae5d-d09fe37cb8aa"
        //     },
        //     {
        //         name: "Abiela",
        //         artist: "Abraham Afwerki",
        //         artworkURL: "https://firebasestorage.googleapis.com/v0/b/musicapp-4a267.appspot.com/o/songsStorage%2Fyh67HGFuLIqqmEPIRrpL%2Fabraham_hadera.jpg?alt=media&token=ec1beda0-887f-44b7-ae5d-d09fe37cb8aa"
        //     }
        // ]
        
        
    }

    render() {
        const {songs} = this.state
        return(
            <GridView
                itemDimension={130}
                items={this.state.songs}
                style={styles.gridView}
                renderItem={item => (
                    <View style={[styles.itemContainer]}> 
                        <Image source={{uri: item.artworkURL}} style={styles.artWork}></Image>
                        <Text style={styles.songName}>{item.songName}</Text>
                        <Text style={styles.artistName}>{item.artistName}</Text>
                    </View>
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    gridView: {
      paddingTop: 50,
      flex: 1
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
        backgroundColor: '#b2bec3'
    },
    songName: {
        fontSize: 16,
        fontWeight: '500'
    },
    artistName: {
        fontSize: 12,
        fontWeight: '500'
    },
    artWork: {
        width: '80%',
        height: '80%',
        resizeMode: 'cover'
    }
  }
)