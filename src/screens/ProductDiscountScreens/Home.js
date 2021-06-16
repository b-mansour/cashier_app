import React from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Button from './../../components/Button/index';
import {categoryContext} from '../../../App';
import {productContext} from '../../../App';
import {discountContext} from '../../../App';

export default function Home() {

    



    const {category} = React.useContext(categoryContext);
    const [ categories, setCategories] = category;

      const [selectedCategory, setSelectedCategory] = React.useState(
        categories ? categories[0] : null,
      );


      const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;

      const [selectedProduct, setSelectedProduct] = React.useState(
        products ? products[0] : null,
      );

      const {discount} = React.useContext(discountContext);
    const [ discounts, setDiscounts] = discount;

      const [selectedDiscount, setSelectedDiscount] = React.useState(
        discounts ? discounts[0] : null,
      );

      const [numOfDays, setNumOfDays] = React.useState();

      // const [selectedOption, setSelectedOption] = React.useState(
      //   categories ? categories[0] : null,
      // );
    return (
        <View>

        <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:5}}>
       <Picker
        style={{marginBottom:20}}
        selectedValue={selectedCategory}
        onValueChange={itemValue => setSelectedCategory(itemValue)}>
        {categories.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker>
      </View>

      <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:5}}>
      <Picker
        style={{marginBottom:20}}
        selectedValue={selectedProduct}
        onValueChange={itemValue => setSelectedProduct(itemValue)}>
        {products.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker>
      </View>


      <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:5}}>
      <Picker
        selectedValue={selectedDiscount}
        onValueChange={itemValue => setSelectedDiscount(itemValue)}>
        {discounts.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
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

             <Button title='حفظ'></Button>
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