import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


 

const CategoryItem = ({item}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  return (

    <Pressable onPress={() => navigation.navigate('CategoryEdit')} style={styles.root}>
      
        <View style={{ alignItems:'center'}}>
        <Text>{item.name}</Text> 
      
    </View>
        
        
    </Pressable>
  );
};



export default CategoryItem;
