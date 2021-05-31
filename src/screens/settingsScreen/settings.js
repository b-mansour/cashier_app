import React from 'react'; 
import { Button, View, Text , FlatList, Pressable, StyleSheet } from 'react-native';

function settingsScreen({navigation}) {
    return (

        <View>
        <Pressable    onPress={() => navigation.navigate('Home')}  style={styles.container} >
            <Text>Printers</Text>
        </Pressable>

        <Pressable style={styles.container}>
            <Text>General</Text>
        </Pressable>      
    </View>
    )
}



const styles = StyleSheet.create({

    container:  { flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius:10,
    height:50,
    justifyContent: 'center',
    paddingLeft: 30,
    backgroundColor: '#bfc6c7',
    marginVertical: 5,
    marginHorizontal:5
}

})



export default  settingsScreen; 
