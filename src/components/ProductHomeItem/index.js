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
        <Image style={styles.image} source={{uri: item.image}} />
        </View>

       <View style={{flexDirection:'row', justifyContent:'space-between' }}>
       <Text style={{ margin:5, fontWeight:'bold' }}>cost:{item.cost}</Text>
        <Text style={{ margin:5, fontWeight:'bold' }}>SR:{item.price}</Text>
       </View>
        
       
        
    </Pressable>
  );
};



export default ProductItem;
