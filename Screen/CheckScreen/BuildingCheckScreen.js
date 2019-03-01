import React ,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import {MaterialCommunityIcons,Ionicons} from  '@expo/vector-icons';
import { Constants, ImagePicker, Permissions } from 'expo';
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';


export default class BuildingCheckScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            updateday: '',
            error: '',
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false,
            checked9: false,
            checked10: false,
            checked11: false,
            checked12: false,
            checked13: false,
            checked14: false,
            checked15: false,
            checked16: false,
            checked17: false,
            checked18: false,
            checked19: false,
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

    _onButtonPress = () => {
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
            this.props.navigation.navigate('SubmitBuildingScreen', {
            facilityNumber: this.state.facilityNumber,
            day: this.state.day,
            check1: this.state.checked1,
            check2: this.state.checked2,
            check3: this.state.checked3,
            check4: this.state.checked4,
            check5: this.state.checked5,
            check6: this.state.checked6,
            check7: this.state.checked7,
            check8: this.state.checked8,
            check9: this.state.checked9,
            check10: this.state.checked10,
            check11: this.state.checked11,
            check12: this.state.checked12,
            check13: this.state.checked13,
            check14: this.state.checked14,
            check15: this.state.checked15,
            check16: this.state.checked16,
            check17: this.state.checked17,
            check18: this.state.checked18,
            check19: this.state.checked19,
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

        <Text style = {styles.textSubStyle}>지반 상태</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>시설물 주변의 지반 침하 또는 이로 인한 건물의 기욺, 균열 유무</Text>
            <CheckBox
              title = {(this.state.checked1) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked = {this.state.checked1}
              onPress = {() => this.setState({checked1: !this.state.checked1})}
            />
        </View>

        <Text style = {styles.textSubStyle}>구조 부재</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>주요 구조부재에 균열, 누수 및 누수흔적이 발생 유무</Text>
            <CheckBox
              title = {(this.state.checked2) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked = {this.state.checked2}
              onPress = {() => this.setState({checked2: !this.state.checked2})}
            />
                
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>구조부재의 처짐, 기욺, 또는 단면 손실 등의 변형 유무</Text>
            <CheckBox
              title={(this.state.checked3) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked3}
              onPress={() => this.setState({checked3: !this.state.checked3})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>철근 부식, 노출 또는 콘크리트의 박리.박락 유무</Text>
            <CheckBox
              title={(this.state.checked4) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked4}
              onPress={() => this.setState({checked4: !this.state.checked4})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>철골부재의 접합부 볼트 풀림, 누락, 탈락, 용접불량 유무</Text>
            <CheckBox
              title={(this.state.checked5) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked5}
              onPress={() => this.setState({checked5: !this.state.checked5})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>철골부재의 기욺, 좌굴 등의 변형 손상 유무</Text>
            <CheckBox
              title={(this.state.checked6) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked6}
              onPress={() => this.setState({checked6: !this.state.checked6})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>철골부재에 부식에 의한 단면 결손 등의 손상 유무</Text>
            <CheckBox
              title={(this.state.checked7) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked7}
              onPress={() => this.setState({checked7: !this.state.checked7})}
            />
        </View>

        <Text style = {styles.textSubStyle}>비구조부재</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>내부 칸막이벽에 균열 및 변형 유무</Text>
            <CheckBox
              title={(this.state.checked8) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked8}
              onPress={() => this.setState({checked8: !this.state.checked8})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>천장, 벽체, 바닥 마감재 파손, 오염, 변형, 누수 및 누수흔적 유무</Text>
            <CheckBox
              title={(this.state.checked9) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked9}
              onPress={() => this.setState({checked9: !this.state.checked9})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>외부 마감재 및 처마의 오염, 손상, 탈락, 균열 유무</Text>
            <CheckBox
              title={(this.state.checked10) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked10}
              onPress={() => this.setState({checked10: !this.state.checked10})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>옥상, 지붕 방수층의 상태는 양호한가</Text>
            <CheckBox
              title={(this.state.checked11) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked11}
              onPress={() => this.setState({checked11: !this.state.checked11})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>옥상 난간의 과도한 균열, 변형 발생 및 난간 높이는 적절한가</Text>
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
            <Text style = {styles.textCheckStyle}>캐노피 부재의 지지상태 불량, 기욺, 처짐, 등의 변형 유무</Text>
            <CheckBox
              title={(this.state.checked13) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked13}
              onPress={() => this.setState({checked13: !this.state.checked13})}
            />
        </View>

        <Text style = {styles.textSubStyle}>창호</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>칭호가 낮게 설치된 경우 추락 방지를 위한 조치 유무</Text>
            <CheckBox
              title={(this.state.checked14) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked14}
              onPress={() => this.setState({checked14: !this.state.checked14})}
            />
        </View>

        <Text style = {styles.textSubStyle}>재난 대비</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>재해 발생 시 피난 통로 시설의 상태</Text>
            <CheckBox
              title={(this.state.checked15) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked15}
              onPress={() => this.setState({checked15: !this.state.checked15})}
            />
        </View>

        <Text style = {styles.textSubStyle}>이동통로</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>이동통로에서 미끄러짐에 의한 안전사고 발생 우려 유무</Text>
            <CheckBox
              title={(this.state.checked16) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked16}
              onPress={() => this.setState({checked16: !this.state.checked16})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>난간의 고정상태는 양호한가</Text>
            <CheckBox
              title={(this.state.checked17) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked17}
              onPress={() => this.setState({checked17: !this.state.checked17})}
            />
        </View>

        <Text style = {styles.textSubStyle}>기타</Text>

        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>추락, 낙하에 의한 안전사고가 발생할 수 있는 위험요소 유무</Text>
            <CheckBox
              title={(this.state.checked18) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked18}
              onPress={() => this.setState({checked18: !this.state.checked18})}
            />
        </View>
        <View style={styles.viewCheckStyle}>
            <Text style = {styles.textCheckStyle}>물품 적치로 건축물에 과도한 적재하중이 작용되는 곳이 있는가</Text>
            <CheckBox
              title={(this.state.checked19) ? '적정' : '불량'}
              iconRight
              checkedColor = 'rgb(44, 98, 210)'
              checked={this.state.checked19}
              onPress={() => this.setState({checked19: !this.state.checked19})}
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