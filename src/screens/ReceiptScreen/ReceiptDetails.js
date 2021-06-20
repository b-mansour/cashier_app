import React from 'react';
import { View , Text} from 'react-native'; 

import Barcode from "react-native-barcode-builder";

export default function ReceiptDetails() {
    return (
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <Text style={{alignSelf:'center'}}>Shop Name</Text>

        <View style={{flexDirection:'row', justifyContent:'center'}}> 
        <View style={{flexDirection:'column', margin:30}}>
            <Text>رقم الفاتورة : 384348</Text>
            <Text>الرقم الضريبي : 384348</Text>
        </View>
        <View style={{flexDirection:'column',margin:30}}>
            <Text>رقم الكاشير : 384348</Text>
            <Text> التاريخ : 2021/06/20</Text>
            </View>
        </View>

        <View style={{flexDirection:'row'}}>


            <View style={{flexDirection:'column', marginRight:20, marginLeft:20 , alignItems:'center'}}>
                
            <Text>
            final price 
            </Text>
            <Text>
               600
            </Text>
            </View>

            <View style={{flexDirection:'column', marginRight:20, marginLeft:20 , alignItems:'center'}}>

            <Text>
              DiscountPrice
            </Text>
            <Text>
                200
            </Text>
            </View>

            <View style={{flexDirection:'column', marginRight:20, marginLeft:20, alignItems:'center'}}>

            <Text>
            quantity
            </Text>
            <Text>
            5
            </Text>
            </View>

            <View style={{flexDirection:'column', marginRight:20, marginLeft:20, alignItems:'center'}}>

            <Text>
             product
              </Text>
             <Text>
                apple
                </Text>
               </View>

        </View>



        <View style={{flexDirection:'row'}}>


<View style={{flexDirection:'column', marginRight:20, marginLeft:20 , alignItems:'center'}}>

<Text>
final price 
</Text>
<Text>
   600
</Text>
</View>

<View style={{flexDirection:'column', marginRight:20, marginLeft:20 , alignItems:'center'}}>

<Text>
  DiscountPrice
</Text>
<Text>
    200
</Text>
</View>

<View style={{flexDirection:'column', marginRight:20, marginLeft:20, alignItems:'center'}}>

<Text>
quantity
</Text>
<Text>
5
</Text>
</View>

<View style={{flexDirection:'column', marginRight:20, marginLeft:20, alignItems:'center'}}>

<Text>
 product
  </Text>
 <Text>
    apple
    </Text>
   </View>

 



</View>



<View style={{flexDirection:'row'}}>


<View style={{flexDirection:'column', marginRight:20, marginLeft:20 , alignItems:'center'}}>

<Text>
final price 
</Text>
<Text>
   600
</Text>
</View>

<View style={{flexDirection:'column', marginRight:20, marginLeft:20 , alignItems:'center'}}>

<Text>
  DiscountPrice
</Text>
<Text>
    200
</Text>
</View>

<View style={{flexDirection:'column', marginRight:20, marginLeft:20, alignItems:'center'}}>

<Text>
quantity
</Text>
<Text>
5
</Text>
</View>

<View style={{flexDirection:'column', marginRight:20, marginLeft:20, alignItems:'center'}}>

<Text>
 product
  </Text>
 <Text>
    apple
    </Text>
   </View>

</View>

<View style={{flexDirection:'column', marginRight:20, marginLeft:20, alignItems:'center', top:'20%'}}>

<Text>
 الضريبة: 79784
  </Text>
 <Text>
   اجمالي السعر + الضريبة : 3473843847
    </Text>
 
<Text style={{marginTop:50,alignSelf:'center'}}>
    <Barcode  width='1.2'  value="Hello world" format="CODE128" />
</Text>

 
   
</View>


        </View>
    )
}
