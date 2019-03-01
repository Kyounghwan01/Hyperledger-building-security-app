import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Constants, ImagePicker, Permissions } from 'expo';

export default class Create extends React.Component {
  static navigationOptions = {
    title: '등록',
    headerTitleStyle: { flex: 1,
      textAlign: 'center'
    },
  }
  
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false,
      transactionId:null,
      // Gas_update: undefined,
      // Electricity_update:undefined,
      // Elevator_update:undefined,
      // Building_update:undefined,
      // FireSafety_update:undefined,
      isDateTimePickerVisible: false,
      facilityNumber_update:undefined,
      // Id:undefined,
      Facilityimage:null,
      data:undefined,
      // check11:false,check12:false,check13:false,
      // check21:false,check22:false,check23:false,
      // check31:false,check32:false,check33:false,
      // check41:false,check42:false,check43:false,
      // check51:false,check52:false,check53:false,
      Id: this.props.navigation.getParam('admin_db')
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
    var safetycheck_date_update = moment(date);
    this.setState({
      safetycheck_date_update: safetycheck_date_update
    })
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ Facilityimage: result.uri });
    }
  };

  fetchGradeUpdate() {
    return fetch(`http://localhost:3000/api/Grade`,
      {
        headers: {
          'Accept': 'application/json',
          "date": "Sat, 12 Jan 2019 00:16:45 GMT",
          "x-content-type-options": "nosniff",
          "etag": "W/\"148-mvsGER+X2CuZkkl0Uoqp+SrNw+E\"",
          "x-download-options": "noopen",
          "x-frame-options": "DENY",
          "content-type": "application/json; charset=utf-8",
          "access-control-allow-origin": "http://localhost:3000",
          "access-control-allow-credentials": "true",
          "connection": "keep-alive",
          "vary": "Origin, Accept-Encoding",
          "content-length": "328",
          "x-xss-protection": "1; mode=block"
        },
        method: 'POST',
        body: JSON.stringify({
          "$class": "org.acme.model.Grade",
          safetycheck_date: this.state.safetycheck_date_update,
          facilityNumber: `org.acme.model.Grade#${this.state.facilityNumber_update}`.substring(21),
          admin: `resource:org.acme.model.User#${this.state.Id}`,
          // Electricity: this.state.Gas_update,
          // Gas: this.state.Electricity_update,
          // Elevator: this.state.Elevator_update,
          // Building: this.state.Building_update,
          // FireSafety: this.state.FireSafety_update
          Electricity: 'Green',
          Gas: 'Green',
          Elevator: 'Green',
          Building: 'Green',
          FireSafety: 'Green',
        })
      }
    )
    .then(response => {
      response.json()
    })

    .catch(error => {
      console.error(error);
    });
  }

  render() {
    let { Facilityimage } = this.state;
    return(
      <ScrollView>
        <KeyboardAvoidingView behavior="padding"> 
          <TouchableOpacity 
            style = {{alignItems: 'center'}}
            onPress = {this._pickImage}>
            {(this.state.Facilityimage) ? <Image source = {{ uri: Facilityimage }} style = {{ width: 375, height: 210}}/>
           :
            <View style = {{
              width: 375, height: 210, backgroundColor: '#dbdbdb',
              justifyContent: 'center', alignItems: 'center'
            }}>
              {Facilityimage && <Image source = {{ uri: Facilityimage }} style={{ width: 375, height: 210 }}/>}
              <Image 
                source = {require('../assets/rectangle4.png')}
              />
              <Image
                source = {require('../assets/icAddPhoto.png')}
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
          <Text style = {styles.text1Style}>사진은 최대 1장까지 가능합니다.</Text>

          <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 25}}>
            <Text style = {styles.text2Style}>건물 번호: </Text>
            <TextInput
              style = {styles.textInputStyle}
              placeholder = '건물번호 입력하시오'
              value = {this.state.facilityNumber_update}
              onChangeText={(text) => { this.setState({facilityNumber_update: text}) }}
            />
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style = {styles.text2Style}>점검자 ID: </Text>
            <TouchableOpacity style = {styles.textInput2Style}>
              <Text style = {styles.textStyle}>{`${this.state.Id}`}</Text>
            </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style = {styles.text2Style}>점검 일시 :</Text>
            <TouchableOpacity style = {styles.textInput2Style} onPress={this._showDateTimePicker}>
              {(this.state.safetycheck_date_update) ?
                <Text>{this.state.safetycheck_date_update.format('YYYY[년] MM[월] DD[일]')}</Text>
                : <Text style = {styles.text2Style}>날짜를 선택하시오</Text>
              }
              <Image 
                source = {require('../assets/6A.png')}
                style = {{margin: 10}}
              />
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
          </View>

          <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
            <View style = {{margin: 40, alignItems: 'center'}}>
              <TouchableOpacity
                style = {styles.btnStyle}
                onPress = {() => {this.fetchGradeUpdate()
                  .then(() => {
                    this.props.navigation.navigate('GradeUpdateScreen', {
                      facilityNumber_param: this.state.facilityNumber_update,
                      admin_param: this.state.Id
                    })
                  })  
                }}
              >
                <Text style = {styles.btnTextStyle}>등록</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
// const styles1=StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    width: 153,
    // height: 16,
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  text2Style: {
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
    backgroundColor : 'rgb(111, 155, 248)'
  }
})