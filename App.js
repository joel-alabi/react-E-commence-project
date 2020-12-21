import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

 
import JacketDetails from './src/screens/JacketDetails';
import JacketsScreen from './src/screens/JacketsScreen'                

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "Jacket Details",
          // headerStyle:{
          //   backgroundColor:"#3b31eb"
          // },
          headerTintColor: "#b870d4",
          headerTitleAlign: "center",
          // headerRight: () => (<Text style={{ color: "#3b31eb", marginRight: 20 }}>Icons</Text>
          // )
        }}
      >
        <Stack.Screen
          // options={{}}
          name='Jackets' component={JacketsScreen} />
        <Stack.Screen name='JacketDetails' component={JacketDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>


    // <View style={styles.container}>
    //   {/* <RedJacket/> */}
    //   {/* <Jackets/> */}
    //   <JacketsScreen/>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
// });
