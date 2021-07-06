import React,  {useEffect} from 'react';
import { Button, View, Text , FlatList } from 'react-native';
import ReceiptItem from '../../components/ReceitItItem/index';
import {productContext} from '../../../App';
// import {receiptContext} from '../../../App';



function  ReceiptHome({ navigation }) {



  // const {product} = React.useContext(productContext);
  // const [ products, setProducts] = product;

  const [bills, setBills] = React.useState()

    useEffect(() => {
          let isMounted = true;               
          fetch('https://cashierapi.ibtikar-soft.sa/api/Bills/GetBills/1/107375')
          .then((response) => response.json())
          .then((json) => { if(isMounted) setBills(json.response)})
          .catch((error) => console.error('Error:' + error))
          return () => { isMounted = false; console.log(bills) }; 
        },[]);                               


  // const {Receipt} = React.useContext(receiptContext);
  // const [receipts, setReceipts] = Receipt;


  return (

  <View> 
       <FlatList
        data={bills}
        renderItem={({item}) => <ReceiptItem navigation={navigation} item={item} />}
        keyExtractor={(item, index) => item.billNo}
        // horizontal 
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      />
  </View>
  );
}
export default ReceiptHome;





  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
    //   <Button onPress={() => navigation.goBack()} title="Go back home" />
    // </View>


 
