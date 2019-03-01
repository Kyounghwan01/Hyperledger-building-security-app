import React from 'react';
import {Button, Text,Platform, View,StyleSheet,KeyboardAvoidingView} from 'react-native';

export default class deleteGradeScreen extends React.Component {
  static navigationOptions = {
    title: 'Delete Grade'
  }

  constructor(props) {
    super(props)
  }

  
  deleteGrade() {
    const facilityNumber = this.props.navigation.getParam('FacilityNumber');
    console.log(facilityNumber);
    return fetch(`http://192.168.190.45:3000/api/Grade/${facilityNumber}`,
      {
        headers: {
          "date": "Sat, 09 Feb 2019 13:04:27 GMT",
          "x-content-type-options": "nosniff",
          "x-download-options": "noopen",
          "x-frame-options": "DENY",
          "content-type": "application/json; charset=utf-8",
          "access-control-allow-origin": "http://192.168.190.45:3000",
          "access-control-allow-credentials": "true",
          "connection": "keep-alive",
          "vary": "Origin, Accept-Encoding",
          "x-xss-protection": "1; mode=block"
        },
        method: 'DELETE',
        body: ''
      })
  }

  render() {
    return(
      <View>
        <Button 
          title="delete"
          onPress={() => {this.deleteGrade().then(alert('삭제완료'))
            .then(() => {this.props.navigation.navigate('FlatScreen')})
          }}
        />
      </View>
    )
  }
}