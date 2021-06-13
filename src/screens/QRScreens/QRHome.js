import React from 'react';
import { Button, View, Text , FlatList, TouchableOpacity, StyleSheet, Alert,Linking } from 'react-native';
import QRCodeScanner from  "react-native-qrcode-scanner";

export default function QRHome() {

  const [barcode ,setBarcode] = React.useState();

 ifScanned = (e) => {
     Linking.openURL(e.data).catch(err => 
        Alert.alert('invalid qr code', e.data));
        setBarcode(e.data)
 }


    return (
        <View>
            <QRCodeScanner
            containerStyle={{backgroundColor:'#fff'}}
            onRead={ifScanned}
            reactivate={true}
            permissionDialogMessage= 'need permission to access camera'
            reactivateTimeout={10}
            showMarker={true}
            markerStyle= {{borderColor:'#fff', borderRadius:10}}
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                  <Text style={styles.buttonText}>OK Got it!</Text>
                </TouchableOpacity>
              }
              /> 
             <Text>{barcode}</Text>
        </View>
        
    )
}



const styles = StyleSheet.create({
    
    buttonText: {
      fontSize: 30,
      color: '#000'
    },
    buttonTouchable: {
      padding: 16
    }
  });



















 