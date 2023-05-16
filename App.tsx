import 'react-native-gesture-handler';

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

import MainStack from "./src/navigators/MainStack";
import sobreScreen from './src/pages/SobreScreen';

function App() {
    return (
        
        <NavigationContainer>   
            <MainStack />
        </NavigationContainer>


    );
}

export default App;