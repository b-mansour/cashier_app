import React from 'react';
import { Button, View, Text , FlatList } from 'react-native';
import ReceiptItem from '../../components/ReceitItItem/index';
import {productContext} from '../../../App';



function  ReceiptScreen({ navigation }) {



  const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;


  return (

  <View>
    <Text style={{fontSize:50, color:'#12b520'}}>Receipts</Text>
       <FlatList
        data={products}
        renderItem={({item}) => <ReceiptItem item={item} />}
        keyExtractor={(item, index) => item.id }
        // horizontal 
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      />
  </View>
  );
}
export default ReceiptScreen;





  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
    //   <Button onPress={() => navigation.goBack()} title="Go back home" />
    // </View>


 
