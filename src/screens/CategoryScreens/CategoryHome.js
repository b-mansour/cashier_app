import React from 'react';
import { View, Text, Pressable, StyleSheet,FlatList, Button } from 'react-native';
import Categoryitem from '../../components/CategoryItem'
import {categoryContext} from '../../../App';



function CategoryHome({navigation}) {

  const {category} = React.useContext(categoryContext);
  const [ categories, setCategories] = category;

    return (
        <View>
        {/* <Text style={{fontSize:50, color:'#12b520'}}>Categories</Text> */}
           <FlatList
            data={categories}
            renderItem={({item}) => <Categoryitem item={item}/>}
            keyExtractor={(item, index) => item.id }
            // horizontal 
            // showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={false}
          />

<Button
        title="create new category"
         onPress={() =>  navigation.navigate('CategoryCreate')}
        
      />
      </View>
    )
}

export default CategoryHome;
