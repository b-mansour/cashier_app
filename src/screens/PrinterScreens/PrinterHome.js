import React , {useState, useEffect} from 'react';
import {View, Text,TouchableOpacity } from 'react-native';
import {
    USBPrinter,
    NetPrinter,
    BLEPrinter,
  } from "react-native-thermal-receipt-printer";

  

  export default function PrinterHome() {


    const [printers, setPrinters] = useState([]);
    const [currentPrinter, setCurrentPrinter] = useState();
  
    useEffect(() => {
      BLEPrinter.init().then(()=> {
        BLEPrinter.getDeviceList().then(setPrinters);
      });
      

    }, []);
  
    _connectPrinter => (printer) => {
      //connect printer
      BLEPrinter.connectPrinter(printer.inner_mac_address).then(
        setCurrentPrinter,
        error => console.warn(error) 
      )
    }
  
    var printTextTest = () => {
      currentPrinter && USBPrinter.printText("<C>sample text</C>\n");
    }
  
    var printBillTest = () => {
      currentPrinter && BLEPrinter.printBill("<C>sample bill</C>");
    }
  

  
    return (
      <View>
        {
           printers.map(printer => (
            <TouchableOpacity key={printer.inner_mac_address} onPress={() => _connectPrinter(printer)}>
              {`device_name: ${printer.device_name}, inner_mac_address: ${printer.inner_mac_address}`}
            </TouchableOpacity>
            ))
        }
        <TouchableOpacity onPress={printTextTest}>
          <Text>Print Text</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={printBillTest}>
          <Text>Print Bill Text</Text>
        </TouchableOpacity>
      </View>
    )
    }



























// import React from 'react';
// import {Button, View, Text , FlatList, Pressable, StyleSheet} from 'react-native';
// import AntDesign  from 'react-native-vector-icons/AntDesign';
// export default function PrinterHome() {
//     return (
//         <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>

//             <AntDesign style={{fontSize:70, color:"gray"}} name="printer"></AntDesign>
//             <Text> Sorry No Available Printers</Text>
//         </View>
//     )
// }
