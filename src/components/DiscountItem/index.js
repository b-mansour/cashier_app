import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


 

const DiscountItem = ({item}) => {

  
  const navigation = useNavigation();

   

  return (

    <Pressable onPress={() => navigation.navigate('DiscountEdit', item )} style={styles.root}>
      
        <View style={{ alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
        <Text>{item.name}</Text> 
        <Text>{item.value}</Text> 
      
    </View>
        
        
    </Pressable>
  );
};



export default DiscountItem;
