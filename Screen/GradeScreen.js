import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator,KeyboardAvoidingView,Button,Image } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";


export default class GradeScreen extends Component {
  static navigationOptions = {
    title: 'Prev Grade List'
}
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing:false
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  _onButtonPress=()=>{
    this.props.navigation.navigate('FlatScreen');
  }


  makeRemoteRequest = () => {
    const FacilityNumber=this.props.navigation.getParam('FacilityNumber');
    this.setState({ loading: true });

    fetch(`http://localhost:3000/api/queries/selectGradesByFacilityNumber?grade_prev=resource%3Aorg.acme.model.Grade%23${FacilityNumber}`)
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
          backgroundColor: '#000000',
          marginLeft: '14%',
        }}
      />
    );
  };

  refreshData=()=>{};
  
  searchFilterFunction = text => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.safetycheck_date_update}`;
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
        placeholder="업데이트 날짜를 입력하시오"
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

    return (
      <KeyboardAvoidingView>
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          refreshing={this.state.refreshing}
          onRefresh={this.refreshData}
          renderItem={({ item }) => (

            // <Container>
            // <Header />
            // <Content padder>
              <Card>
                <CardItem header bordered>
                  <Text style={{fontSize:18}}>점검일 : {item.timestamp.substring(0,10)}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                  
                    <Text style={{marginTop:5}}>전기등급 : {item.Electricity_update}</Text>
                    <Text style={{marginTop:5}}>가스등급 : {item.Gas_update}</Text>
                    <Text style={{marginTop:5}}>엘리베이터 등급 : {item.Elevator_update}</Text>
                    <Text style={{marginTop:5}}>빌딩등급: {item.Building_update}</Text>
                    <Text style={{marginTop:5}}>화재등급 : {item.FireSafety_update}</Text>  
                    <Text style={{marginTop:5}}>TX ID : {item.transactionId}</Text> 
           
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Text>건물번호 : {item.grade_prev.substring(30)}</Text>
                </CardItem>
              </Card>
          //   </Content>
          // </Container>

           
            
          )}
          
          keyExtractor={item => item.facilityNumber}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
      </KeyboardAvoidingView>
    );
  }
}