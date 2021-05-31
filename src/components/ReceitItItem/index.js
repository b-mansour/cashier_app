import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


 

const ReceiptItem = ({item}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  return (

    <View style={styles.root}>
      <View
    //   style={{
    //     width: 30,
    //     height: 30, 
    //     margin: 5,
    //     borderRadius: 25,
    //     alignItems: "center",
        // justifyContent: "center",
    //     backgroundColor: '#cbd1cc',
        
    // }}
>
<Text>Bill</Text>
    </View>
        <View style={{ alignItems:'center'}}>
        <Text>{item.title}</Text> 
        <Text style={{fontWeight:'bold'}}>SR:{item.price}</Text>
    </View>
        
        
    </View>
  );
};



export default ReceiptItem;
