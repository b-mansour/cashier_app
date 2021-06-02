import React from 'react';
import {  View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView , Pressable } from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import ProductItem from '../../components/ProductItem';
import {productContext} from '../../../App';
import {categoryContext} from '../../../App';
import {cartContext} from '../../../App';


 function HomeScreen({navigation}) {


  const productsData =  [
    {
      id: '1',
      name: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      avgRating: 4,
      ratings: 1325,
      price: 20.98,
      oldPrice: 24.06,
      categories: [5, 7],
    },
    {
      id: '2',
      name: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      avgRating: 4.8,
      ratings: 2989,
      price: 32.98,
      oldPrice: 34.06,
      categories: [2, 4, 6],
    },
    {
      id: '3',
      name: "shoes",
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
       
      avgRating: 3.8,
      ratings: 2989,
      price: 4206.9,
      categories: [2, 4, 5],
    },
    {
      id: '4',
      name: "nike shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      price: 99.98,
      oldPrice: 120.06,
      categories: [2, 5, 6],
    },
    {
      id: '5',
      name: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      avgRating: 4.8,
      ratings: 2989,
      price: 32.98,
      oldPrice: 34.06,
      categories: [2, 4, 6],
    },
    {
      id: '6',
      name: "puma shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
      categories: [1,5],
    },
    {
      id: '7',
      name: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      avgRating: 4,
      ratings: 1325,
      price: 20.98,
      oldPrice: 24.06,
      categories: [5, 7],
    },
  ];



  const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;

  const {category} = React.useContext(categoryContext);
  const [ categories, setCategories] = category;

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;



 
  const [selectedCategory, setSelectedCategory] = React.useState(null);
   


    function onSelectCategory(category) {
      //filter restaurant
      let productList = productsData.filter(a => a.categories.includes(category.id))
  
      setProducts(productList)
  
      setSelectedCategory(category)
  }



  function renderMainCategories() {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    paddingBottom: 6,
                    paddingHorizontal:6,
                    borderWidth: 2,
                    borderColor:'#12b520',
                    backgroundColor: (selectedCategory?.id == item.id) ? '#12b520' : '#fff',
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 2,
                    ...styles.shadow
                }}
                onPress={() => onSelectCategory(item)}
            >
                
                <Text
                    style={{
                        marginTop: 2,
                        color: (selectedCategory?.id == item.id) ?  '#fff' : '#12b520',
                        fontWeight:'bold'
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{padding:2}}>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: 4 }}
            />
        </View>
    )
}



  return (
    <ScrollView style={styles.page}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Pressable  onPress={() => navigation.toggleDrawer()}>
        <Feather style={{fontSize:30}} name="menu"></Feather>
        </Pressable>
   
       <Pressable onPress={() => {}}>
          <Ionicons style={{fontSize:25}} name="cart-outline">{cartItems.length}</Ionicons>
       </Pressable>
       
      </View>

       

      {renderMainCategories()}

      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem cartItems={cartItems} setCartItems={setCartItems} item={item} />}
        keyExtractor={(item, index) => item.id }
        numColumns={2}
        // horizontal 
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




export default  HomeScreen;
