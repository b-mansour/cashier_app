import React,{useEffect} from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Button from './../../components/Button/index';
import {categoryContext} from '../../../App';
import {productContext} from '../../../App';
import {discountContext} from '../../../App';
import {cashierContext} from '../../../App';

export default function Home({navigation}) {

    



    // const {category} = React.useContext(categoryContext);
    // const [ categories, setCategories] = category;

    //   const [selectedCategory, setSelectedCategory] = React.useState(
    //     categories ? categories[0] : null,
    //   );


      const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;

      const [selectedProduct, setSelectedProduct] = React.useState(
        products ? products[1] : null,
      );

      const {discount} = React.useContext(discountContext);
    const [ discounts, setDiscounts] = discount;

      const [selectedDiscount, setSelectedDiscount] = React.useState(
        discounts ? discounts[0] : null,
      );

       const {cashier} = React.useContext(cashierContext);
      const [ cashierNo, setCashierNo] = cashier;

      const [numOfDays, setNumOfDays] = React.useState();

      // const [selectedOption, setSelectedOption] = React.useState(
      //   categories ? categories[0] : null,
      // );


 const onProductDiscountCreate = () => {


        // const formData = new FormData();
        // const fileField = document.querySelector('input[type="file"]');
       var formData = {
                      "ProductId" :  selectedProduct, 
                      "DiscountId" :selectedDiscount, 
                      "Periode" :numOfDays, 
                      "CashierNo" : cashierNo, 
                      "ShopId" : 1
                    }


        // formData.append('name', name);
        // formData.append('image', image);
        console.log(selectedProduct)
        
        fetch('https://cashierapi.ibtikar-soft.sa/api/Store/NewProductDiscount', {
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type':'application/json'
           },
       
          // body: formData
          body : JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
          navigation.goBack();
           
        })
        .catch(error => {
          console.error('Error:', error);
        });

        }

        useEffect(() => {
          console.log(selectedDiscount)
        },[selectedDiscount])


    return (
        <View>

        {
        /* <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:5}}>
        <Picker
        style={{marginBottom:20}}
        selectedValue={selectedCategory}
        onValueChange={itemValue => setSelectedCategory(itemValue)}>
        {categories.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
        </Picker>
        </View> */
        }

      <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:5}}>
      <Picker
        style={{marginBottom:20}}
        selectedValue={selectedProduct}
        onValueChange={itemValue => setSelectedProduct(itemValue)}>
        {products.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.id}/>
        ))}
      </Picker>
      </View>


      <View style={{
        
        margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:5}}>
      <Picker
        selectedValue={selectedDiscount}
        onValueChange={itemValue => setSelectedDiscount(itemValue)}>
        {discounts.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.id} />
        ))}
      </Picker>
      </View>

      <View >
      {/* <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {categories.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker> */}

      <TextInput
              value={numOfDays}
              placeholder='عدد ايام الخصم'
              onChangeText={ value => setNumOfDays(value)}
              style={styles.input}
              keyboardType='numeric'
             />

             <Button title='حفظ' onPress={onProductDiscountCreate}></Button>
      </View>


        </View>
    )
}



const styles =   StyleSheet.create({
    input: {
      marginTop:20,
      width:200,
      height:50,
      borderWidth:1,
      borderRadius:5,
      alignSelf:'center',
      borderColor:'#8f8b8b',
      fontSize:20,
      color:'black'
  }
  });