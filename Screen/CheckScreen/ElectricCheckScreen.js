import React ,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';
import {MaterialCommunityIcons,Ionicons} from  '@expo/vector-icons';
import { Constants, ImagePicker, Permissions } from 'expo';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class ElectricCheckScreen extends Component{
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
            buttonColor: false,
            facilityNumber: this.props.navigation.getParam('facilityNumber_param'),
            name: this.props.navigation.getParam('name_db')
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

    _onButtonPress=()=>{
        if(this.state.day == null){
            alert("점검일을 지정 하시오")
        } else if(this.state.name == null){
            alert('이름을 저장 하시오')
        } else if(this.state.image == null){
            alert('사진을 등록 하시오')
        } else if(this.state.buttonColor == true){
            alert('이미 제출하였습니다')
        }
        
        else{
            this.setState({buttonColor: true});
            this.props.navigation.navigate('SubmitElectricScreen', {
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
            name : this.state.name,
            image : this.state.image,
        });
        }
    }

  render(){
    let { image } = this.state;
    return (
      <ScrollView>
        <TouchableOpacity 
          style = {{alignItems: 'center'}}
          onPress = {this._pickImage}>
          {(this.state.image) ? <Image source = {{ uri: image }} style = {{ width: 375, height: 210}}/>
           :
          <View style = {{
            width: 375, height: 210, backgroundColor: '#dbdbdb',
            justifyContent: 'center', alignItems: 'center'
          }}>
            {image && <Image source = {{ uri: image }} style={{ width: 375, height: 210 }}/>}
            <Image 
              source = {require('../../assets/rectangle4.png')}
            />
            <Image
                source = {require('../../assets/icAddPhoto.png')}
                // size = {30}
                style = {{
                  // position: 'absolute', 
                  // // Right: 30,
                  // Left: 165, 
                  // top: 115,
                  top: 50,
                  marginLeft: 325,
                  // justifyContent: 'center', 
                  // alignItems: 'center'
                }}
            />
          </View>}
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
          <TouchableOpacity 
            style = {styles.textInputStyle}
          >
            <Text style = {styles.textStyle}>{`${this.state.name}`}</Text>
          </TouchableOpacity>
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

        <Text style = {styles.textSubStyle}>변압기</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>붓싱 등 애자류 균열, 파손, 단자 접속 사애 점검</Text>
            <CheckBox
              title = {(this.state.checked1) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked = {this.state.checked1}
              onPress = {() => this.setState({checked1: !this.state.checked1})}
            />
        </View>

        <Text style = {styles.textSubStyle}>차단기</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>접속상태, 변색, 균열 점검</Text>
            <CheckBox
              title = {(this.state.checked2) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked = {this.state.checked2}
              onPress = {() => this.setState({checked2: !this.state.checked2})}
            />
        </View>

        <Text style = {styles.textSubStyle}>계전기</Text>

        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>외관의 파손, 오손 상태 점검</Text>
          <CheckBox
            title={(this.state.checked3) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked3}
            onPress={() => this.setState({checked3: !this.state.checked3})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>동작표시기 작동여부 확인</Text>
          <CheckBox
            title={(this.state.checked4) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked4}
            onPress={() => this.setState({checked4: !this.state.checked4})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>동작치(TAP) 설정의 적정 여부 확인</Text>
          <CheckBox
            title={(this.state.checked5) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked5}
            onPress={() => this.setState({checked5: !this.state.checked5})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>헤드주위의 작동 필요 공간이 확보 및 살수에 방해가 되는 장애물 여부</Text>
          <CheckBox
            title={(this.state.checked6) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked6}
            onPress={() => this.setState({checked6: !this.state.checked6})}
          />
        </View>

        <Text style = {styles.textSubStyle}>전선로 및 고압모선</Text>

        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>충전부와의 이격거리 점검</Text>
          <CheckBox
            title={(this.state.checked7) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked7}
            onPress={() => this.setState({checked7: !this.state.checked7})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>케이블 및 부스터의 지지대 파손, 오손 상태 점검</Text>
          <CheckBox
            title={(this.state.checked8) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked8}
            onPress={() => this.setState({checked8: !this.state.checked8})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>접속상태 및 변색, 균열, 열화, 상태 점검</Text>
          <CheckBox
            title={(this.state.checked9) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked9}
            onPress={() => this.setState({checked9: !this.state.checked9})}
          />
        </View>

        <Text style = {styles.textSubStyle}>고압기기</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>각 기기 설치상태 점검</Text>
            <CheckBox
              title={(this.state.checked10) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked10}
              onPress={() => this.setState({checked10: !this.state.checked10})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>전력퓨즈 부착상태 점검</Text>
          <CheckBox
            title={(this.state.checked11) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked11}
            onPress={() => this.setState({checked11: !this.state.checked11})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>각 변상기 외관 상태 점검</Text>
          <CheckBox
            title={(this.state.checked12) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked12}
            onPress={() => this.setState({checked12: !this.state.checked12})}
          />
        </View>

        <Text style = {styles.textSubStyle}>주 출입구</Text>

        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>접속상태, 변색, 균열 여부, 외관 변형상태 점검</Text>
          <CheckBox
            title={(this.state.checked13) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked13}
            onPress={() => this.setState({checked13: !this.state.checked13})}
          />
        </View>

        <Text style = {styles.textSubStyle}>수.배전관</Text>

        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>외관 상태 및 잠금 장치 점검</Text>
          <CheckBox
            title={(this.state.checked14) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked14}
            onPress={() => this.setState({checked14: !this.state.checked14})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>수.배전반의 최소 공간거리 점검</Text>
          <CheckBox
            title={(this.state.checked15) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked15}
            onPress={() => this.setState({checked15: !this.state.checked15})}
          />
        </View>

        <Text style = {styles.textSubStyle}>저압</Text>

        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>변압기 2차 선로에서 배전반까지의 배선, 기기 접촉 불량, 파열 상태 점검</Text>
          <CheckBox
            title={(this.state.checked16) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked16}
            onPress={() => this.setState({checked16: !this.state.checked16})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>배선상태, 배선 굵기 및 배선 종류의 적정 여부 점검</Text>
          <CheckBox
            title={(this.state.checked17) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked17}
            onPress={() => this.setState({checked17: !this.state.checked17})}
          />
        </View>
        <View style={styles.viewCheckStyle}>
          <Text style = {styles.textCheckStyle}>배선용 차단기 선정의 적정여부, 누전차단기 부설상태 점검</Text>
          <CheckBox
            title={(this.state.checked18) ? '적정' : '불량'}
            iconRight
            checkedColor = 'rgb(44, 98, 210)'
            checked={this.state.checked18}
            onPress={() => this.setState({checked18: !this.state.checked18})}
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