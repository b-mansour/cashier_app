import React, {useEffect} from 'react';
import {  SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet,TextInput, Pressable,ActivityIndicator } from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import ProductItem from '../../components/ProductItem';
import {productContext} from '../../../App';
import {categoryContext} from '../../../App';
import {cartContext} from '../../../App';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../assets/Colors';


 function HomeScreen({navigation}) {


  const [productsData, setProductsData] = React.useState();
  const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;

  const {category} = React.useContext(categoryContext);
  const [ categories, setCategories] = category;

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;


//   async function getCategories() {
//     await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetSections/1')
//     .then((response) => response.json())
//     .then((json) => setCategories(json.response))
//     .catch((error) => console.error(error))
// }

async function getProducts() {
  await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
  .then((response) => response.json())
  .then((json) => setProductsData(json.response.productsList))
  .catch((error) => console.error(error))
}

// async function getProducts() {
//     await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
//     .then((response) => response.json())
//     .then((json) => setProducts(json.response.productsList))
//     .catch((error) => console.error(error))
// }

// async function getProducts() {
//     await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
//     .then((response) => response.json())
//     .then((json) => setProducts(json.response.productsList))
//     .catch((error) => console.error(error))
// }

    useEffect(() => {
       getProducts();
  }, []);



// function getAll() {
//  console.log(productList)
//     let productList =  productsData
//       setProductsData(productList)
//  }


  const [search, setSearch] = React.useState('');
  const filteredProducts = products.filter( i => i.name.toLowerCase().includes(search.toLowerCase()));


 
  const [selectedCategory, setSelectedCategory] = React.useState(null);
   


    function onSelectCategory(category) {
      //filter restaurant
      // let productList = category.id != -1 ? productsData.filter(a => a.categories.includes(category.id)) 
       let productList = category.id != -1 ? productsData.filter(a => a.sectionId == category.id) 
       : productsData.filter(a => a.sectionId) 
      // : productsData.filter(a => a.categories) 
      // setProducts(null)
      setProducts(productList)
      setSelectedCategory(category)
  }



  function renderMainCategories() {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    paddingBottom: 6,
                    paddingHorizontal:10,
                    borderWidth: 1,
                    borderColor:(selectedCategory?.id == item.id) ? colors.primary : colors.secondary,
                    backgroundColor: (selectedCategory?.id == item.id) ?  colors.primary : colors.secondary,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 3,
                    ...styles.shadow
                }}
                onPress={() => onSelectCategory(item)}
            >
                
                <Text
                    style={{
                        marginTop: 2,
                        color: (selectedCategory?.id == item.id) ?  '#454545' : '#fff',
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
                style={{alignSelf:'center'}}
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


      <View style={{ width: '30%',flexDirection:'row', justifyContent:'space-between'}}>
        <Pressable onPress={() => navigation.navigate('BarcodeScanner', )}> 
        <MaterialCommunityIcons style={{fontSize:25}} name="barcode-scan"></MaterialCommunityIcons>
        </Pressable>

   
       <Pressable onPress={() => navigation.navigate('CartStack')}>
          <Ionicons style={{fontSize:25}} name="cart-outline">{cartItems.length}</Ionicons>
       </Pressable>
       </View>
       
      </View>

       

      {renderMainCategories()}

      <TextInput
       
              placeholder='اسم المنتج'
              onChangeText={ text => setSearch(text)}
              style={styles.input}
             /> 
               
     <View style={{alignSelf:'center'}}>
          {/* Render Product Componet */}
      <FlatList
        // data={products}
        data={filteredProducts}
        renderItem={({item}) => <ProductItem cartItems={cartItems} setCartItems={setCartItems} item={item} />}
        keyExtractor={(item, index) => item.id }
        numColumns={5}
        // horizontal 
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height:250}}
      />
     </View>
   
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
      // shadowOffset: {
      //     width: 0,
      //     height: 3,
      // },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  },
  
  input: {
    width:'100%',
    height:40, 
    borderWidth:1,
    borderRadius:5,
    alignSelf:'center',
    borderColor: colors.primary,
    fontSize:20,
    color:'#000'
  
  }
  
  });
  




export default  HomeScreen;