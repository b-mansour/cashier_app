import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native'


export default function AddButton({navigation,routeName}) {
    return (
        <Pressable
         onPress={() =>  navigation.navigate(routeName)}
         style={{height:30, width:30, backgroundColor:'#fff', marginRight:20}}
       >
      <AntDesign style={{fontSize:30,color:'#000'}} name="pluscircleo"></AntDesign>

</Pressable>
    )
}
