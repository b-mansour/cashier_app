import React from 'react';
import { Button, View, FlatList, Pressable, StyleSheet, ScrollView, Text} from 'react-native';
import ProductHomeItem from '../../components/ProductHomeItem';
import {productContext} from '../../../App';
 

export default function ProductHome({navigation}) {

      const {product} = React.useContext(productContext);
      const [ products, setProducts] = product;


      // const [ products, setProducts] = React.useState();

    // useEffect(() => {
    //   fetch('https://reactnative.dev/movies.json')
    //     .then((response) => response.json())
    //     .then((json) => setProducts(json.movies))
    //     .catch((error) => console.error(error))
    //     .finally(() => setLoading(false));
    // }, []);
    

    return (
<View style={styles.page}>
        {/* Render Product Componet */}
        <FlatList
          data={products}
          renderItem={({item}) => <ProductHomeItem item={item}/>}
          keyExtractor={(item, index) => item.id }
          numColumns={2}
        //   horizontal 
          // showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  
  
