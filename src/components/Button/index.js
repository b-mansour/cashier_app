import React from 'react';
import { View, Text , TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from '../../assets/Colors'

export default function Button({onPress,title}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.checkout}>
             <Text style={{color:colors.primary, fontWeight:'bold', fontSize:17}}>{title}</Text>
           </TouchableOpacity>
    )
}




const styles = StyleSheet.create({

    checkout: {
      marginTop:20,
      alignSelf:'center',
       backgroundColor:colors.secondary,
        width:200, height:50, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
       
      }
  
  
  })
