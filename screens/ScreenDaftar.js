import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const ScreenDaftar = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1}}>
                <View style={{backgroundColor: '#00ffff', height: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold',}}>DAFTAR PEMESANAN</Text>
                </View>
                <View style={{borderWidth: 1, height: 250, paddingHorizontal: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Text style={{fontSize: 28, fontWeight: '600'}}>Bakauheni</Text>
                        <Text style={{fontSize: 28, fontWeight: '600'}}>    ->    </Text>
                        <Text style={{fontSize: 28, fontWeight: '600'}}>Merak</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15}}>Jadwal Masuk Pelabuhan</Text>
                    <Text style={{fontSize: 17, marginTop: 3}}>Kamis, 17 Maret 2022</Text>
                    <Text style={{fontSize: 17, marginTop: 3}}>15:30 WIB</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15}}>Layanan</Text>
                    <Text style={{fontSize: 17, marginTop: 3}}>Express</Text>
                </View>
            </View>
            <View style={{backgroundColor: '#00ffff', justifyContent: 'flex-end', height: 100, flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 0.25,justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ScreenBeranda')}>
                    <FontAwesome5 name="home" size={50}/>
                    <Text>Beranda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome5 name="book" size={45} style={{marginTop: 5}}/>
                    <Text>Pesanan Saya</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ScreenBatal')}>
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

export default ScreenDaftar;