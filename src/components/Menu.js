import React from 'react';
import {Pressable} from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';

export default function Menu({navigation}) {
    return (
        <Pressable style={{marginLeft:10}}  onPress={() => navigation.toggleDrawer()}>
        <Feather style={{fontSize:30,color:'white'}} name="menu"></Feather>
        </Pressable>
    )
}
