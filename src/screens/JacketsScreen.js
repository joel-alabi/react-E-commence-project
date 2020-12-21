import React from 'react';
import { StyleSheet, FlatList, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Jackets from "../components/Jackets"
import { AntDesign } from '@expo/vector-icons';

const JacketsScreen = ({navigation}) => {
    jackets = [
        { image: require('../../assets/myjacket.jpg'), name: 'Bike Jacket Softshell Warm', price: '$90', },
        { image: require('../../assets/pinkrider.jpg'), name: 'Pink Hoody Merino', price: '$80' },
        { image: require('../../assets/hoodjacket.jpg'), name: 'Hooded Jacket Classic', price: '$140' },
        { image: require('../../assets/redwoman.jpg'), name: 'Red Woman Jacket', price: '$110' },
        { image: require('../../assets/bike.jpg'), name: 'Bike Jacket Warm', price: '$99', },
    ]
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <View style={styles.arrowLeft}>
                        <AntDesign name="arrowleft" size={25} color="black" />
                    </View>
                    <View style={styles.shoppingCart}>
                        <AntDesign name="shoppingcart" size={30} />
                    </View>
                </View>
                
                <Text style={styles.heading}>Woman Jacket</Text>

                <View style={styles.textInputContainer}>
                    <TextInput placeholder="Search Jacket" style={styles.textInput}/>
                    <Text style={styles.filter}>Filter</Text>
                </View>
                    
                <FlatList
                    data={jackets}
                    renderItem={({ item }) => {
                        return <Jackets name={item.name} price={item.price} image={item.image} navigation={navigation} />
                    }}
                    keyExtractor={(item) => item.number}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#e8e6e6",
    },
    container: {
        flex: 1,
        marginTop:10,
        justifyContent: "space-around",
        marginLeft: 15,
    },
    icons: {
        flexDirection: "row",
        marginTop: 15,
        marginRight: 20,
        alignSelf: "flex-start",
    },
   

    shoppingCart: {
        
        marginTop:5,
        marginLeft: 270,
        borderRadius: 20,
        height: 40,
        width: 40,
        alignItems:"center"
    },
    heading: {
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 25
    },
textInputContainer:{
    flexDirection: 'row',
    backgroundColor: "white",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: 330,
    marginHorizontal: 5,
    marginVertical: 20,
    borderRadius: 10,
},
    textInput: {
    marginLeft:10

    },
    filter:{
        marginRight:10,
        fontSize:15
    }
})

export default JacketsScreen;
