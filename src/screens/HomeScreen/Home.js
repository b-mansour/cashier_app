import React, {useEffect} from 'react';
import {  View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView , Pressable,ActivityIndicator } from 'react-native';
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
      price: 20.98,
      cost:15,
      categories: [5, 7],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '2',
      name: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 32.98,
      cost:20,
      categories: [2, 4, 6],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '3',
      name: "shoes",
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 46.9,
      cost:20,
      categories: [2, 4, 5],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '4',
      name: "nike shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 99.98,
      cost:70,
      categories: [2, 5, 6],
      quantity: 1,
      barcode:'123456789'
    },
    {
      id: '5',
      name: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 32.98,
      cost:20,
      categories: [2, 4, 6],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '6',
      name: "puma shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 99.98,
      cost: 16,
      categories: [1,5,6],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '7',
      name: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 20.98,
      cost: 16,
      categories: [5, 7],
      quantity: 1 ,
      barcode:'123456789'
    },
  ];




  const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;

  const {category} = React.useContext(categoryContext);
  const [ categories, setCategories] = category;

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;


  // const [isLoading, setIsLoading] = React.useState(true)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then( res => { return res.json()})
  //   .then( data => {
  //     console.log(data);
  //     setIsLoading(false)
  //   })
  // },[])



 
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
    <View style={styles.page}>

      {/* {isLoading && <ActivityIndicator size="large" color='#12b520'/>} */}
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Pressable  onPress={() => navigation.toggleDrawer()}>
        <Feather style={{fontSize:30}} name="menu"></Feather>
        </Pressable>
   
       <Pressable onPress={() => navigation.navigate('CartScreen')}>
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




export default  HomeScreen;
