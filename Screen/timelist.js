import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Alert, ActivityIndicator,RefreshControl, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import {MaterialCommunityIcons,Entypo,FontAwesome} from  '@expo/vector-icons';

export default class timelist extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '내역',
      headerTitleStyle: { flex: 1,
        textAlign: 'center'
      }
    };
  };

  constructor(props){
    super(props)
    this.state = {
        data_grade: [],
        selected: null,
        data:[],
        refreshing: false,
        loading: false,
        error: null,
    }
  } 

  // onEventPress = (data) => {
  //   this.setState({selected: data})
  // }

  componentDidMount() {
    this.QueryGrade()
  }

  // renderSelected(){
  //   if(this.state.selected)
  //     return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  // }

  refreshData = () => {this.QueryGrade()};

  QueryGrade = () => {
    const FacilityNumber = this.props.navigation.getParam('FacilityNumber');
    this.setState({ loading: true });
    return fetch(`http://localhost:3000/api/queries/selectGradesByFacilityNumber?grade_prev=resource%3Aorg.acme.model.Grade%23${FacilityNumber}`)
      .then(response => response.json())
      .then(items => {
        this.setState({
          data_grade: items.sort((a, b) => a.safetycheck_date_update < b.safetycheck_date_update),
          error: items.error || null,
          loading: false,
          refreshing: false,
        })
        // this.state.data_grade.sort((a, b) => a.timestamp < b.timestamp);
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.error(error);
      });
  }

  QueryGrade1 = (x) => {
    if(x == 'Green') {
      return  <FontAwesome name ={'circle'} size={15} color='rgb(111,192,101)'/>
    } else if(x == 'Yellow') {
      return  <FontAwesome name ={'circle'} size={15} color='rgb(255, 233, 0)'/>
    } else {
      return  <FontAwesome name ={'circle'} size={15} color='rgb(255,101,101)'/>
    }
  }

  // showData = () => {
  //   this.state.data_grade.sort((a, b) => a.timestamp < b.timestamp);
  //   console.log(this.state.data_grade.timestamp);
  //   for(let j = 0; j < this.state.data_grade.length; j++){
  //       this.data[j] = {
  //             time: 
  //               [this.state.data_grade[j].timestamp.substring(0,10), "\n", 
  //               this.state.data_grade[j].timestamp.substring(11,16)],
  //             title: ["건물번호 : ",this.state.data_grade[j].grade_prev.substring(30)], 
  //             description: 
  //               ['가    스 :',this.state.data_grade[j].Gas_update,"\n",
  //               '전    기 :',this.state.data_grade[j].Electricity_update,"\n",
  //               '승강기 :',this.state.data_grade[j].Elevator_update,"\n",
  //               '빌    딩 :',this.state.data_grade[j].Building_update,"\n",
  //               '소    방 :',this.state.data_grade[j].FireSafety_update
  //             ],
  //             // lineColor: 'rgb(111, 155, 248)'
  //           }
  //       }
  //       console.log(this.data)
  //       return this.data
  // }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList 
          refreshing = {this.state.refreshing}
          onRefresh = {this.refreshData}
          data={this.state.data_grade}
          keyExtractor = {item => item.facilityNumber}
          renderItem = { ({item}) => (
            <View style={styles.secondContainer}>
              <View style={styles.leftBox}>
                <Entypo name ={'dot-single'} size={50} color='rgb(111,155,248)' style={{position:'absolute',left:61,top:-20}}/> 
                <Text style={styles.textTitle}>{`${item.safetycheck_date_update.substring(0,10)}`}</Text>
                <Text style={styles.text2Title}>{`${item.safetycheck_date_update.substring(11,16)}`}</Text>
              </View>

              <View>  
                <View style={styles.rightBox}>
                  <View style={{margin: 10,width:137, justifyContent:'space-around',}}>
                    <Text><MaterialCommunityIcons name ={'gas-cylinder'} size={15} color='rgb(44, 98, 210)'/>    가스 :</Text>
                    <Text><MaterialCommunityIcons name ={'car-battery'} size={15} color='rgb(44, 98, 210)'/>    전기 :</Text>
                    <Text><MaterialCommunityIcons name ={'elevator'} size={15} color='rgb(44, 98, 210)'/>    승강기 :</Text>
                    <Text><MaterialCommunityIcons name ={'office-building'} size={15} color='rgb(44, 98, 210)'/>    건물 :</Text>
                    <Text><MaterialCommunityIcons name ={'fire'} size={15} color='rgb(44, 98, 210)'/>    소방 :</Text>
                  </View>
                  <View style = {{width: 30, marginTop: 10,marginBottom:10, alignItems: 'center', justifyContent:'space-around'}}>
                    {this.QueryGrade1(item.Gas_update)} 
                    {this.QueryGrade1(item.Electricity_update)} 
                    {this.QueryGrade1(item.Elevator_update)} 
                    {this.QueryGrade1(item.Building_update)} 
                    {this.QueryGrade1(item.FireSafety_update)} 
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30, 
    marginLeft:25, 
    marginRight: 25
  },
  secondContainer: {
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
  },
  leftBox:{
    width:87,
    borderRightWidth:2,
    borderColor:'rgb(111,155,248)'
  },
  rightBox:{
    marginLeft:8,
    marginBottom:8,
    marginRight:8,
    borderWidth:1,
    borderRadius:4,
    borderColor:'rgb(231,231,231)',
    flexDirection:'row',
    marginBottom:26,
    width:200
  },
  textTitle: {
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000"
  },
  text2Title: {
    fontSize: 11,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#2c2c2c"
  }
});