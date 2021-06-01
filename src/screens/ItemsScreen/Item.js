import React from 'react';
import { View, Text , Pressable, StyleSheet } from 'react-native';
import {productContext} from '../../../App';
import {categoryContext} from '../../../App';
 
function ItemsScreen({navigation}) {

    const {product} = React.useContext(productContext);
    const [ products, setProducts] = product;
  
    const {category} = React.useContext(categoryContext);
    const [ categories, setCategories] = category;


    return (
        <View>




               
        


            <Pressable onPress={() => navigation.navigate('Home')}  style={styles.container} >
                <Text>Items</Text>
            </Pressable> 

            <Pressable style={styles.container}>
                <Text>categories</Text>
            </Pressable>
            
            <Pressable style={styles.container}>
                <Text>Discount</Text>
            </Pressable>




              
            
        </View>
    )
}

export default ItemsScreen;



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
