import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text , FlatList, Pressable, StyleSheet , TouchableOpacity } from 'react-native';
 


// const Stack = createStackNavigator();

export default function Items({navigation}) {
    return (

<View style={{flexDirection:'row', flexWrap: "wrap", justifyContent:'center', marginTop:20}}> 
      

     
      <Pressable style={styles.root} onPress={() => navigation.navigate('Product')}> 
       <Text style={{fontSize:20, color:'#fff'}}>المنتجات</Text>
      </Pressable>
      

       

      <Pressable style={styles.root} onPress={() => navigation.navigate('Category')}> 
       <Text style={{fontSize:20, color:'#fff'}}>الفئات</Text>
      </Pressable>
    


    
    <Pressable style={styles.root} onPress={() => navigation.navigate('Discounts')}> 
       <Text style={{fontSize:20, color:'#fff'}}>الخصومات</Text>
      </Pressable>

      <Pressable style={styles.root} onPress={() => navigation.navigate("ProductDiscount")}> 
       <Text style={{fontSize:20, color:'#fff'}}>خصومات المنتجات</Text>
      </Pressable>
      
      


      </View>
    
        
    )
}


const styles = StyleSheet.create({
   
      root: {
          flexDirection: 'column',
          borderWidth: 1,
          borderColor: '#d1d1d1',
          borderRadius: 5,
          backgroundColor: '#b8b4b4',
          marginVertical: 5,
          marginHorizontal:5,
          height:150,
          width: 150,
          alignItems: 'center',
          justifyContent:'center'
          
        },
})
