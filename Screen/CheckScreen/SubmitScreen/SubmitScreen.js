import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SimpleLineIcons } from  '@expo/vector-icons';
import axios from 'axios';

export default class SubmitScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      facilityNumber: this.props.navigation.getParam('facilityNumber'),
      day: (this.props.navigation.getParam('day')).format("YYYY년 MM월 DD일 HH시 mm분"),
      check1: (this.props.navigation.getParam('check1')?"적정":"불량"),
      check2: (this.props.navigation.getParam('check2')?"적정":"불량"),
      check3: (this.props.navigation.getParam('check3')?"적정":"불량"),
      check4: (this.props.navigation.getParam('check4')?"적정":"불량"),
      check5: (this.props.navigation.getParam('check5')?"적정":"불량"),
      check6: (this.props.navigation.getParam('check6')?"적정":"불량"),
      check7: (this.props.navigation.getParam('check7')?"적정":"불량"),
      check8: (this.props.navigation.getParam('check8')?"적정":"불량"),
      check9: (this.props.navigation.getParam('check9')?"적정":"불량"),
      check10: (this.props.navigation.getParam('check10')?"적정":"불량"),
      check11: (this.props.navigation.getParam('check11')?"적정":"불량"),
      check12: (this.props.navigation.getParam('check12')?"적정":"불량"),
      check13: (this.props.navigation.getParam('check13')?"적정":"불량"),
      check14: (this.props.navigation.getParam('check14')?"적정":"불량"),
      name : this.props.navigation.getParam('name'),
      image : this.props.navigation.getParam('image'),
    }
  }

  klikPost(){
    var url = 'http://localhost:3210/Gasdata';
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
      name:this.state.name,
      day:this.state.day,
      image:this.state.image
    })
    .then(function (response) {
      
    })
    .catch(function (error) {
      
    });
    console.log(this.state.day)
    this.props.navigation.navigate('CheckNaviScreen');
    this.setState({buttonColor: false});
  };
    
  _onButtonPressUpdateGrade=()=>{
    alert('제출 완료')
    this.props.navigation.navigate('CheckNaviScreen');
    this.setState({buttonColor: false});
    console.log(this.state.facilityNumber);
  }
    
  render() {
    return (
      <ScrollView>
        <View style = {{alignItems:'center',justifyContent:'center'}}>
          <Image source = {{ uri: this.state.image }} style = {{ width: 375, height: 210}} />
        </View>

        <Text style = {styles.textSubStyle}> 가스 점검 확인 </Text>

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
                
        <Text style = {styles.textSubStyle}>가스 시설</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>가스 누설 경보기 설치 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check1}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>용기, 배관, 밸브 및 연소기의 파손. 변형. 노후 또는 부식 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check2}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>방화 환경조성 및 주의, 경고 표시 부착 및 파손 부분 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check3}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>가스용기 관리상태 및 가연성물질 방치 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check4}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>가스차단기, 경보기 등 정상작동 여부부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check5}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>가스기기 이용실태 및 시설기준 적정여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check6}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>가스보일러의 흡,배기구시설 설치 상태</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check7}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>가스용기의 저장 지하실 환기 및 관리상태 확인</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check8}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>가스사용 시설에 대한 정기 안전점검 실시 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check9}`}</Text> 
        </View>

        <Text style = {styles.textSubStyle}>방화 시설</Text>
        
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>내장재의 불연화 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check10}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상구의 폐쇄 또는 다목적으로 사용 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check11}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상용 승강기의 적법 설치 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check12}`}</Text>                    
        </View>

        <Text style = {styles.textSubStyle}>위험물 저장취급 시설</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>불필요한 가연물의 방치 여부</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check13}`}</Text>                    
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>차광 및 환기 설비 이상 유무</Text>
            <Text style = {styles.textCheck1Style}>{`${this.state.check14}`}</Text>                    
        </View>

        <View style = {{ margin: 20, alignItems: 'center'}}>
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