import React from 'react';
import { Button, View, FlatList, Pressable, StyleSheet, ScrollView} from 'react-native';
import ProductHomeItem from '../../components/ProductHomeItem';
import {productContext} from '../../../App';

export default function ProductHome({navigation}) {

      const {product} = React.useContext(productContext);
      const [ products, setProducts] = product;
    

    return (
<ScrollView style={styles.page}>

<Button
        title="create new product"
         onPress={() =>  navigation.navigate('اضافة منتج جديد')}
        
      />
  
  
        {/* Render Product Componet */}
        <FlatList
          data={products}
          renderItem={({item}) => <ProductHomeItem item={item} />}
          keyExtractor={(item, index) => item.id }
          numColumns={2}
        //   horizontal 
          // showsHorizontalScrollIndicator={false}
          // showsVerticalScrollIndicator={false}
        />
      
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    
    container: {
      flex: 1,
      backgroundColor: 'gray'
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  }
  });
  
  
