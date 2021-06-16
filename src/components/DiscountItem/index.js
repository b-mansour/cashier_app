import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


 

const DiscountItem = ({item}) => {

  
  const navigation = useNavigation();

   

  return (

    <Pressable onPress={() => navigation.navigate('DiscountEdit', item )} style={styles.root}>
      
        <View style={{ alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
        <Text  style={{fontSize:15}}>{item.name}</Text> 
        <Text  style={{fontWeight:'bold'}}>{item.value}</Text> 
        <MaterialCommunityIcons style={{fontSize:25, color:'red'}} name="delete"></MaterialCommunityIcons>
      
    </View>
        
        
    </Pressable>
  );
};



export default DiscountItem;
