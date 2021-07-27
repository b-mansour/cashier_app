import React, {useEffect} from 'react';
import { View,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/index';
import {Picker} from '@react-native-picker/picker';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

 function DiscountEdit({route, navigation}) {

   
    const [ id, setId] = React.useState(route.params.id);
    const [discountName, setDiscountName] = React.useState(route.params.name);
    const [ DiscountValue, setDiscountValue] = React.useState(route.params.value);


    const discountTypes = [
      {
         id: 1,
         type:'خصم مبلغ'
      },
      {
        id: 2,
        type:'خصم بالنسبة'
      }
              
     ];

    const [selectedOption, setSelectedOption] = React.useState(
      discountTypes ? discountTypes[0] : null,
      );




      const onDiscountEdit = () => {

        


        // const formData = new FormData();
        // const fileField = document.querySelector('input[type="file"]');
       var formData = {
                       "Id" : id, 
                       "Name" : discountName , 
                       "Discount1" : DiscountValue, 
                       "TypeId" : selectedOption.id
                      }

                      console.log(id)
                      console.log(discountName)
                      console.log(DiscountValue)
                      console.log(selectedOption)

                      
        // formData.append('name', name);
        // formData.append('image', image);
       
        
        fetch('https://cashierapi.ibtikar-soft.sa/api/Store/EditDiscount', {
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type':'application/json'
           },
       
          // body: formData
          body : JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
          navigation.goBack();
           
        })
        .catch(error => {
          console.error('Error:', error);
        });
        }

        
    

  useEffect(()=> {
    console.log(selectedOption)
  },[selectedOption])
    

    return (
      <View>

        <TextInput
            value={discountName} 
            placeholder='اسم الخصم'
            style={styles.input}
            onChangeText={ value =>  setDiscountName(value)}
             /> 

<Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {discountTypes.map( (option) => (
           <Picker.Item key={option.id}   label={option.type} value={option.id} />
        ))}
      </Picker>


         <TextInput
              value={DiscountValue}
            //   placeholder='قيمة الخصم'
            style={styles.input}
              keyboardType='numeric'
              onChangeText={ value =>  setDiscountValue(value)}
             />

       

           <Button onPress={onDiscountEdit} title='تعديل'/>


           <TouchableOpacity style={styles.footer} >
             <AntDesign style={{fontSize:25, color:'#FFF'}} name="delete"></AntDesign>
           </TouchableOpacity>
          
     </View>
    )
}


export default DiscountEdit;

const styles = StyleSheet.create({
  input: {
    marginTop:20,
    width:'90%',
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    borderColor:'#12b520',
    fontSize:20,
    color:'black',
},
footer: {
  // position:'absolute',
  // top:'90%',
  left:'80%',
  top: '80%',
  height: 40,
  width: 40,
  marginBottom:10,
  borderRadius:50,
  backgroundColor:'#9e0913',
  alignItems:'center',
  justifyContent:'center'
}

});

