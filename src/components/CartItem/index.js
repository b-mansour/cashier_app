import React from 'react';
import {View, Text, Pressable,Image, ScrollView, _ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'; 
import QuantitySelector from '../QuantitySelector';
 


 

const CartItem = ({item, cartItems}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  

  return (

<Pressable 
 onPress={() => navigation.navigate('CartItemDetails',item)}
 style={styles.root}>     
  <View style={{alignItems:'center' , flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row', margin:20}}>
      {/* <Text style={{fontSize:20}}> {item.name} X </Text> 
      <Text style={{fontSize:20}}>{item.quantity}</Text> */}
      <Text style={{fontSize:20}}>{item.Quantity}</Text>
    </View>
    <View>
            {/* <Image style={styles.image} source={{uri: item.image}}/> */}
    </View>
  
    <View>
           {/* <Text  style={{fontSize:20}}>{item.price * item.quantity}</Text> */}
           <Text style={{fontSize:20}}>{item.UnitPrice * item.Quantity}</Text>
    </View>

        {/* <QuantitySelector/> */}

 </View>
</Pressable> 
        
        
  
  );
};



export default CartItem;





{/* <View style={{alignItems:'center' , flexDirection:'row', justifyContent:'space-between'}}>

{item.hasOwnProperty('quantity')? ( <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:20}}>  {item.name}  </Text> 
  <Text style={{fontSize:20}}> x {item.quantity}</Text>
</View>) : (
     <Text style={{fontSize:20}}>  {item.name}  </Text> 
)}
<View>
        <Image style={styles.image} source={{uri: item.image}}/>
</View>

<View>
  {item.hasOwnProperty('quantity')? (<View> 
       <Text style={{fontSize:20}}>{item.price * item.quantity}</Text>
       <Text  style={{fontSize:20}}>{item.price}</Text>
        
       </View>
       ):( <View>  
       <Text  style={{fontSize:20}}>{item.price}</Text>
       <Text  style={{fontSize:20 , color:'black'}}>{item.barcode}</Text></View>

       )}
      
</View>

 

</View> */}
