import React, { Component } from "react";

import Feed from "./src/feed";
import Detail from "./src/detail";

import Screen1 from "./src/screens/drawer/screen1";
import Screen2 from "./src/screens/drawer/screen2";
import Screen3 from "./src/screens/drawer/screen3";

import Tab1 from "./src/screens/tabs/tab1";
import Tab2 from "./src/screens/tabs/tab2";
import Tab3 from "./src/screens/tabs/tab3";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {
  crateHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.crateHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favourites" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
