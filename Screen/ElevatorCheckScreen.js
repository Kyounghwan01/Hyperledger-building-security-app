import React ,{Component} from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
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
      this.props.navigation.navigate('SubmitElevatorScreen', {
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

          <Text style = {styles.textSubStyle}>작동 상태 확인</Text>

          <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상 및 작동시험을 위한 운전 및 내부통화시스템</Text>
            <CheckBox
              title = {(this.state.checked1) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked = {this.state.checked1}
              onPress = {() => this.setState({checked1: !this.state.checked1})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>문닫힘안전장치</Text>
            <CheckBox
              title = {(this.state.checked2) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked = {this.state.checked2}
              onPress = {() => this.setState({checked2: !this.state.checked2})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>승강장문 잠금장치</Text>
            <CheckBox
              title={(this.state.checked3) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked3}
              onPress={() => this.setState({checked3: !this.state.checked3})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>상승 과속 방지수단</Text>
            <CheckBox
              title={(this.state.checked4) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked4}
              onPress={() => this.setState({checked4: !this.state.checked4})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>완충기</Text>
            <CheckBox
              title={(this.state.checked5) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked5}
              onPress={() => this.setState({checked5: !this.state.checked5})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>파이널 리미트 스위치</Text>
            <CheckBox
              title={(this.state.checked6) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked6}
              onPress={() => this.setState({checked6: !this.state.checked6})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>전동기 구동시간 제한 장치</Text>
            <CheckBox
              title={(this.state.checked7) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked7}
              onPress={() => this.setState({checked7: !this.state.checked7})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상운전</Text>
            <CheckBox
              title={(this.state.checked8) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked8}
              onPress={() => this.setState({checked8: !this.state.checked8})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>비상통화장치</Text>
            <CheckBox
              title={(this.state.checked9) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked9}
              onPress={() => this.setState({checked9: !this.state.checked9})}
            />
        </View>


        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>정상운전 제어</Text>
            <CheckBox
              title={(this.state.checked10) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked10}
              onPress={() => this.setState({checked10: !this.state.checked10})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>문이 개방된 상태의 착상 및 재-착상의 제어</Text>
            <CheckBox
              title={(this.state.checked11) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked11}
              onPress={() => this.setState({checked11: !this.state.checked11})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>점검운전 제어</Text>
            <CheckBox
              title={(this.state.checked12) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked12}
              onPress={() => this.setState({checked12: !this.state.checked12})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>토킹운전 제어</Text>
            <CheckBox
              title={(this.state.checked13) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked13}
              onPress={() => this.setState({checked13: !this.state.checked13})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>정지장치</Text>
            <CheckBox
              title={(this.state.checked14) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked14}
              onPress={() => this.setState({checked14: !this.state.checked14})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>파킹운전</Text>
            <CheckBox
              title={(this.state.checked15) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked15}
              onPress={() => this.setState({checked15: !this.state.checked15})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>전기안전장치</Text>
            <CheckBox
              title={(this.state.checked16) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked16}
              onPress={() => this.setState({checked16: !this.state.checked16})}
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