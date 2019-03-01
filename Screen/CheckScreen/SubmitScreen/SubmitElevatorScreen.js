import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default class SubmitScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      facilityNumber: this.props.navigation.getParam('facilityNumber'),
      check1:(this.props.navigation.getParam('check1')?"적정":"불량"),
      day:(this.props.navigation.getParam('day')).format("YYYY년 MM월 DD일 HH시 mm분"),
      check2 : (this.props.navigation.getParam('check2')?"적정":"불량"),
      check3 : (this.props.navigation.getParam('check3')?"적정":"불량"),
      check4 : (this.props.navigation.getParam('check4')?"적정":"불량"),
      check5 : (this.props.navigation.getParam('check5')?"적정":"불량"),
      check6 : (this.props.navigation.getParam('check6')?"적정":"불량"),
      check7 : (this.props.navigation.getParam('check7')?"적정":"불량"),
      check8 : (this.props.navigation.getParam('check8')?"적정":"불량"),
      check9 : (this.props.navigation.getParam('check9')?"적정":"불량"),
      check10 : (this.props.navigation.getParam('check10')?"적정":"불량"),
      check11 : (this.props.navigation.getParam('check11')?"적정":"불량"),
      check12 : (this.props.navigation.getParam('check12')?"적정":"불량"),
      check13 : (this.props.navigation.getParam('check13')?"적정":"불량"),
      check14 : (this.props.navigation.getParam('check14')?"적정":"불량"),
      check15 : (this.props.navigation.getParam('check15')?"적정":"불량"),
      check16 : (this.props.navigation.getParam('check16')?"적정":"불량"),
      check17 : (this.props.navigation.getParam('check17')?"적정":"불량"),
      name : this.props.navigation.getParam('name'),
      image : this.props.navigation.getParam('image'),
    }
  }
  klikPost(){
    var url = 'http://localhost:3210/Elevatordata';
    axios.post(url, {
      facilityNumber: this.state.facilityNumber,
      check1: this.state.check1,
      check2: this.state.check2,
      check3: this.state.check3,
      check4: this.state.check4,
      check5: this.state.check5,
      check6: this.state.check6,
      check7: this.state.check7,
      check8: this.state.check8,
      check9: this.state.check9,
      check10: this.state.check10,
      check11: this.state.check11,
      check12: this.state.check12,
      check13: this.state.check13,
      check14: this.state.check14,
      check15: this.state.check15,
      check16: this.state.check16,
      check17: this.state.check17,
      name:this.state.name,
      day:this.state.day,
      image:this.state.image
    })
    .then(function (response) {
      
    })
    .catch(function (error) {
      
    });
    alert('제출 완료');
    this.props.navigation.navigate('CheckNaviScreen');
    this.setState({buttonColor: false});
  };   

  render() {
    return (
      <ScrollView>
        <View style = {{alignItems:'center',justifyContent:'center'}}>
          <Image source = {{ uri: this.state.image }} style = {{ width: 375, height: 210}} />
        </View>

        <Text style = {styles.textSubStyle}> 승강기 점검 확인 </Text>

        <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style = {styles.textStyle}>건물 번호 :</Text>
            <Text style = {styles.text1Style}>{`${this.state.facilityNumber}`}</Text>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style = {styles.textStyle}>점검자 명 :</Text>
            <Text style = {styles.text1Style}>{`${this.state.name}`}</Text>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style = {styles.textStyle}>점  검  일 :</Text>
            <Text style = {styles.text1Style}>{`${this.state.day}`}</Text>
        </View>
                
        <Text style = {styles.textSubStyle}>작동 상태 확인</Text>
        
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상 및 작동시험을 위한 운전 및 내부통화시스템</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check1}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>문닫힘안전장치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check2}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>승강장문 잠금장치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check3}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>상승 과속 방지수단</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check4}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>완충기</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check5}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>파이널 리미트 스위치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check6}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>전동기 구동시간 제한 장치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check7}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상운전</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check8}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상통화장치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check9}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>상통화장치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check10}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>상운전 제어</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check11}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>이 개방된 상태의 착상 및 재-착상의 제어</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check12}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>검운전 제어</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check13}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>킹운전 제어</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check14}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>지장치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check15}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>킹운전</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check16}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>기안전장치</Text> 
            <Text style = {styles.textCheck1Style}>{`${this.state.check17}`}</Text>
        </View>

        <View style = {{ marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            style = {[styles.btnStyle, 
              {backgroundColor : (this.state.buttonColor) ? '#c8c8c8' : 'rgb(111, 155, 248)'}]}
              onPress={()=>this.klikPost()}
          >
            <Text style = {styles.btnTextStyle}>확인 제출</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    width: 100,
    // height: 18,
    // fontFamily: "NotoSans",
    marginLeft: 100,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  text1Style: {
    width: 200,
    // height: 18,
    // fontFamily: "NotoSans",
    marginLeft: 20,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  textCheckStyle: {
    width: '70%', 
    height: 35, 
    marginLeft: 5,
    textAlignVertical: 'center',
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  textCheck1Style: {
    width: 30, 
    height: 35, 
    marginLeft: 5,
    textAlignVertical: 'center',
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  viewCheckStyle: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textSubStyle: {
    marginTop: 5,
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
    borderRadius: 2
  }
});