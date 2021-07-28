import React, {useEffect} from 'react';
import { View,FlatList} from 'react-native';
import CategoryItem from '../../components/CategoryItem'
import {categoryContext} from '../../../App';





function CategoryHome({navigation}) {

  const [categories, setCategories ] = React.useState();

   

      useEffect(() => {
          let isMounted = true;               
          fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetSections/1')
          .then((response) => response.json())
          .then((json) => { if(isMounted) setCategories(json.response)})
          .catch((error) => console.error('Error:' + error))
          return () => { isMounted = false }; 
        },[categories]);                               

      
  

  // const {category} = React.useContext(categoryContext);
  // const [ categories, setCategories] = category;

    return (
        <View style={{alignItems:'center', marginTop:20}}>
           <FlatList
            data={categories}
            renderItem={({item}) => <CategoryItem item={item}/>}
            keyExtractor={(item, index) => item.id }
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
          </View>
    )
}

export default CategoryHome;
