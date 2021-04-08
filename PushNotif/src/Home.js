import React, { Component } from "react";
import { Text, View,Button } from 'react-native'
import { NotificationsAndroid } from 'react-naative-firebase';

export default class Home extends Component {
   componentWillMount(){
     
   }
   send(){
   
   }
   render() {
      return (
         <View>
            <Text>Hiii</Text>
            <Button title={'send'} onPress={() => this.send()} />
         </View>
      )
   }
}