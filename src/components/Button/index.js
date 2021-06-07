import React from 'react';
import { View, Text , TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({onPress,title}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.checkout}>
             <Text style={{color:'#fff'}}>{title}</Text>
           </TouchableOpacity>
    )
}




const styles = StyleSheet.create({

    checkout: {
      marginTop:20,
      alignSelf:'center',
       backgroundColor:'#12b520',
        width:200, height:50, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
       
      }
  
  
  })
