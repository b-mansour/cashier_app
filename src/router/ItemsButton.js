import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text , FlatList, Pressable, StyleSheet } from 'react-native';
 


// const Stack = createStackNavigator();

export default function ItemsButton({navigation}) {
    return (

     <View> 
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Product')}> 
       <Text style={{fontSize:20}}>Products</Text>
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Category')}> 
       <Text style={{fontSize:20}}>Categories</Text>
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Discounts')}> 
       <Text style={{fontSize:20}}>Discounts</Text>
      </Pressable>
      </View>
      

      

        
            // <Stack.Navigator>

            //   <Stack.Screen name="ItemsHome" component={Home} />
            //   <Stack.Screen name="Notifications" component={Notifications} />
            //   <Stack.Screen name="Profile" component={Profile} />
            //   <Stack.Screen name="Settings" component={Settings} />


            // </Stack.Navigator>
        
    )
}



const styles = StyleSheet.create({
    pressable: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#d1d1d1',
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
