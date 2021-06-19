import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
Alert,
TouchableOpacity,
Linking
} from 'react-native';
// import Camera from 'react-native-camera';
import {RNCamera}  from 'react-native-camera';
import QRCodeScanner from  "react-native-qrcode-scanner";
import { barcodeContext } from '../../../App';
import {productContext} from '../../../App';
import {cartContext} from '../../../App';
 






export default function BarcodeScanner({navigation}) {

  const {Barcode} = React.useContext(barcodeContext)
  const [ barcode, setBarcode] = Barcode;

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;

  const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;

     
   
   ifScanned = (e) => {

    // for (var j = 0; j < products.length; j++) {
    // for (var i = 0; i < cartItems.length; i++) {
   
    //       if (cartItems[i].barcode == e.data) {
    //          console.log('item found in the cart');
    //          cartItems[i].quantity +=1;
    //          break;
         
    //       } else if(products[j].barcode == e.data) {
    //         var cartItem = {
    //           id:product[j].id,
    //           name:product[j].name,
    //           image:product[j].image,
    //           price:product[j].image,
    //           quantity:product[j].quantity,
    //           barcode:product[j].barcode
    //         }
    //         setCartItems(currentItems => [...currentItems,cartItem]);
    //         console.log('item added to cart sucessfully');
    //         break;
    //       }
    //     }
    //   }
   
  
   
     var minato = false
     var cartItem = {};
     console.log( cartItems.length);
     for (var i=0; i < cartItems.length; i++ ){
           if(cartItems[i].barcode == e.data){

            console.log('item  found');
            minato=true;
            
            cartItems[i].quantity += 1
            break;
           }
          
        }
        console.log( e.data);
        
    console.log( minato);
    console.log(cartItems+ "******************************");

    var productExist = true;
     if (minato == false){
      for (var j = 0; j < products.length; j++) {
        if(products[j].barcode == e.data) {

          cartItem.id = products[j].id
          cartItem.name = products[j].name
          cartItem.image = products[j].image
          cartItem.price = products[j].price
          cartItem.quantity = products[j].quantity
          cartItem.barcode = products[j].barcode
          minato=true;
          break;
        }
      }
      if ( minato){
      setCartItems(currentItems => [...currentItems,cartItem]); 
      console.warn('item added to cart sucssfully');
      }
    }
    console.log( e.data);
        
    console.log( productExist);
    return;
    }
  

      return (
          <View>
              <QRCodeScanner
              containerStyle={{backgroundColor:'#fff'}}
              onRead={ifScanned}
              reactivate={true}
              permissionDialogMessage= 'need permission to access camera'
              reactivateTimeout={3000}
              fadeIn={false}
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
  


// export default class BarcodeScan extends Component {

    
// constructor(props) {
// super(props);
// this.handleTourch = this.handleTourch.bind(this);
// this.state = {
// torchOn: false
// }
// }


// onBarCodeRead = (e) => {
// Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
// }


// render() {

// return (
// <View style={styles.container}>
// <RNCamera
// style={styles.preview}
// torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}       
// onBarCodeRead={this.onBarCodeRead}
// ref={cam => this.camera = cam}
// captureAudio={false}
// aspect={Camera.constants.Aspect.fill}      
// >
// <Text style={{
// backgroundColor: 'white'
// }}>BARCODE SCANNER</Text>
// </RNCamera>
// <View style={styles.bottomOverlay}>
// <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
//     <Text>flash</Text>
// <Image style={styles.cameraIcon}
// source={this.state.torchOn === true ? require('../../images/flasher_on.png') : require('../../images/flasher_off.png')} />        
// </TouchableOpacity>
// </View>
// </View>
// )
// }
// handleTourch(value) {
// if (value === true) {
// this.setState({ torchOn: false });
// } else {
// this.setState({ torchOn: true });
// }
// }
// }
// const styles = StyleSheet.create({
// container: {
// flex: 1,
// flexDirection: 'row',
// },
// preview: {
// flex: 1,
// justifyContent: 'flex-end',
// alignItems: 'center'
// },
// cameraIcon: {
// margin: 5,
// height: 40,
// width: 40
// },
// bottomOverlay: {
// position: "absolute",
// width: "100%",
// flex: 20,
// flexDirection: "row",
// justifyContent: "space-between"
// },
// });