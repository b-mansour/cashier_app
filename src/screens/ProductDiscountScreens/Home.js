import React from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';
import {categoryContext} from '../../../App';
import {Picker} from '@react-native-picker/picker';
import Button from './../../components/Button/index';

export default function Home() {



    const {category} = React.useContext(categoryContext);
    const [ categories, setCategories] = category;

    const [selectedOption, setSelectedOption] = React.useState(
        categories ? categories[0] : null,
      );
    return (
        <View>

        <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:10}}>
       <Picker
        style={{marginBottom:20}}
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {categories.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker>
      </View>

      <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:10}}>
      <Picker
        style={{marginBottom:20}}
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {categories.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker>
      </View>


      <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:10}}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {categories.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker>
      </View>

      <View style={{margin:20, height:60, borderWidth:2, borderColor:'#8f8b8b', borderRadius:10}}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {categories.map( option => (
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker>

      {/* <TextInput
              value='hello'
              placeholder='سعر التكلفة'
              onChangeText={ value => setCost(value)}
              style={styles.input}
              keyboardType='numeric'
             /> */}

             <Button title='حفظ'></Button>

      

      </View>


        </View>
    )
}



const styles =   StyleSheet.create({
    input: {
      marginTop:20,
      width:200,
      height:100,
      borderWidth:1,
      borderRadius:10,
      alignSelf:'center',
      borderColor:'#12b520',
      fontSize:20,
      color:'black'
  }
  });