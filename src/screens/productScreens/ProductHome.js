import React , {useEffect}from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity,TextInput} from 'react-native';
import ProductHomeItem from '../../components/ProductHomeItem';
import {productContext} from '../../../App';
import {categoryContext} from '../../../App';
import {colors} from '../../assets/Colors';


 

export default function ProductHome({navigation}) {

      

      const [productsData, setProductsData] = React.useState([]);
     
      const [ products, setProducts] = React.useState([]);
      const [categories, setCategories] = React.useState([]);

      
    

      const [search, setSearch] = React.useState('');
      const filteredProducts = products.filter( i => i.name.toLowerCase().includes(search.toLowerCase()));

      const [selectedCategory, setSelectedCategory] = React.useState(null);

       
      function onSelectCategory(category) {
       
         let productList = category.id != -1 ? productsData.filter(a => a.sectionId == category.id) 
         : productsData.filter(a => a.sectionId) 
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


  async function getProducts() {
    let isMounted = true;               
    fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
    .then((response) => response.json())
    .then((json) => { if(isMounted) setProductsData(json.response.productsList)})
    .catch((error) => console.error('Error:' + error))
    return () => { isMounted = false }; 
  }

  async function getCategories() {
    let isMounted = true;               
    fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
    .then((response) => response.json())
    .then((json) => { if(isMounted) setCategories(json.response.sectionList)})
    .catch((error) => console.error('Error:' + error))
    return () => { isMounted = false }; 
  }

   
    useEffect(() => {
      getProducts();
      getCategories();
      let isMounted = true;               
      fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
      .then((response) => response.json())
      .then((json) => { if(isMounted) setProducts(json.response.productsList)})
      .catch((error) => console.error('Error:' + error))
      return () => { isMounted = false }; 
    },[]);                               

    
    return (
<View style={styles.page}>
<TextInput
       
       placeholder='اسم المنتج'
       onChangeText={ text => setSearch(text)}
       style={styles.input}
      /> 
<View>{renderMainCategories()}</View>
 
        {/* Render Product Componet */}
        <FlatList
          style={{alignSelf:'center'}}
          data={filteredProducts}
          renderItem={({item}) => <ProductHomeItem item={item}/>}
          keyExtractor={(item, index) => item.id }
          numColumns={5}
          // horizontal 
          // showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View />}
        ListFooterComponentStyle={{height:100}}
        />
      </View>
    )
}


const styles = StyleSheet.create({
    page: {
      padding: 10,
      justifyContent:'center',
       
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
  
  
