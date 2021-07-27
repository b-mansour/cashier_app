import React, {useEffect} from 'react';
import { View , Text, FlatList} from 'react-native'; 
import QRCode from 'react-native-qrcode-svg';


function ReceiptDetails({route}) {


const [billDetails, setBillDetails] = React.useState();


function renderMainCategories() {
    const renderItem = ({item}) => {
        return (
            <View>
                <Text style={{fontSize:20, color:'black'}}>
                    {item.unitPrice}
                    {item.productId}
                    {item.id}
                </Text>
            </View>
        )
    }

    return (
        <View style={{padding:2, flex:1}}>
            <FlatList
                data={billDetails}
                contentContainerStyle={{paddingBottom:50}}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: 4 }}
            />
        </View>
    )
}

    useEffect(() => {
        let isMounted = true;               
        fetch('https://cashierapi.ibtikar-soft.sa/api/Bills/GetBillProducts/'+route.params.billNo)
        .then((response) => response.json())
        .then((json) => { if(isMounted) setBillDetails(json.response)})
        .catch((error) => console.error('Error:' + error))
        return () => { isMounted = false;  console.log(billDetails);console.log(route.params.billNo) }; 
      },[]);                               




    return (
    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 

          

            <Text style={{alignSelf:'center'}}>Shop Name</Text>
            
    
    {renderMainCategories()}
        {renderMainCategories()}
 
<View style={{marginTop:50,alignSelf:'center'}}>
<QRCode
      value="http://awesome.link.qr"
    />
</View>

</View>   
    )
}


export default ReceiptDetails;



  


    /* <View style={{flexDirection:'row', justifyContent:'center'}}> 
        <View style={{flexDirection:'column', margin:30}}>
            <Text>رقم الفاتورة : 384348</Text>
            <Text>الرقم الضريبي : 384348</Text>
            <Text> {route.params.billNo}</Text>
        </View>
        <View style={{flexDirection:'column',margin:30}}>
            <Text>رقم الكاشير : 384348</Text>
            <Text> التاريخ : 2021/06/20</Text>
            </View>
        </View> */