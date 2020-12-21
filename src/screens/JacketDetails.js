import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings'
import { LinearGradient } from 'expo-linear-gradient';


export default function JacketDetails({ route, navigation }) {
    let jacket = route.params;
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <View style={styles.shoppingCart}>
                        <AntDesign name="shoppingcart" size={25} />
                    </View>

                    <View style={styles.heartOutlined}>
                        <Entypo name="heart-outlined" size={25} />
                    </View>
                </View>

                <Image source={jacket.image} style={styles.image} />

                <Text style={styles.text1} >{jacket.name}</Text>

                <View style={styles.ratingContainer}>
                    <Text>Review :</Text>
                    <Rating
                        imageSize={15}
                        style={styles.rating}
                        tintColor="#e8e6e6"
                        ratingCount={5}
                        readonly={true}
                        startingValue={5}
                    />
                </View>
                <Text style={styles.emptyButton}></Text>

                <Text>
                    It is a long established fact that a reader will be
                </Text>

                <Text>
                    distracted by the readable content of a page.
                </Text>

                <LinearGradient
                    style={styles.materialContainer}
                    colors={['#b99dc4', '#b99dc4']}
                    start={{ x: 0.5, y: 0.5 }}
                    start={{ x: 1, y: 0.5 }}
                >
                    <Text style={styles.material}>Material :91% polyester,9% ealstane</Text>
                </LinearGradient>


                <View style={styles.sizes}>
                    <Text style={styles.size}>XS</Text>
                    <Text style={styles.size} >S</Text>
                    <Text style={styles.M}>M</Text>
                    <Text style={styles.size}>L</Text>
                    <Text style={styles.size}>XL</Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.prices}>
                        <Text style={styles.amount}>Total Amount</Text>
                        <Text style={styles.price}>{jacket.price}</Text>
                    </View>

                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={styles.cart}>Add to Cart</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#e8e6e6'
    },
    container: {
        marginTop: 5,
        marginHorizontal: 20,
        justifyContent: "space-around",
    },

    text1: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 20
    },
    ratingContainer: {
        flexDirection: "row"
    },
    rating: {
        alignSelf: "flex-start",
        marginLeft: 8,
        marginTop: 3
    },
    icons: {
        alignItems: "flex-end",
        marginRight: 20,
        marginBottom: 5
    },

    shoppingCart: {
        backgroundColor: "white",
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    heartOutlined: {
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        alignSelf: "center",
        height: 250,
        width: 250,
        borderRadius: 10,
       
    },

    emptyButton: {
        backgroundColor: "#b99dc4",
        borderRadius: 5,
        height: 5,
        width: 40,
        marginVertical: 20
    },

    materialContainer: {
        backgroundColor: "#f5f5f5",
        marginVertical: 20
    },

    material: {
        color: "black",
        height: 50,
        textAlign: "center",
        marginTop: 20

    },

    sizes: {
        marginLeft: 50,
        flexDirection: "row",

    },

    size: {
        backgroundColor: "#f5f5f5",
        fontWeight: "bold",
        borderRadius: 5,
        height: 20,
        width: 30,
        textAlign: "center",
        marginRight: 15,
    },

    M: {
        backgroundColor: "#b503fc",
        fontWeight: "bold",
        borderRadius: 5,
        height: 20,
        width: 30,
        textAlign: "center",
        marginRight: 15,
    },

    footer: {
        backgroundColor: "#b99dc4",
        borderRadius: 15,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"


    },

    prices: {
        marginLeft: 10,
        marginVertical: 15,
    },

    amount: {
        color: "white",
        fontWeight: "bold"
    },

    price: {
        color: "white",
        fontWeight: "bold"
    },

    addToCartContainer: {
        marginRight: 10,
        backgroundColor: "#464feb",
        borderRadius: 5,
        color:"white"
    },
    addToCart: {
        alignSelf: "center",
        marginRight: 10,
        backgroundColor: "#b503fc",
        borderRadius: 4,
        height:30,
        // width:100
    },
    cart:{
        color:"white",
        marginTop:4,
        marginHorizontal:5
    }

})
