import React from 'react';
import {View, Text, Pressable,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


 

const CategoryItem = ({item}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  return (
    <Pressable onPress={() => navigation.navigate('CategoryEdit', item)} style={ {marginTop:20}}>  
        <Text style={{alignSelf:'center', fontWeight:'bold'}} >{item.name}</Text> 
    <View  style={styles.root}>
     
      <View>
         <Image style={styles.image} source={{uri: item.image}}/>
      </View>
       
    </View>
    </Pressable> 
     
  );
};



export default CategoryItem;
