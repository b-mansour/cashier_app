import React from 'react';
import { View, Text ,  StyleSheet,  TouchableOpacity, TextInput } from 'react-native';


export default function CartItemDetails({route}){
    return (
        <View>
          <Text>{route.params.name}</Text>  
          <Text>{route.params.quantity}</Text>
        </View>
    )
}
