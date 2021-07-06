import React, {useEffect} from 'react';
import { View , Text} from 'react-native'; 
import QRCode from 'react-native-qrcode-svg';

export default function ReceiptDetails({route}) {


const [billDetails, setBillDetails] = React.useState();

async function getBillDetails() {
  await fetch('https://cashierapi.ibtikar-soft.sa/api/Bills/GetBillProducts/' + route.params.billNo)
  .then((response) => response.json())
  .then((json) => setBillDetails(json.response))
  .catch((error) => console.error(error))
}

useEffect(() => {
      getBillDetails();
      console.log(billDetails)
    },[]);




    return (
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <Text style={{alignSelf:'center'}}>Shop Name</Text>

        <View style={{flexDirection:'row', justifyContent:'center'}}> 
        <View style={{flexDirection:'column', margin:30}}>
            <Text>رقم الفاتورة : 384348</Text>
            <Text>الرقم الضريبي : 384348</Text>
            <Text> {route.params.billNo}</Text>
        </View>
        <View style={{flexDirection:'column',margin:30}}>
            <Text>رقم الكاشير : 384348</Text>
            <Text> التاريخ : 2021/06/20</Text>
            </View>
        </View>

        <View style={{flexDirection:'row'}}>


            <View style={{flexDirection:'column', marginRight:20, marginLeft:20 , alignItems:'center'}}>
                
            
            </View>

           
          

        </View>



       

 
<View style={{marginTop:50,alignSelf:'center'}}>
<QRCode
      value="http://awesome.link.qr"
    />
</View>

 
   
</View>


       
    )
}



  