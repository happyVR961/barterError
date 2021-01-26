import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { TabNavigator } from './AppTabNavigator';
import customSideBarMenu  from './customSideBarMenu';
import Settingscreen from '../screens/Settingscreen';


export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
    screen : TabNavigator
},
Setting : {
    screen : Settingscreen
},
},
{
    contentComponent : customSideBarMenu
},
{
    initialRouteName : 'Home'
})