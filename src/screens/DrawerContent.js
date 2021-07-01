import React from 'react';
import { Text,View, StyleSheet ,Image} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from  'react-native-vector-icons/Ionicons';
import AntDesign  from  'react-native-vector-icons/AntDesign';

 

export function DrawerContent(props,{navigation}){




    const removeData = async () => {
        try {
            await AsyncStorage.clear();
          
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
               
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <View style={styles.profileImgContainer}> 
                            <Image 
                            style={styles.profileImg}
                                source={{
                                    uri:'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                }}
                                // size={50}
                            />
                            </View>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Text style={styles.title}> basher </Text>
                                <Text style={styles.caption}>Mansour</Text>
                            </View>
                        </View>

                      
                    </View>
                    <DrawerItemList  {...props}/>

{/*                     
                    <View style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Receipt"
                            onPress={() => {props.navigation.navigate('Receipt')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="sitemap"  
                                color={color}
                                size={size}
                                />
                            )}
                            label="items"
                            onPress={() => {props.navigation.navigate('Item')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign 
                                name="shoppingcart" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Cart"
                            onPress={() => {props.navigation.navigate('Cart')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        </View>  */}

                </View>
            </DrawerContentScrollView>
    
            <View style={styles.bottomDrawerSection}> 
                <DrawerItem 
                    // icon={({color, size}) => (
                    //     <Icon 
                    //     name="exit-to-app" 
                    //     color={color}
                    //     size={size}
                    //     />
                    // )}
                    label="رقم الاصدار 1.0"
                    onPress={() => {}}
                />

               <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="تسجيل الخروج"
                    onPress={removeData}
                />
                </View>
            {/* </Drawer.Section> */}
    </View>
  );
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },

    profileImgContainer: {
        marginLeft: 8,
        height: 82,
        width: 82,
        borderRadius: 40,
        
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
      },
  
  });
