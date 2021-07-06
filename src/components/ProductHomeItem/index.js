import React from 'react';
import {Image, View, Text, Pressable, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons  from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


 

const ProductItem = ({item}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  return (

    <Pressable onPress={() => navigation.navigate('ProductEdit',item)} style={styles.root}>
      {/* <TouchableOpacity
      style={{
        width: 30,
        height: 30, 
        margin: 5,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#cbd1cc'
    }}>
      <Ionicons style={{fontSize:20}} name="cart"></Ionicons>
      </TouchableOpacity> */}
      <Text style={{alignSelf:'center' , fontSize:20}}>{item.name}</Text> 

        <View>
        {/* <Image style={styles.image} source={{uri:'https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} /> */}
        <Image style={styles.image} source={{uri:'https://cashierapi.ibtikar-soft.sa/' + item.image}} />
    
        
        {/* <Image
          style={styles.tinyLogo}
          source={require(item.image)}
        /> */}
        </View>

       <View style={{flexDirection:'row', justifyContent:'space-between' }}>
       <Text style={{ margin:5, fontWeight:'bold' }}>cost:{item.cost}</Text>
        <Text style={{ margin:5, fontWeight:'bold' }}>SR:{item.price}</Text>
       </View>
        
       
        
    </Pressable>
  );
};



export default ProductItem;
