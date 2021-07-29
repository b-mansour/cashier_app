import React from 'react';
import {View, Text,Pressable, StyleSheet } from 'react-native';
 


// const Stack = createStackNavigator();

function Settings({navigation}) {
    return (

     <View> 

      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Printer')}> 
       <Text style={{fontSize:20}}>الطابعة</Text>
      </Pressable>

      <Pressable style={styles.pressable} onPress = {() => navigation.navigate('QR')}> 
        <Text style={{fontSize:20}}> QR </Text>
      </Pressable>
      

      {/* <Pressable style={styles.pressable} onPress={() => navigation.navigate('General')}> 
       <Text style={{fontSize:20}}> General </Text>
      </Pressable> */}


      </View>
    
        
    )
}



const styles = StyleSheet.create({
    pressable: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal:5,
        height:50,
        borderColor: '#12b520',
        alignItems: 'center',
        justifyContent:'center'
      }
})

export default  Settings;
