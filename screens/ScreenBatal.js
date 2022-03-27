import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Image,
} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import IconPembatalan from '../assets/icons/IconPembatalan.jpeg'

const ScreenBatal = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1}}>
                <View style={{backgroundColor: '#00ffff', height: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold',}}>DAFTAR PEMBATALAN</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={IconPembatalan} style={{height: 200, width: 300}}/>
                </View>
            </View>
            <View style={{backgroundColor: '#00ffff', justifyContent: 'flex-end', height: 100, flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 0.25,justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ScreenBeranda')}>
                    <FontAwesome5 name="home" size={50}/>
                    <Text>Beranda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ScreenDaftar')}>
                    <FontAwesome5 name="book" size={45} style={{marginTop: 5}}/>
                    <Text>Pesanan Saya</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="file-cancel" size={55} style={{marginTop: 5}}/>
                    <Text>Pembatalan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome5 name="align-justify" size={50} style={{marginTop: 5}}/>
                    <Text>Lainnya</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenBatal;