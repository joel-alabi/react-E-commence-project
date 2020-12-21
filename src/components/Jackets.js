import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating } from 'react-native-ratings'

export default function jackets({ name, price, image, navigation }) {
  return (
    <TouchableOpacity  style={styles.skip} onPress={() => {
      navigation.navigate('JacketDetails',{name, price, image })
    }}
     style={styles.container}>

      <View style={styles.details}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Rating
            imageSize={15}
            style={styles.rating}
            tintColor="#e8e6e6"
            ratingCount={5}
            readonly={true}
            startingValue={4.5}
          />
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5
  },

  image: {
    backgroundColor: "white",
    marginBottom: 15,
    marginLeft: 5,
    width: 100,
    height: 95,
    borderRadius: 12,
   
  },
  details: {
    flexDirection: "row"
  },
  infoContainer: {
    marginLeft: 20
  },
  name: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold"
  },
  rating: {
    marginTop: 10,
    alignSelf: "flex-start"
  },
  price: {
    color: "#8442ed",
    marginTop: 10,
    fontSize: 15
  }
})