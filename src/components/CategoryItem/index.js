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
 
    <Pressable onPress={() => navigation.navigate('CategoryEdit', item)} style={styles.root}>
        
        <View style={{ alignItems:'center'}}>
        <Text>{item.name}</Text>
         
        <Image style={styles.image} source={{uri:item.image}}/>
    
    </View>
        
        
    </Pressable>
     
  );
};



export default CategoryItem;
