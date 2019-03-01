import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default class SubmitScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            facilityNumber: this.props.navigation.getParam('facilityNumber'),
            day:(this.props.navigation.getParam('day')).format("YYYY년 MM월 DD일 HH시 mm분"),
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
            check15: (this.props.navigation.getParam('check15')?"적정":"불량"),
            check16: (this.props.navigation.getParam('check16')?"적정":"불량"),
            check17: (this.props.navigation.getParam('check17')?"적정":"불량"),
            check18: (this.props.navigation.getParam('check18')?"적정":"불량"),
            check19: (this.props.navigation.getParam('check19')?"적정":"불량"),
            name: this.props.navigation.getParam('name'),
            image: this.props.navigation.getParam('image'),
        }
    }
    klikPost(){
        var url = 'http://localhost:3210/Buildingdata';
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
        this.props.navigation.navigate('FlatScreen');}

  render() {
    return (
      <ScrollView>
        <View style = {{alignItems:'center',justifyContent:'center'}}>
          <Image source = {{ uri: this.state.image }} style = {{ width: 375, height: 210}} />
        </View>

        <Text style = {styles.textSubStyle}> 건물 점검 확인 </Text>

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
          
          
        <Text style = {styles.textSubStyle}>지반 상태</Text>

        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>{`시설물 주변의 지반 침하 또는 이로 인한 건물의 기욺, 균열 유무 : $this.state.{check1}`}</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check1}`}</Text>                     
        </View>

          
        <Text style = {styles.textSubStyle}>구조 부재</Text>
          
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>주요 구조부재에 균열, 누수 및 누수흔적이 발생 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check2}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>구조부재의 처짐, 기욺, 또는 단면 손실 등의 변형 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check3}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>철근 부식, 노출 또는 콘크리트의 박리.박락 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check4}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>철골부재의 접합부 볼트 풀림, 누락, 탈락, 용접불량 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check5}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>철골부재의 기욺, 좌굴 등의 변형 손상 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check6}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>철골부재에 부식에 의한 단면 결손 등의 손상 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check7}`}</Text>                     
        </View>

          
        <Text style = {styles.textSubStyle}>비구조부재</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>내부 칸막이벽에 균열 및 변형 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check8}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>천장, 벽체, 바닥 마감재 파손, 오염, 변형, 누수 및 누수흔적 유무</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check9}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>외부 마감재 및 처마의 오염, 손상, 탈락, 균열 유무 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check10}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>옥상, 지붕 방수층의 상태는 양호한가</Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check11}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>옥상 난간의 과도한 균열, 변형 발생 및 난간 높이는 적절한가 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check12}`}</Text>                     
        </View>

        <Text style = {styles.textSubStyle}>주 출입구</Text>
  
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>캐노피 부재의 지지상태 불량, 기욺, 처짐, 등의 변형 유무 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check13}`}</Text>                     
        </View>
          
        <Text style = {styles.textSubStyle}>창호</Text>
      
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>칭호가 낮게 설치된 경우 추락 방지를 위한 조치 유무 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check14}`}</Text>                     
        </View>

        <Text style = {styles.textSubStyle}>재난 대비</Text>
    
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>재해 발생 시 피난 통로 시설의 상태 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check15}`}</Text>                     
        </View>

        <Text style = {styles.textSubStyle}>이동통로</Text>
    
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>이동통로에서 미끄러짐에 의한 안전사고 발생 우려 유무 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check16}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>난간의 고정상태는 양호한가 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check17}`}</Text>                     
        </View>

        <Text style = {styles.textSubStyle}>기타</Text>
        
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>추락, 낙하에 의한 안전사고가 발생할 수 있는 위험요소 유무 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check18}`}</Text>                     
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>물품 적치로 건축물에 과도한 적재하중이 작용되는 곳이 있는가 </Text>
          <Text style = {styles.textCheck1Style}>{`${this.state.check19}`}</Text>                     
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