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
            name : this.props.navigation.getParam('name'),
            image : this.props.navigation.getParam('image'),
        }
    }
    klikPost(){
        var url = 'http://localhost:3210/Electricdata';
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
    _onButtonPressUpdateGrade=()=>{
        alert('제출 완료')
        this.props.navigation.navigate('FlatScreen');}

  render() {
    return (
      <ScrollView>
        <View style = {{alignItems:'center',justifyContent:'center'}}>
          <Image source = {{ uri: this.state.image }} style = {{ width: 375, height: 210}} />
        </View>

        <Text style = {styles.textSubStyle}> 전기 점검 확인 </Text>

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
                
        <Text style = {styles.textSubStyle}>변압기</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>붓싱 등 애자류 균열, 파손, 단자 접속 사애 점검 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check1}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>차단기</Text>
    
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>접속상태, 변색, 균열 점검 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check2}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>계전기</Text>
    
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>외관의 파손, 오손 상태 점검 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check3}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>동작표시기 작동여부 확인 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check4}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>동작치(TAP) 설정의 적정 여부 확인 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check5}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>드주위의 작동 필요 공간이 확보 및 살수에 방해가 되는 장애물 여부 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check6}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>전선로 및 고압모선</Text>

        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>충전부와의 이격거리 점검 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check7}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>케이블 및 부스터의 지지대 파손, 오손 상태 점검 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check8}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>접속상태 및 변색, 균열, 열화, 상태 점검 </Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check9}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>고압기기</Text>
  
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>각 기기 설치상태 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check10}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>전력퓨즈 부착상태 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check11}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>각 변상기 외관 상태 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check12}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>접속상태, 변색, 균열 여부, 외관 변형상태 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check13}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>수.배전관</Text>
    
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>외관 상태 및 잠금 장치 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check14}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>수.배전반의 최소 공간거리 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check15}`}</Text>
        </View>

        <Text style = {styles.textSubStyle}>저압</Text>
      
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>변압기 2차 선로에서 배전반까지의 배선, 기기 접촉 불량, 파열 상태 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check16}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>배선상태, 배선 굵기 및 배선 종류의 적정 여부 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check17}`}</Text>
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>배선용 차단기 선정의 적정여부, 누전차단기 부설상태 점검</Text>                    
          <Text style = {styles.textCheck1Style}>{`${this.state.check18}`}</Text>
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