import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text , FlatList, Pressable, StyleSheet } from 'react-native';
 


// const Stack = createStackNavigator();

export default function Items({navigation}) {
    return (

<View style={{flexDirection:'row', flexWrap: "wrap", justifyContent:'center', marginTop:20}}> 
      

     
      <Pressable style={styles.root} onPress={() => navigation.navigate('Product')}> 
       <Text style={{fontSize:20, color:'#fff'}}>Products</Text>
      </Pressable>
      

       

      <Pressable style={styles.root} onPress={() => navigation.navigate('Category')}> 
       <Text style={{fontSize:20, color:'#fff'}}>Categories</Text>
      </Pressable>
    


    
    <Pressable style={styles.root} onPress={() => navigation.navigate('Discounts')}> 
       <Text style={{fontSize:20, color:'#fff'}}>Discounts</Text>
      </Pressable>
      


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
      },

       
      root: {
          flexDirection: 'column',
          borderWidth: 1,
          borderColor: '#d1d1d1',
          borderRadius: 10,
          backgroundColor: '#12b520',
          marginVertical: 5,
          marginHorizontal:5,
          height:150,
          width: 150,
          alignItems: 'center',
          justifyContent:'center'
          
        },
})
