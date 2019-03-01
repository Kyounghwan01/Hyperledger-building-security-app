import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Platform,ActivityIndicator
} from 'react-native';
import{Button,List, ListItem, SearchBar}from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


//mockData로 이미지 링크를 따로 저장
const mockData = [
  {
    vin: 'abc',
    manufacturer: 'Tesla',
    model: 'Model 3',
    year: 2018,
    image:
      'https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801',
  },
  {
    vin: 'abc123',
    manufacturer: 'Tesla',
    model: 'Model 3',
    year: 2017,
    image:
      'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524',
  },
  {
    vin: 'abc123123',
    manufacturer: 'Tesla',
    model: 'Model 4',
    year: 2018,
    image:
      'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524',
  },
];
export default class GradeFlatScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    
        return {
        //   headerRight: (
        //     <Button
        //       style={{ padding: 5, paddingRight: 15 }}
        //       onPress={() => {
        //       }}
        //     />
        //   ),
          title: '이전 점검 내역',
        };
      };

    constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing:false,
      refreshing: false,
    };

    this.arrayholder=[];
  }
  
  componentDidMount() {
    this.makeRemoteRequest();
  }
  _onButtonPress=()=>{
    this.props.navigation.navigate('점검 상세 내용 screen');
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
        });
        this.arrayholder = res;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };
  refreshData=()=>{};
  searchFilterFunction = text => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.admin.toUpperCase()} ${item.facilityNumber}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    //`건물번호 : ${item.facilityNumber}    관리자 : ${item.admin}`
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          refreshing={this.state.refreshing}
          onRefresh={this.refreshData}
          renderItem={({ item }) => (
            <View style ={{flexDirection:'row'}}>
              <Image
                  style={{flex : 1}}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
            <View style ={{flex:5}}>
            <ListItem
              
              title={`건물번호 : ${item.facilityNumber}         관리자 Id : ${item.admin.substring(29, item.admin.indexOf("@"))}`}
              subtitle={`최근 검사 일 : ${item.safetycheck_date}`}
              //avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
            <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <Button 
                buttonStyle={{backgroundColor: '#2096f3'}}
                onPress={this._onButtonPressUpdateGrade} 
                title="점검 상세 내역"/>
                
               </View>
              </View>
            </View>
            
          )}
          keyExtractor={item => item.facilityNumber}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
    );
  }
}
