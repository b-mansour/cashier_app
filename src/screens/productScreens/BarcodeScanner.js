import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
Alert,
TouchableOpacity,
Image
} from 'react-native';
// import Camera from 'react-native-camera';
import {RNCamera}  from 'react-native-camera';
import {barcodeContext} from './ProductCreate';



// function BarcodeScanner({navigation}){

// const [torch,setTorch] = React.useState(false);




// const {barCode} = React.useContext(barcodeContext);
// const [ barcode, setBarcode] = barCode;


//  const handleTourch = (value) => {
//     if (value === true) {
//     setTorch(false);
//     } else {
//     setTorch(true);
//     }
//     }

// const  onBarCodeRead = (e) => {
//     Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
//     setBarcode(e.data)
//     navigation.goBack();
//     }

//     return (
//         <View style={styles.container}>
//         <RNCamera
//         style={styles.preview}
//         torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
//         onBarCodeRead={onBarCodeRead}
//         ref={cam => this.camera = cam}
//         captureAudio={false}
//         aspect={Camera.constants.Aspect.fill}
//         >
//         <Text style={{
//         backgroundColor: 'white'
//         }}>BARCODE SCANNER</Text>
//         </RNCamera>
//         <View style={styles.bottomOverlay}>
//         <TouchableOpacity onPress={handleTourch(torch)}>
//             <Text>flash</Text>
//         <Image style={styles.cameraIcon}
//         source={this.state.torchOn === true ? require('../../images/flasher_on.png') : require('../../images/flasher_off.png')} />
//         </TouchableOpacity>
//         </View>
//         </View>
//         )
    
//   }

//   export default BarcodeScanner;







export default class BarcodeScan extends Component {

    // static Barcode = barcodeContext;
constructor(props) {
super(props);
this.handleTourch = this.handleTourch.bind(this);
this.state = {
torchOn: false
}
}


onBarCodeRead = (e) => {
Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
}


render() {

    // const {Barcode} = React.useContext(barcodeContext);
    // const [ barcode, setBarcode] = Barcode;





return (
<View style={styles.container}>
<RNCamera
style={styles.preview}
// torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}       
onBarCodeRead={this.onBarCodeRead}
ref={cam => this.camera = cam}
captureAudio={false}
// aspect={Camera.constants.Aspect.fill}      
>
<Text style={{
backgroundColor: 'white'
}}>BARCODE SCANNER</Text>
</RNCamera>
<View style={styles.bottomOverlay}>
<TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
    <Text>flash</Text>
{/* <Image style={styles.cameraIcon}
source={this.state.torchOn === true ? require('../../images/flasher_on.png') : require('../../images/flasher_off.png')} />         */}
</TouchableOpacity>
</View>
</View>
)
}
handleTourch(value) {
if (value === true) {
this.setState({ torchOn: false });
} else {
this.setState({ torchOn: true });
}
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'row',
},
preview: {
flex: 1,
justifyContent: 'flex-end',
alignItems: 'center'
},
cameraIcon: {
margin: 5,
height: 40,
width: 40
},
bottomOverlay: {
position: "absolute",
width: "100%",
flex: 20,
flexDirection: "row",
justifyContent: "space-between"
},
});