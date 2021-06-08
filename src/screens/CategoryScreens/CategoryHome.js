import React from 'react';
import { View, Text, Pressable, StyleSheet,FlatList, Button } from 'react-native';
import CategoryItem from '../../components/CategoryItem'
import {categoryContext} from '../../../App';



function CategoryHome({navigation}) {

  const {category} = React.useContext(categoryContext);
  const [ categories, setCategories] = category;

    return (
        <View style={{alignItems:'center', marginTop:20}}>
           <FlatList
            data={categories}
            renderItem={({item}) => <CategoryItem item={item}/>}
            keyExtractor={(item, index) => item.id }
            numColumns={3}
          />
          </View>
    )
}

export default CategoryHome;
