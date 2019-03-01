import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Alert, ActivityIndicator, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { List } from 'react-native-elements';
import Client from '../Client';
import { SimpleLineIcons } from  '@expo/vector-icons';
// import { Font } from 'expo';

export default class GradeFlatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '건물 목록',
      headerTitleStyle: { flex: 1,
        textAlign: 'center'
      },
      headerRight: (
        <TouchableOpacity onPress = {navigation.getParam('onClickCreate')}>
        <Image
          style={{width: 24,
            height: 24, marginRight:10}}
            source={require('../assets/icAdd.png')}
          />
      </TouchableOpacity> 
      ),
      headerLeft: (
        <TouchableOpacity onPress = {navigation.getParam('onClickLogout')}>
          <SimpleLineIcons name = "logout" size = {25} color = "white" style = {{marginLeft: 10}}/>
        </TouchableOpacity> 
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      admin_db: this.props.navigation.getParam('admin_db'),
      name_db: this.props.navigation.getParam('name_db'),
      changeButon: false
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
    this.getUser();

    this.props.navigation.setParams({onClickCreate: this._onClickCreate});
    this.props.navigation.setParams({onClickLogout: this._onClickLogout});
    // Font.loadAsync({
    //   'NotoSans': require('../assets/fonts/NotoSansKR-Light.otf'),
    // });
  }

  _onClickCreate = () => {
    if(this.state.admin_db == null) {
      alert("게스트 로그인 하셨습니다.")
    } else {
      this.props.navigation.navigate('Create', {
        admin_db: this.state.admin_db
      })
    }
  }

  _onClickLogout = () => {
    Alert.alert(
      '로그아웃',
      '로그아웃 하시겠습니까?',
      [
        {
          text: '아니오',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '예', onPress: () => {this.props.navigation.navigate('LoginScreen')}},
      ]
    )
  }

  getUser = async() => {
    Client.search('FacilityNumber') // Client.js에서 
    .then(data_grade => {
      this.setState({
      GradeUpdate: data_grade 
      })
    })
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

  fetch(`http://localhost:3000/api/Grade`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res,
        error: res.error || null,
        loading: false,
        refreshing: false
      });
      this.arrayholder = res;
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });
  };

  refreshData = () => {this.makeRemoteRequest()};

  searchFilterFunction = text => {
    // console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.admin.toUpperCase()} ${item.facilityNumber}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  changeFilterFunction = () => {
    const newData = this.arrayholder
    this.setState({
      data: newData,
    });
  };

  changeFilterButtonFunction = () => {
    if(this.state.admin_db == null) {
      alert("게스트 로그인 하셨습니다.")
    } else {
      if (this.state.changeButon)
        this.changeFilterFunction();
      else
        this.searchFilterFunction(this.state.admin_db);
      this.setState({changeButon: !this.state.changeButon});
    }
  }

  checkGradeButton = (item, facilityNumber) => {
    if (this.state.admin_db === item.substring(29)) {
      this.props.navigation.navigate('GradeUpdateScreen', { 
        facilityNumber_param : facilityNumber,
        admin_param : item.substring(29)
        })
    } else if(this.state.admin_db == null) {
      alert("게스트 로그인 하셨습니다.")
    } else {
      alert("해당 관리자가 아닙니다.")
    }
  }
  checkCheckedButton = (item, facilityNumber) => {
    if(this.state.admin_db === item.substring(29)) {
      this.props.navigation.navigate('CheckNaviScreen', {
        facilityNumber_param : facilityNumber,
        name_db : this.state.name_db
    })
    } else if(this.state.admin_db == null) {
      alert("게스트 로그인 하셨습니다.")
    } else {
      alert("해당 관리자가 아닙니다.")
    }
  }

  renderHeader = () => {
    return (
      <View style = {{height: 59, backgroundColor: '#efefef'}}>
        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 7, height: 44, backgroundColor: '#ffffff'}}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image 
              source = {require('../assets/rectangle7.png')}
              style = {{width: 20, height: 20,marginLeft: 16}}
            />
            <TextInput 
              placeholder = "검색"
              style = {{marginLeft: 12, width: '60%'}}
              placeholderStyle = {{fontSize: 13, color: '#9e9e9e'}}
              onChangeText = {text => this.searchFilterFunction(text)}
            />
          </View>
          <TouchableOpacity
            style = {styles.btn1style}
            onPress = {
              () => this.changeFilterButtonFunction()
              // () => {{(this.state.changeButon) ? 
              //   this.changeFilterFunction() : this.searchFilterFunction(this.state.admin_db)}
              //   this.setState({changeButon: !this.state.changeButon})}
            }
          ><Text style = {styles.textButtonStyle}>{(this.state.changeButon) ? '모두보기' : '관리목록'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View>
        <List containerStyle = {{marginTop: 0, borderBottomWidth: 7, borderColor: 'white'}}>
          <FlatList
            data = {this.state.data}
            refreshing = {this.state.refreshing}
            onRefresh = {this.refreshData}
            renderItem = {({ item }) => (
              <View style ={styles.firstContainer}>
                <Image
                  style = {{width: 100, height: 100, marginLeft: 8, marginTop: 8}}
                  source = {require('../assets/icNoPhoto.png')}
                />
                <View style = {styles.secondContainer}>
                  {/* <ListItem
                    title = {`건물번호 : ${item.facilityNumber}`}
                    subtitleNumberOfLines = {2}
                    subtitle = {`관리자 Id : ${item.admin.substring(29, item.admin.indexOf("@"))} \n최근 검사 일 : ${item.safetycheck_date}`}
                    containerStyle = {{ borderBottomWidth: 0 }}
                  /> */}
                  <View>
                    <Text style = {styles.listTitleStyle}>{`건물 번호 : ${item.facilityNumber}`}</Text>
                    <Text style = {styles.listSubStyle}>{`관  리  자 : ${item.admin.substring(29)}`}</Text>
                    <Text style = {styles.listSubStyle}>{`최근 검사 일 : ${item.safetycheck_date.substring(0, item.safetycheck_date.indexOf("T"))}`}</Text>
                  </View>
                  <View style = {{flex: 1, marginBottom: 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      style = {styles.btnstyle}
                      onPress= {() => this.checkGradeButton(item.admin, item.facilityNumber)
                      //   {
                      //   if (this.state.admin_db === item.admin.substring(29)) {
                      //     this.props.navigation.navigate('GradeUpdateScreen', { 
                      //       facilityNumber_param : item.facilityNumber,
                      //       admin_param : item.admin.substring(29)
                      //       })
                      //   } else {
                      //     alert("해당 관리자가 아닙니다.")
                      //   }
                      // }
                      }
                    >
                      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                          source = {require('../assets/icGrade.png')}
                        />
                        <Text style = {styles.textHistoryStyle}>등급</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style = {styles.btnstyle}
                      onPress = {() => this.checkCheckedButton(item.admin, item.facilityNumber)
                      //   {
                      //   if(this.state.admin_db === item.admin.substring(29)) {
                      //     this.props.navigation.navigate('CheckNaviScreen', {
                      //       facilityNumber_param : item.facilityNumber,
                      //       name_db : this.state.name_db
                      //   })
                      //   } else {
                      //     alert("해당 관리자가 아닙니다.")
                      //   }
                      // }
                    }
                    >
                      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                          source = {require('../assets/icCheckList.png')}
                        />
                        <Text style = {styles.textHistoryStyle}>점검</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style = {styles.btnstyle}
                      onPress = {() => this.props.navigation.navigate('timelist', { 
                        FacilityNumber : item.facilityNumber
                        })}
                    >
                      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                          source = {require('../assets/icHistory.png')}
                        />
                        <Text style = {styles.textHistoryStyle}>내역</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor = {item => item.facilityNumber}
            ListHeaderComponent = {this.renderHeader}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection:'row', 
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7, 
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'rgb(241, 241, 241)'
  },
  secondContainer: {
    flex: 1,
    marginLeft: 23, 
    marginRight: 8,
    marginTop: 8, 
    height: 100,
    justifyContent: 'space-between',
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: 'rgb(241, 241, 241)'
  },
  btnstyle: {
    backgroundColor: 'rgb(111, 155, 248)',
    width: 70,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center'
  },
  btn1style:{
    marginRight: 12,
    width: 80,
    height: 40,
    backgroundColor: 'rgb(111, 155, 248)',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTitleStyle: {
    // fontFamily: "NotoSans",
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#666666"
  },
  listSubStyle: {
    // fontFamily: "NotoSans",
    marginTop: 3,
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#9e9e9e"
  },
  textHistoryStyle: {
    // width: 20,
    // height: 13,
    // fontFamily: "AppleSDGothicNeo",
    // marginTop: 9,
    // textAlign:'center',
    // textAlignVertical: 'center',
    marginLeft: 9,
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
  textButtonStyle: {
    // width: 20,
    // height: 13,
    // fontFamily: "AppleSDGothicNeo",
    // marginTop: 9,
    // textAlign:'center',
    // textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  }
})