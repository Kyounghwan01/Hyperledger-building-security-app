import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView, Text, Image} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class GradeUpdateScreen extends React.Component {
  static navigationOptions = {
    title: '등급',
    headerTitleStyle: { flex: 1,
      textAlign: 'center'
    }
}
  
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false,
      transactionId:null,
      Gas_update: undefined,
      Electricity_update:undefined,
      Elevator_update:undefined,
      Building_update:undefined,
      FireSafety_update:undefined,
      isDateTimePickerVisible: false,
      check11:false,check12:false,check13:false,
      check21:false,check22:false,check23:false,
      check31:false,check32:false,check33:false,
      check41:false,check42:false,check43:false,
      check51:false,check52:false,check53:false
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
    var safetycheck_date_update = moment.utc(date);
    this.setState({
      safetycheck_date_update: safetycheck_date_update
    })
  };


  checkGradeUpdate = () => {
    if(this.state.safetycheck_date_update == null){
      alert("날짜를 지정 하시오")
    } else if(this.state.Gas_update == null){
      alert('가스 등급을 지정 하시오')
    } else if(this.state.Electricity_update == null){
      alert('전기 등급을 지정 하시오')
    } else if(this.state.Elevator_update == null){
      alert('승강기 등급을 지정 하시오')
    } else if(this.state.Building_update == null){
      alert('건물 등급을 지정 하시오')
    } else if(this.state.FireSafety_update == null){
      alert('소방 등급을 지정 하시오')
    } else{
      this.fetchGradeUpdate()
        .then(() => { this.props.navigation.navigate('GradeUpdateCheckScreen',{
          updated_safetycheck_date : this.state.safetycheck_date_update.format('YYYY[년] MM[월] DD[일]'),
          updated_Electricity : this.state.Electricity_update,
          updated_Gas : this.state.Gas_update,
          updated_Elevator : this.state.Elevator_update,
          updated_Building : this.state.Building_update,
          updated_FireSafety : this.state.FireSafety_update
          }) 
        }) 
    }
  }

  
  fetchGradeUpdate() {
    const facilityNumber_param = this.props.navigation.getParam('facilityNumber_param');
    const admin_param = this.props.navigation.getParam('admin_param');
    console.log(facilityNumber_param);
    
    return fetch(`http://localhost:3000/api/GradeUpdate`,
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
          //"content-length": "328",
          // "x-xss-protection": "1; mode=block"
        },
        method: 'POST',
        body: JSON.stringify({
          $class: "org.acme.model.GradeUpdate",
          safetycheck_date_update: this.state.safetycheck_date_update,
          Electricity_update: this.state.Electricity_update,
          Gas_update: this.state.Gas_update,
          Elevator_update: this.state.Elevator_update,
          Building_update: this.state.Building_update,
          FireSafety_update: this.state.FireSafety_update,
          grade_prev: `org.acme.model.Grade#${facilityNumber_param}`,
          user: `resource:org.acme.model.User#${admin_param}`
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
    return(
      <View>
        <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 32}}>
          <Text style = {styles.text1Style}>등급 설정일</Text>
          <TouchableOpacity style = {styles.textInputStyle} onPress={this._showDateTimePicker}>
            {(this.state.safetycheck_date_update) ?
              <Text style = {styles.text2Style}>{this.state.safetycheck_date_update.format('YYYY[년] MM[월] DD[일]')}</Text>
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

        <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ marginTop: 48, flexDirection: 'row'}}>
            <Text style = {styles.textStyle}>가스 등급을 설정하시오</Text>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check11}
              onPress={() => this.setState({check11: true,check12:false,check13:false, Gas_update:'Red'})}
            >
              <Image source = {(this.state.check11) ? require('../assets/icSelectRed.png') : require('../assets/icUnselectRed.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check12}
              onPress={() => this.setState({check12: true,check11:false,check13:false, Gas_update:'Yellow'})}
            >
              <Image source = {(this.state.check12) ? require('../assets/icSelectYellow.png') : require('../assets/icUnselectYellow.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check13}
              onPress={() => this.setState({check13: true,check11:false,check12:false, Gas_update:'Green'})}
            >
              <Image source = {(this.state.check13) ? require('../assets/icSelectGreen.png') : require('../assets/icUnselectGreen.png')}/>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 48, flexDirection: 'row'}}>
            <Text style={styles.textStyle}>전기 등급을 설정하시오</Text>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check21}
              onPress={() => this.setState({check21: !this.state.check21,check22:false,check23:false, Electricity_update:'Red'})}
            >
              <Image source = {(this.state.check21) ? require('../assets/icSelectRed.png') : require('../assets/icUnselectRed.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check22}
              onPress={() => this.setState({check22: !this.state.check22,check21:false,check23:false, Electricity_update:'Yellow'})}
            >
              <Image source = {(this.state.check22) ? require('../assets/icSelectYellow.png') : require('../assets/icUnselectYellow.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check23}
              onPress={() => this.setState({check23: !this.state.check23,check21:false,check22:false, Electricity_update:'Green'})}
            >
              <Image source = {(this.state.check23) ? require('../assets/icSelectGreen.png') : require('../assets/icUnselectGreen.png')}/>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 48, flexDirection: 'row'}}>
            <Text style={styles.textStyle}>승강기 등급을 설정하시오</Text>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check31}
              onPress={() => this.setState({check31: !this.state.check31,check32:false,check33:false, Elevator_update:'Red'})}
            >
              <Image source = {(this.state.check31) ? require('../assets/icSelectRed.png') : require('../assets/icUnselectRed.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check32}
              onPress={() => this.setState({check32: !this.state.check32,check33:false,check31:false, Elevator_update:'Yellow'})}
            >
              <Image source = {(this.state.check32) ? require('../assets/icSelectYellow.png') : require('../assets/icUnselectYellow.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check33}
              onPress={() => this.setState({check33: !this.state.check33,check31:false,check32:false, Elevator_update:'Green'})}
            >
              <Image source = {(this.state.check33) ? require('../assets/icSelectGreen.png') : require('../assets/icUnselectGreen.png')}/>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 48, flexDirection: 'row'}}>
            <Text style={styles.textStyle}>빌딩 등급을 설정하시오</Text>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check41}
              onPress={() => this.setState({check41: !this.state.check41,check42:false,check43:false, Building_update:'Red'})}
            >
              <Image source = {(this.state.check41) ? require('../assets/icSelectRed.png') : require('../assets/icUnselectRed.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check42}
              onPress={() => this.setState({check42: !this.state.check42,check41:false,check43:false, Building_update:'Yellow'})}
            >
              <Image source = {(this.state.check42) ? require('../assets/icSelectYellow.png') : require('../assets/icUnselectYellow.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check43}
              onPress={() => this.setState({check43: !this.state.check43,check42:false,check41:false, Building_update:'Green'})}
            >
              <Image source = {(this.state.check43) ? require('../assets/icSelectGreen.png') : require('../assets/icUnselectGreen.png')}/>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 48, flexDirection: 'row'}}>
            <Text style={styles.textStyle}>소방 등급을 설정하시오</Text>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check51}
              onPress={() => this.setState({check51: !this.state.check51,check52:false,check53:false, FireSafety_update:'Red'})}
            >
              <Image source = {(this.state.check51) ? require('../assets/icSelectRed.png') : require('../assets/icUnselectRed.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check52}
              onPress={() => this.setState({check52: !this.state.check52,check51:false,check53:false, FireSafety_update:'Yellow'})}
            >
              <Image source = {(this.state.check52) ? require('../assets/icSelectYellow.png') : require('../assets/icUnselectYellow.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{marginLeft: 23}}
              checked={this.state.check53}
              onPress={() => this.setState({check53: !this.state.check53,check51:false,check52:false, FireSafety_update:'Green'})}
            >
              <Image source = {(this.state.check53) ? require('../assets/icSelectGreen.png') : require('../assets/icUnselectGreen.png')}/>
            </TouchableOpacity>
          </View>

          {/* <Button title="we" 
          onPress={()=>{
            this.Gas_update_function(),
            this.Electricity_update_function(),
            this.Elevator_update_function(),
            this.Building_update_function(),
            this.FireSafety_update_function()}}/> */}

          <View style = {{marginTop: 180, alignItems: 'center'}}>
            <TouchableOpacity
              style = {styles.btnStyle}
              onPress={() => { this.checkGradeUpdate() }}
            >
              <Text style = {styles.btnTextStyle}>제출</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
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
  text1Style: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  text2Style: {
    width: 180,
    textAlign: 'center',
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#747272"
  },
  textInputStyle: {
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
});