import React ,{Component} from 'react';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {MaterialCommunityIcons,Ionicons} from  '@expo/vector-icons';
import { Constants, ImagePicker, Permissions } from 'expo';
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class FireSafetyCheckScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            updateday: '',
            error: '',
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6:false,
            checked7:false,
            checked8:false,
            checked9:false,
            checked10:false,
            checked11:false,
            checked12:false,
            checked13:false,
            checked14:false,
            checked15:false,
            checked16:false,
            checked17:false,
            checked18:false,
            checked19:false,
            checked20:false,
            checked21:false,
            checked22:false,
            checked23:false,
            checked24:false,
            buttonColor: false,
            facilityNumber: this.props.navigation.getParam('facilityNumber_param'),
            name_db: this.props.navigation.getParam('name_db')
        }
    }

    state = {
        isDateTimePickerVisible: false,
        image: null
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });

        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
        this._hideDateTimePicker();
        var day = moment(date);
        this.setState({
            day: day
        })
    };
    
    _username = (name) => {
        this.setState({ name });
    }

    _updateday = (updateday) => {
        this.setState({ updateday });
    }

  _onButtonPress = () => {
    if(this.state.day == null){
      alert("점검일을 지정 하시오")
    } else if(this.state.name == null){
      alert('이름을 저장 하시오')
    } else if(this.state.image == null){
      alert('사진을 등록 하시오')
    } else if(this.state.buttonColor == true){
      alert('이미 제출하였습니다')
    } else{
      this.setState({buttonColor: true});
      this.props.navigation.navigate('SubmitFireSafetyScreen', {
        facilityNumber: this.state.facilityNumber,
        day: this.state.day,
        check1:this.state.checked1,
        check2:this.state.checked2,
        check3:this.state.checked3,
        check4:this.state.checked4,
        check5:this.state.checked5,
        check6:this.state.checked6,
        check7:this.state.checked7,
        check8:this.state.checked8,
        check9:this.state.checked9,
        check10:this.state.checked10,
        check11:this.state.checked11,
        check12:this.state.checked12,
        check13:this.state.checked13,
        check14:this.state.checked14,
        check15:this.state.checked15,
        check16:this.state.checked16,
        check17:this.state.checked17,
        check18:this.state.checked18,
        check19:this.state.checked19,
        check20:this.state.checked20,
        check21:this.state.checked21,
        check22:this.state.checked22,
        check23:this.state.checked23,
        check24:this.state.checked24,
        name : this.state.name,
        image : this.state.image,
      });
    }
  }

    render() {
      let { image } = this.state;
      return (
        <ScrollView>
          <TouchableOpacity 
            style = {{alignItems: 'center'}}
            onPress = {this._pickImage}>
            <View style = {{
              width: 375, height: 210, backgroundColor: '#dbdbdb',
              justifyContent: 'center', alignItems: 'center'
            }}>
              {image && <Image source={{ uri: image }} style={{ width: 375, height: 210 }}/>}
              <Image 
                source = {require('../../assets/rectangle4.png')}
              />
              <Image
                source = {require('../../assets/icAddPhoto.png')}
                // size = {30}
                style = {{top: 50, marginLeft: 325,
                  // position: 'absolute',  Right: 30, Left: 165,  top: 115, justifyContent: 'center',  alignItems: 'center'
                }}
              />
            </View>
          </TouchableOpacity>
          <Text style = {styles.text1Style}>사진은 최대 8장까지 가능합니다.</Text>
  
          <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 45}}>
            <Text style = {styles.textStyle}>건물 번호: </Text>
            <TouchableOpacity style = {styles.textInputStyle}>
              <Text style = {styles.textStyle}>{`${this.state.facilityNumber}`}</Text>
            </TouchableOpacity>
          </View>
  
          <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style = {styles.textStyle}>점검자 명: </Text>
            <Text style = {styles.textInputStyle}>
             <Text style = {styles.textStyle}>{` ${this.state.name_db}`}</Text>
            </Text>
          </View>
  
          <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style = {styles.textStyle}>점검 일시 :</Text>
            <TouchableOpacity style = {styles.textInput2Style} onPress={this._showDateTimePicker}>
              {(this.state.day) ?
                <Text>{this.state.day.format('YYYY[년] MM[월] DD[일]')}</Text>
                : <Text style = {styles.textStyle}>날짜를 선택하시오</Text>
              }
              <Image 
                source = {require('../../assets/6A.png')}
                style = {{margin: 10}}
              />
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
          </View>
  
          <Text style = {styles.textSubStyle}>소화기</Text>
  
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>용기본체의 부식 유무</Text>
              <CheckBox
                title = {(this.state.checked1) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked = {this.state.checked1}
                onPress = {() => this.setState({checked1: !this.state.checked1})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>설치장소의 소화기표시 유무</Text>
              <CheckBox
                title = {(this.state.checked2) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked = {this.state.checked2}
                onPress = {() => this.setState({checked2: !this.state.checked2})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>벨브 및 패킹의 노후 및 탈락 여부</Text>
              <CheckBox
                title={(this.state.checked3) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked3}
                onPress={() => this.setState({checked3: !this.state.checked3})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>노즐 등에 이물질 여부</Text>
              <CheckBox
                title={(this.state.checked4) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked4}
                onPress={() => this.setState({checked4: !this.state.checked4})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>사용방법 및 적용화재 표시 유무</Text>
              <CheckBox
                title={(this.state.checked5) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked5}
                onPress={() => this.setState({checked5: !this.state.checked5})}
              />
          </View>

          <Text style = {styles.textSubStyle}>옥내.외 소화전 설비</Text>

          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>소화전이 통행 또는 피난에 지장이 없고 사용할 때에 쉽게 반출할 수 있는 장소에 설치 됨의 여부</Text>
              <CheckBox
                title={(this.state.checked6) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked6}
                onPress={() => this.setState({checked6: !this.state.checked6})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>소화전함, 펌프, 전동기 주위의 장애물 유무</Text>
              <CheckBox
                title={(this.state.checked7) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked7}
                onPress={() => this.setState({checked7: !this.state.checked7})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>소화전함, 호스, 노즐, 배관, 관부속, 밸브류등의 변형, 손상 부식 여부</Text>
              <CheckBox
                title={(this.state.checked8) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked8}
                onPress={() => this.setState({checked8: !this.state.checked8})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>각 밸브의 개폐조작 용이 여부</Text>
              <CheckBox
                title={(this.state.checked9) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked9}
                onPress={() => this.setState({checked9: !this.state.checked9})}
              />
          </View>

          <Text style = {styles.textSubStyle}>스프링쿨러, 물분무설비</Text>

          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>제어밸브의 개폐, 작동, 접근 여부</Text>
              <CheckBox
                title={(this.state.checked10) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked10}
                onPress={() => this.setState({checked10: !this.state.checked10})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>배관 및 헤드의 유수 유무</Text>
              <CheckBox
                title={(this.state.checked11) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked11}
                onPress={() => this.setState({checked11: !this.state.checked11})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>동결 또는 부식할 우려가 있는 부분에 보온, 방호조치 여부</Text>
              <CheckBox
                title={(this.state.checked12) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked12}
                onPress={() => this.setState({checked12: !this.state.checked12})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>헤드주위의 작동 필요 공간이 확보 및 살수에 방해가 되는 장애물 여부</Text>
              <CheckBox
                title={(this.state.checked13) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked13}
                onPress={() => this.setState({checked13: !this.state.checked13})}
              />
          </View>

          <Text style = {styles.textSubStyle}>자동화재탐지.비상경보설비</Text>

          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>화재발생 감지기의 적정 설치 여부</Text>
              <CheckBox
                title={(this.state.checked14) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked14}
                onPress={() => this.setState({checked14: !this.state.checked14})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>연기감지기의 출입구 부분이나 흡입구가 있는 실내의 부분에 설치 여부</Text>
              <CheckBox
                title={(this.state.checked15) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked15}
                onPress={() => this.setState({checked15: !this.state.checked15})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>수신기 조작부 스위치 정상위치 여부</Text>
              <CheckBox
                title={(this.state.checked16) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked16}
                onPress={() => this.setState({checked16: !this.state.checked16})}
              />
          </View>

          <Text style = {styles.textSubStyle}>피난설비</Text>

          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>피난기구의 설치장소와 장치구의 적정 표시 여부</Text>
              <CheckBox
                title={(this.state.checked17) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked17}
                onPress={() => this.setState({checked17: !this.state.checked17})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>피난기구 및 고정장치의 노후, 파손, 변형 여부</Text>
              <CheckBox
                title={(this.state.checked18) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked18}
                onPress={() => this.setState({checked18: !this.state.checked18})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>비상구 문의 밖으로 열림 및 용이한 개방 여부</Text>
              <CheckBox
                title={(this.state.checked19) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked19}
                onPress={() => this.setState({checked19: !this.state.checked19})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>통로에 피난에 방해가 되는 물건의 방치 여부</Text>
              <CheckBox
                title={(this.state.checked20) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked20}
                onPress={() => this.setState({checked20: !this.state.checked20})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>옥외계단의 노후 및 파손 여부</Text>
              <CheckBox
                title={(this.state.checked21) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked21}
                onPress={() => this.setState({checked21: !this.state.checked21})}
              />
          </View>

          <Text style = {styles.textSubStyle}>소화용수설비</Text>

          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>저수탱크의 파손, 누수, 동결 등으로 사용상 지장 우무</Text>
              <CheckBox
                title={(this.state.checked22) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked22}
                onPress={() => this.setState({checked22: !this.state.checked22})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>소화용수는 만수 여부</Text>
              <CheckBox
                title={(this.state.checked23) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked23}
                onPress={() => this.setState({checked23: !this.state.checked23})}
              />
          </View>
          <View style={styles.viewCheckStyle}>
              <Text style = {styles.textCheckStyle}>사용에 지장이 있는 장애물 방치 여부</Text>
              <CheckBox
                title={(this.state.checked24) ? '적정' : '불량'}
                iconRight
                checkedColor = 'rgb(44, 98, 210)'
                checked={this.state.checked24}
                onPress={() => this.setState({checked24: !this.state.checked24})}
              />
          </View>
  
          <View style = {{ marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            style = {[styles.btnStyle, 
              {backgroundColor : (this.state.buttonColor) ? '#c8c8c8' : 'rgb(111, 155, 248)'}]}
            onPress = {this._onButtonPress}
          >
            <Text style = {styles.btnTextStyle}>제출</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textSubStyle}>
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </View>
      </ScrollView>
    );
  }
}
  

const styles = StyleSheet.create({
  textStyle: {
    // width: 49,
    // height: 18,
    // fontFamily: "NotoSans",
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  text1Style: {
    // width: 129,
    // height: 14,
    // fontFamily: "NotoSans",
    marginTop: 8,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#a6a6a6"
  },
  text2Style: {
    width: 300,
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
    width: '60%', 
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
  textInputStyle: {
    width: 215, 
    height: 30, 
    marginLeft: 27, 
    backgroundColor: 'rgb(248, 248, 248)', 
    borderColor: 'rgb(236, 236, 236)', 
    borderWidth: 1
  },
  textInput2Style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 215, 
    height: 30, 
    marginLeft: 27, 
    backgroundColor: 'rgb(248, 248, 248)', 
    borderColor: 'rgb(236, 236, 236)', 
    borderWidth: 1
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