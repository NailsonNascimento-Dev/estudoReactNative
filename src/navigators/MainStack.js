import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/HomeScreen";
import SobreScreen from "../pages/SobreScreen";

const MainStack = createStackNavigator();

export default () =>(

  
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen}/> 
            <MainStack.Screen name="Sobre" component={SobreScreen}/> 
        </MainStack.Navigator>

);