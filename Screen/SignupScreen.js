import React from 'react';
import { KeyboardAvoidingView, Alert, View, Text, Image, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title:'회원가입',
    headerTitleStyle: { flex: 1,
      textAlign: 'center'
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      email_db:null,
      password_db: null,
      password_db_check:null,
      name_db:null
    }
  }

CreateUser = () => {
  var url = 'http://localhost:3210/data';
  axios.post(url, {
    email_db: this.state.email_db,
    password_db: this.state.password_db,
    password_db_check:this.state.password_db_check,
    name_db:this.state.name_db
  })
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  });

  if(this.state.email_db==null || this.state.password_db==null || this.state.password_db_check== null || this.state.name_db==null){
    Alert.alert('누락 정보 확인')
  } else {
    if(this.state.password_db==this.state.password_db_check){
      Alert.alert('회원가입 완료')
      this.props.navigation.navigate('LoginScreen')
    } else {
        Alert.alert('비밀번호 재확인')
      }
    }
  }
  
  onSignInButtonPressed = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView 
          behavior = "padding"
          style = {styles.container}
        >
          <View style = {styles.paddingStyle}>
            <Image
            style={styles.logoStyle}
            source={require('../assets/icLogo.png')}
            />
            <Text style = {styles.textStyle}>HyperSignal</Text>
          </View>
          <View style = {styles.inputEmailStyle}>
            <Image
            source={require('../assets/icUsername.png')}
            />
            <TextInput placeholder = 'Username' 
              value={this.state.name_db}
              style = {{ width: 310}}
              onChangeText={(name_db) => this.setState({name_db})}
            />
          </View>
          <View style = {styles.inputEmailStyle}>
            <Image
            source={require('../assets/icEmail.png')}
            />
            <TextInput placeholder = 'Email' 
              value={this.state.email_db}
              style = {{ width: 310}}
              onChangeText={(email_db) => this.setState({email_db})}
            />
          </View>
          <View style = {styles.inputPassStyle}>
            <Image
              source={require('../assets/icPassword.png')}
            />
            <TextInput 
              placeholder = 'Password' secureTextEntry 
              style = {{ width: 310}}
              value={this.state.password_db}
              onChangeText={(password_db) => this.setState({password_db})}
            />
          </View>
          <View style = {styles.inputPassStyle2}>
            <Image
              source={require('../assets/icPassword.png')}
            />
            <TextInput 
              placeholder = 'Password' secureTextEntry 
              style = {{ width: 310}}
              value={this.state.password_db_check}
              onChangeText={(password_db_check) => this.setState({password_db_check})}
        
            />
          </View>
          <View style = {{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start'}}>
            <TouchableHighlight
              style = {styles.btnstyle}
              onPress = {() => this.CreateUser()}
            ><Text style = {styles.textLoginStyle}>Sign Up</Text>
            </TouchableHighlight>
            <Text style = {styles.textSignUpStyle1}>이미 회원이라면?</Text>
            <TouchableOpacity
              onPress = {this.onSignInButtonPressed}
            ><Text style = {styles.textSignUpStyle2}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1, 
    height:  812,
    alignItems:'center'
  },
  paddingStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: 'black'
  },
  logoStyle: {
    // flex: 1,
    // alignItems:'center',
    // marginTop: 120,
    marginBottom: 8,
    width: 80,
    height: 80
  },
  textStyle: {
    // marginTop: 8,
    // width: 101,
    height: 23,
    // fontFamily: "NotoSans",
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#656565"
  },
  inputUserStyle: {
    flexDirection: 'row',
    marginTop: 64
  },
  inputEmailStyle: {
    flexDirection: 'row',
    marginTop: 35,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  inputPassStyle: {
    flexDirection: 'row',
    marginTop: 35,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  inputPassStyle2: {
    flexDirection: 'row',
    marginTop: 35,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  btnstyle: {
    marginTop: 41,
    backgroundColor: 'rgb(111, 155, 248)',
    width: 318,
    height: 44,
    borderRadius: 22,
  },
  textLoginStyle: {
    // width: 45,
    // height: 23,
    // fontFamily: "NotoSans",
    marginTop: 9,
    textAlign:'center',
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
  textSignUpStyle1: {
    marginTop: 18,
    // width: 163,
    height: 19,
    // fontFamily: "NotoSans",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#7f7f7f"
  },
  textSignUpStyle2: {
    // width: 53,
    // height: 20,
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: 'rgb(111, 155, 248)',
    textDecorationLine: 'underline'
  }
}