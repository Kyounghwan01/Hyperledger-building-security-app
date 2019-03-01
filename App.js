import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './Screen/LoginScreen';
import SignupScreen from './Screen/SignupScreen';

import FlatScreen from './Screen/FlatScreen';

import Create from './Screen/Create';

import GradeUpdateScreen from './Screen/GradeUpdateScreen';
import GradeUpdateCheckScreen from './Screen/GradeUpdateCheckScreen';

import CheckNaviScreen from './Screen/CheckScreen/CheckNaviScreen';
import BuildingCheckScreen from './Screen/CheckScreen/BuildingCheckScreen';
import ElectricCheckScreen from './Screen/CheckScreen/ElectricCheckScreen';
import ElevatorCheckScreen from './Screen/CheckScreen/ElevatorCheckScreen';
import FireSafetyCheckScreen from './Screen/CheckScreen/FireSafetyCheckScreen';
import SubmitScreen from './Screen/CheckScreen/SubmitScreen/SubmitScreen';
import SubmitBuildingScreen from './Screen/CheckScreen/SubmitScreen/SubmitBuildingScreen';
import SubmitElectricScreen from './Screen/CheckScreen/SubmitScreen/SubmitElectricScreen';
import SubmitElevatorScreen from './Screen/CheckScreen/SubmitScreen/SubmitElevatorScreen';
import SubmitFireSafetyScreen from './Screen/CheckScreen/SubmitScreen/SubmitFireSafetyScreen';

import timelist from './Screen/timelist';

// import GradeScreen from './Screen/GradeScreen.js';

import DeleteScreen from './Screen/DeleteScreen';

// import UpdateCheckScreen from './Screen/UpdateCheckScreen';

const defaultNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'rgb(111, 155, 248)',
  },
};

const LoginNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    SignupScreen: SignupScreen,
  },
  {
    defaultNavigationOptions
  }
)

const MainNavigator = createStackNavigator(
  {
    // LoginScreen: LoginScreen,
    // SignupScreen: SignupScreen,

    FlatScreen: FlatScreen,
    Create: Create,
    GradeUpdateScreen: GradeUpdateScreen,
    GradeUpdateCheckScreen: GradeUpdateCheckScreen,

    CheckNaviScreen: CheckNaviScreen,
    BuildingCheckScreen: BuildingCheckScreen,
    ElectricCheckScreen: ElectricCheckScreen,
    ElevatorCheckScreen: ElevatorCheckScreen,
    FireSafetyCheckScreen: FireSafetyCheckScreen,
    
    SubmitScreen: SubmitScreen,
    SubmitBuildingScreen: SubmitBuildingScreen,
    SubmitElectricScreen: SubmitElectricScreen,
    SubmitElevatorScreen: SubmitElevatorScreen,
    SubmitFireSafetyScreen: SubmitFireSafetyScreen,
    
    timelist: timelist,
    
    DeleteScreen: DeleteScreen,
    
    // GradeScreen: GradeScreen,
  },
  {
    defaultNavigationOptions
  }
  
);

const RootStack = createStackNavigator(
  {
    LoginNavigator,
    MainNavigator,
  },
  {
    mode:'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack)

class App extends Component {
  render() {
    return (
      <RootStack/>
    )
  }
}