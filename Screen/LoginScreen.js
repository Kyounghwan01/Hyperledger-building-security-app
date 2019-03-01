import React, { Component} from 'react'
import { KeyboardAvoidingView, Alert, View, Text, Image, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import axios from 'axios';

class LoginScreen extends Component {
  static navigationOptions = {
    title:'로그인',
    headerTitleStyle: { flex: 1,
      textAlign: 'center'
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      login: false,
      data: [],
      user: []
    }
  }

  componentDidMount() {
    this.fetchMem().then(items => {
      this.setState({
        data: items
      })
    });
  }

  fetchMem() {
    return fetch(`http://localhost:3000/api/User`)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
  }

  loginCheck = () => {
    for(let j = 0; j < this.state.data.length; j++) {
      if(this.state.email_hyper==this.state.data[j].email){
        console.log(this.state.email_hyper);
        var url = 'http://localhost:3210/data';
        axios.get(url)
        .then((getData) => {
          this.setState({
            user: getData.data,
          }) 

          for (let i = 0; i < this.state.user.length; i++) {
            if(this.state.email_hyper && this.state.email_db && this.state.password_db){
              if(this.state.email_db == this.state.user[i].email_db){
                if(this.state.password_db == this.state.user[i].password_db) {
                  if(this.state.email_hyper==this.state.email_db){
                    this.props.navigation.navigate('FlatScreen', {
                      admin_db: this.state.email_db,
                      name_db: this.state.user[i].name_db})
                      console.log(this.state.user[i].name_db);
                    break;
                  }
                }
              }
            }
            else {
              Alert.alert('ID 및 PW 확인')
            }
          }
        })
      }
    }
  }

  // alertGuestLogin = () => {
  //   Alert.alert("게스트로 로그인하면 이용에 제한 됩니다.",
  //     {text: 'OK', 
  //     onPress: () => console.log('OK Pressed')}
  //   )
  //   // this.props.navigation.navigate('FlatScreen')
  // }

  render() {
    return (
      <KeyboardAvoidingView 
        style = {styles.container} 
        behavior = 'padding'
        // keyboardVerticalOffset = {Header.HEIGHT + 20}
        // padding = {20}
      >
        <View style={styles.paddingStyle}>
          <Image
            style={styles.logoStyle}
            source = {require('../assets/icLogo.png')}
          />
          <Text style = {styles.textStyle}>HyperSignal</Text>
        </View>
        <View style = {styles.inputEmailStyle}>
          <Image
            source = {require('../assets/icEmail.png')}
          />
          <TextInput 
            placeholder = 'Email' 
            value = {this.state.Email}
            style = {{ width: 310}}
            onChangeText = {(text) => { this.setState({ email_db: text , email_hyper: text}) }}
          />
        </View>
        <View style = {styles.inputPassStyle}>
          <Image
            source = {require('../assets/icPassword.png')}
          />
          <TextInput 
            placeholder = 'Password' secureTextEntry 
            style = {{ width: 310}}
            value = {this.state.Password}
            onChangeText = {(text) => { this.setState({ password_db: text }) }}
          />
        </View>
        <View style = {{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start'}}>
          <TouchableHighlight
            style = {styles.btnstyle}
            onPress = {() => this.loginCheck()}
          ><Text style = {styles.textLoginStyle}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style = {styles.guestbtnstyle}
            onPress = {() => this.props.navigation.navigate('FlatScreen')}
          ><Text style = {styles.textLoginStyle}>GUEST Login</Text>
          </TouchableHighlight>
          <Text style = {styles.textSignUpStyle1}>아직 회원가입 하지 않았다면?</Text>
          <TouchableOpacity
            onPress = {() => this.props.navigation.navigate('SignupScreen')}
          ><Text style = {styles.textSignUpStyle2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1, 
    height:  812,
    alignItems:'center',
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: 'black'
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
    // marginTop: 159,
    marginBottom: 8,
    width: 80,
    height: 80,
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
  inputEmailStyle: {
    // flex: 1,
    flexDirection: 'row',
    marginTop: 69,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  inputPassStyle: {
    // flex: 1,
    flexDirection: 'row',
    marginTop: 36,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  btnstyle: {
    // flex: 1,
    marginTop: 41,
    backgroundColor: 'rgb(111, 155, 248)',
    width: 318,
    height: 44,
    borderRadius: 22,
  },
  guestbtnstyle: {
    // flex: 1,
    marginTop: 15,
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

export default LoginScreen;