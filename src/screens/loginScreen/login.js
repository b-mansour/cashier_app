import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import {cashierContext} from '../../../App';
import {shopContext} from '../../../App';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  
  const [cashierPassword, setCashierPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

     const {cashier} = React.useContext(cashierContext);
      const [ cashierNo, setCashierNo] = cashier;

      // const {shop} = React.useContext(shopContext);
      // const [ shopId , setShopId] = shop;

      const [ shopId , setShopId] = useState()


  // const passwordInputRef = createRef();

  
const setData = async () => {
  if (cashierNo.length == 0 || cashierPassword.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
  } else {
      try {
          var  cashier = {
                          cashierNo: cashierNo,
                          cashierPassword: cashierPassword,
                          shopId: shopId,

          }
          await AsyncStorage.setItem('CashierData', JSON.stringify(cashier));
          navigation.navigate('DrawerNavigationRoutes');
      } catch (error) {
          console.log(error);
      }
  }
}

const getData = () => {
    try {
        AsyncStorage.getItem('CashierData')
            .then(value => {
                if (value != null) {
                    navigation.navigate('DrawerNavigationRoutes');
                }
            })
    } catch (error) {
        console.log(error);
    }
}

 useEffect(() => {
    getData();
},[shopId]);

  const handleSubmitPress = async () => {
    setErrortext('');
    if (!cashierNo) {
      alert('Please fill Email');
      return;
    }
    if (!cashierPassword) {
      alert('Please fill Password');
      return;
    }
    // setLoading(true);
    let cashierData = {
                      "CahierNo" : cashierNo,
                      "Password" : cashierPassword
                    };
    // let formBody = [];
    // for (let key in cashierData) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(cashierData[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

   await fetch('https://cashierapi.ibtikar-soft.sa/api/Cashier/Login', {
      method: 'POST',
      // body: formBody,
      body: JSON.stringify(cashierData),
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        // setLoading(false);
        if (responseJson.responseCode == 200 ) {
           console.log(responseJson);
           console.log(responseJson.response.cashierDetail.shopId);
           console.log(responseJson.response.cashierDetail.no);
         
          setShopId(responseJson.response.cashierDetail.shopId)
          console.log(shopId)
          setData()
          navigation.replace('DrawerNavigationRoutes');
          
        } else {
          setErrortext('Please check your email id or password');
          // console.log('Please check your email id or password');
        }
      }
      )
      .catch((error) => {
        //Hide Loader
        // setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ImageBackground  source={require('../../assets/images/cashierbackground.png')} resizeMode="cover" style={styles.image}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/iscashier.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                  bottom:150
                }}
              />
            </View>
            <View style={{bottom:130}}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setCashierNo(UserEmail)}
                placeholder="اسم المستخدم" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current && passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setCashierPassword(UserPassword)}
                placeholder="كلمة المرور"  
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>تسجيل الدخول</Text>
            </TouchableOpacity>
            </View>
          
            {/* <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text> */}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#326da8',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#34c9eb',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius:5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
