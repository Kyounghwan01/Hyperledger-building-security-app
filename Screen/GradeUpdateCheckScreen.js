import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class GradeUpdateCheckScreen extends Component {
  static navigationOptions = {
    title: '등급 제출 확인',
    headerTitleStyle: { flex: 1,
      textAlign: 'center'
    }
  }
  
  QueryGrade = (x) => {
    if(x == 'Green') {
      return require('../assets/icSelectGreen.png')
    } else if(x == 'Yellow') {
      return require('../assets/icSelectYellow.png')
    } else {
      return require('../assets/icSelectRed.png')
    }
  }

  render() {
    const updated_safetycheck_date = this.props.navigation.getParam('updated_safetycheck_date');
    const updated_Electricity = this.props.navigation.getParam('updated_Electricity');
    const updated_Gas = this.props.navigation.getParam('updated_Gas');
    const updated_Elevator = this.props.navigation.getParam('updated_Elevator');
    const updated_Building = this.props.navigation.getParam('updated_Building');
    const updated_FireSafety = this.props.navigation.getParam('updated_FireSafety');

    return (
      <View style={styles.container}>
        <Text style = {styles.textSubStyle}>등급 제출 확인</Text>
        <View style ={{flexDirection: 'row', marginTop: 53}}>
          <Text style = {styles.textStyle}>설정일</Text>
          <Text style = {styles.textStyle}>{updated_safetycheck_date}</Text>
        </View>
        <View style ={{flexDirection: 'row', marginTop: 53}}>
          <Text style = {styles.textStyle}>가  스</Text>
          <View style = {{width: 153, alignItems: 'center'}}>
            <Image source = {this.QueryGrade(updated_Gas)} />
          </View>
        </View>
        <View style ={{flexDirection: 'row', marginTop: 53}}>
          <Text style = {styles.textStyle}>전  기</Text>
          <View style = {{width: 153, alignItems: 'center'}}>
            <Image source = {this.QueryGrade(updated_Electricity)} />
          </View>
        </View>
        <View style ={{flexDirection: 'row', marginTop: 53}}>
          <Text style = {styles.textStyle}>승강기</Text>
          <View style = {{width: 153, alignItems: 'center'}}>
            <Image source = {this.QueryGrade(updated_Elevator)} />
          </View>
        </View>
        <View style ={{flexDirection: 'row', marginTop: 53}}>
          <Text style = {styles.textStyle}>빌  딩</Text>
          <View style = {{width: 153, alignItems: 'center'}}>
            <Image source = {this.QueryGrade(updated_Building)} />
          </View>
        </View>
        <View style ={{flexDirection: 'row', marginTop: 53}}>
          <Text style = {styles.textStyle}>소  방</Text>
          <View style = {{width: 153, alignItems: 'center'}}>
            <Image source = {this.QueryGrade(updated_FireSafety)} />
          </View>
        </View>

        <View style = {{ marginTop: 40, alignItems: 'center'}}>
          <TouchableOpacity
            style = {styles.btnStyle}
            onPress={() => {this.props.navigation.navigate('FlatScreen')}}
          >
            <Text style = {styles.btnTextStyle}>홈으로</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  textStyle: {
    width: 153,
    // height: 16,
    // fontFamily: "AppleSDGothicNeo",
    textAlign: 'center',
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  // UpdatedGrade: {
  //   fontSize: 30,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // UpdatedGradeState:{
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  //   fontSize: 15
  // },
  textSubStyle: {
    marginTop: 60,
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    textAlignVertical: 'center', 
    textAlign: 'center'
  },
  btnTextStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
  btnStyle: {
    width: 320,
    height: 52,
    justifyContent: 'center', 
    borderRadius: 2,
    backgroundColor: 'rgb(111, 155, 248)'
  }
});