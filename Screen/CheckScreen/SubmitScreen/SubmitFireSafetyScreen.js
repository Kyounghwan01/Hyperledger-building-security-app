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
            check18 : (this.props.navigation.getParam('check18')?"적정":"불량"),
            check19 : (this.props.navigation.getParam('check19')?"적정":"불량"),
            check20 : (this.props.navigation.getParam('check20')?"적정":"불량"),
            check21 : (this.props.navigation.getParam('check21')?"적정":"불량"),
            check22 : (this.props.navigation.getParam('check22')?"적정":"불량"),
            check23 : (this.props.navigation.getParam('check23')?"적정":"불량"),
            check24 : (this.props.navigation.getParam('check24')?"적정":"불량"),
            name : this.props.navigation.getParam('name'),
            image : this.props.navigation.getParam('image'),
        }
    }
    klikPost(){
        var url = 'http://localhost:3210/Firedata';
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
          check18: this.state.check18,
          check19: this.state.check19,
          check20: this.state.check20,
          check21: this.state.check21,
          check22: this.state.check22,
          check23: this.state.check23,
          check24: this.state.check24,
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

        <Text style = {styles.textSubStyle}> 소방 점검 확인 </Text>

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
                
        <Text style = {styles.textSubStyle}>소화기</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>용기본체의 부식 유무</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check1}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>설치장소의 소화기표시 유무</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check2}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>벨브 및 패킹의 노후 및 탈락 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check3}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>노즐 등에 이물질 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check4}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>사용방법 및 적용화재 표시 유무</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check5}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>옥내.외 소화전 설비</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>소화전이 통행 또는 피난에 지장이 없고 사용할 때에 쉽게 반출할 수 있는 장소에 설치 됨의 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check6}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>소화전함, 펌프, 전동기 주위의 장애물 유무</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check7}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>소화전함, 호스, 노즐, 배관, 관부속, 밸브류등의 변형, 손상 부식 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check8}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>각 밸브의 개폐조작 용이 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check9}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>스프링쿨러, 물분무설비</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>제어밸브의 개폐, 작동, 접근 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check10}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>배관 및 헤드의 유수 유무</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check11}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>동결 또는 부식할 우려가 있는 부분에 보온, 방호조치 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check12}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>헤드주위의 작동 필요 공간이 확보 및 살수에 방해가 되는 장애물 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check13}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>자동화재탐지.비상경보설비</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>화재발생 감지기의 적정 설치 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check14}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>연기감지기의 출입구 부분이나 흡입구가 있는 실내의 부분에 설치 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check15}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>수신기 조작부 스위치 정상위치 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check16}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>피난설비</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>피난기구의 설치장소와 장치구의 적정 표시 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check17}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>피난기구 및 고정장치의 노후, 파손, 변형 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check18}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>비상구 문의 밖으로 열림 및 용이한 개방 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check19}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>통로에 피난에 방해가 되는 물건의 방치 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check20}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>옥외계단의 노후 및 파손 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check21}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>저수탱크의 파손, 누수, 동결 등으로 사용상 지장 우무</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check22}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>소화용수는 만수 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check23}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>사용에 지장이 있는 장애물 방치 여부</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check24}`}</Text>
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