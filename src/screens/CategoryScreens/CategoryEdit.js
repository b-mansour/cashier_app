import React from 'react';
import { View, Text ,  StyleSheet,  TouchableOpacity, TextInput } from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

function CategoryEdit({route}) {

    const [name, setName] = React.useState(route.params.name);
    const [description, setDescription] = React.useState(route.params.description);


    return (
    //     <View >
       

    // <Pressable style={{flex:1, justifyContent:'flex-end'}} >
    //     <Text>helloere</Text>
    //     <Text>helloere</Text>
    // </Pressable>


    //     </View>
    <View style={styles.container}>


        

    <View style={styles.contentContainer}> 

    <View> 
        <TextInput
              value={name} 
              style={styles.input}
              onChangeText={val => { setName(val)}}
             /> 
        
        <TextInput
              value={description}
              style={styles.input}
             />

         </View>

    </View>

    <TouchableOpacity style={styles.footer} >
<AntDesign style={{fontSize:25, color:'#FFF'}} name="delete"></AntDesign>
   
</TouchableOpacity>
</View>
    )
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },

    footer: {
        // position:'absolute',
        // top:'90%',
        left:'80%',
        height: 40,
        width: 40,
        marginBottom:10,
        borderRadius:50,
        backgroundColor:'#9e0913',
        alignItems:'center',
        justifyContent:'center'
    },

    

    input: {
        marginTop:20,
        width:'90%',
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        borderColor:'#12b520',
        fontSize:20

    }
});

export default CategoryEdit;
