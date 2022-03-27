import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const ScreenBeranda = ({navigation}) => {
    const [awal, onChangeAwal] = React.useState('');
    const [tujuan, onChangeTujuan] = React.useState('');
    const [kelas, onChangeKelas] = React.useState('');
    const [tanggal, onChangeTanggal] = React.useState('');
    const [jam, onChangeJam] = React.useState('');
    const [jumlah, onChangeJumlah] = React.useState('');
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
            <View style={{flex: 1}}>
                <View style={{ justifyContent: 'center', height: 100}}>
                    <Text style={{textAlign: 'center', fontSize: 60, color: '#00ffff', fontWeight: 'bold'}}>KAPALZY</Text>
                </View>
                <View style={{flex: 1, paddingHorizontal: 40}}>
                    <View style={styles.borderTempBeranda}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Pelabuhan Keberangkatan</Text>
                        <View style={{flexDirection: 'row', flex: 1, paddingTop: 10}}>
                            <Icon name={'boat-outline'}  size={35} style={{marginLeft: 10}}/>
                            <Picker style={{marginLeft: 20, flex: 1, borderWidth: 1, backgroundColor: '#00ffff', paddingHorizontal: 10, borderRadius: 5,}}
                                selectedValue={awal}
                                onValueChange={(itemValue) =>
                                    onChangeAwal(itemValue)
                                }>
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="Bakauheni" value="Bakauheni" />
                                <Picker.Item label="Merak" value="Merak" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.borderTempBeranda}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pelabuhan Tujuan</Text>
                        <View style={{flexDirection: 'row', flex: 1, paddingVertical: 10}}>
                            <Icon name={'boat-outline'}  size={35} style={{marginLeft: 10}}/>
                            <Picker style={{marginLeft: 20, flex: 1, borderWidth: 1, backgroundColor: '#00ffff', paddingHorizontal: 10, borderRadius: 5,}}
                                selectedValue={tujuan}
                                onValueChange={(itemValue) =>
                                    onChangeTujuan(itemValue)
                                }>
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="Bakauheni" value="Bakauheni" />
                                <Picker.Item label="Merak" value="Merak" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.borderTempBeranda}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Kelas Kapal</Text>
                        <View style={{flexDirection: 'row', flex: 1, paddingVertical: 10}}>
                            <FontAwesome5 name="chart-bar"  size={35} style={{marginLeft: 10}}/>
                            <Picker style={{marginLeft: 20, flex: 1, borderWidth: 1, backgroundColor: '#00ffff', paddingHorizontal: 10, borderRadius: 5,}}
                                selectedValue={kelas}
                                onValueChange={(itemValue) =>
                                    onChangeKelas(itemValue)
                                }>
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="Ekslusif" value="Ekslusif" />
                                <Picker.Item label="Ekonomi" value="Ekonomi" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.borderTempBeranda}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tanggal Keberangkatan</Text>
                        <View style={{flexDirection: 'row', flex: 1, paddingVertical: 10}}>
                            <Icon name={'calendar-outline'}  size={35} style={{marginLeft: 10}}/>
                            <Picker style={{marginLeft: 20, flex: 1, borderWidth: 1, backgroundColor: '#00ffff', paddingHorizontal: 10, borderRadius: 5,}}
                                selectedValue={tanggal}
                                onValueChange={(itemValue) =>
                                    onChangeTanggal(itemValue)
                                }>
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="Kamis, 17 Maret 2022" value="Kamis, 17 Maret 2022" />
                                <Picker.Item label="Jumat, 18 Maret 2022" value="Jumat, 18 Maret 2022" />
                                <Picker.Item label="Sabtu, 19 Maret 2022" value="Sabtu, 19 Maret 2022" />
                                <Picker.Item label="Minggu, 20 Maret 2022" value="Minggu, 20 Maret 2022" />
                                <Picker.Item label="Senin, 21 Maret 2022" value="Senin, 21 Maret 2022" />
                                <Picker.Item label="Selasa, 22 Maret 2022" value="Selasa, 22 Maret 2022" />
                                <Picker.Item label="Rabu, 23 Maret 2022" value="Rabu, 23 Maret 20222" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{height: 35, marginTop: 10}}>
                        <View style={{flexDirection: 'row', flex: 1,}}>
                            <Icon name={'time-outline'}  size={35} style={{marginLeft: 10}}/>
                            <Picker style={{marginLeft: 20, flex: 1, borderWidth: 1, backgroundColor: '#00ffff', paddingHorizontal: 10, borderRadius: 5,}}
                                selectedValue={jam}
                                onValueChange={(itemValue) =>
                                    onChangeJam(itemValue)
                                }>
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="15:00" value="15:00" />
                                <Picker.Item label="15:30" value="15:30" />
                                <Picker.Item label="16:00" value="16:00" />
                                <Picker.Item label="16:30" value="16:30" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{height: 130, marginTop: 10, marginTop: 20,}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Kategori Jumlah</Text>
                        <TouchableOpacity style={{borderWidth: 1, backgroundColor: '#00ffff', height: 30, marginTop: 10, borderRadius: 20, paddingHorizontal: 20, justifyContent: 'center',}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 17,}}>Dewasa</Text>
                                <Text style={{fontSize: 17,}}>1 Orang</Text>
                            </View> 
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', flex: 1, paddingVertical: 12}}>
                            <FontAwesome5 name="user-friends" size={30} style={{marginLeft: 10}}/>
                            <Picker style={{marginLeft: 20, flex: 1, borderWidth: 1, backgroundColor: '#00ffff', paddingHorizontal: 10, borderRadius: 5,}}
                                selectedValue={jumlah}
                                onValueChange={(itemValue) =>
                                    onChangeJumlah(itemValue)
                                }>
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                            </Picker>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderWidth: 1, borderRadius: 15, backgroundColor: '#00ffff', justifyContent: 'center', alignItems: 'center', marginTop: 20}}
                        onPress={() => navigation.navigate('ScreenDaftar')}>
                            <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>BUAT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
            <View style={{backgroundColor: '#00ffff', justifyContent: 'flex-end', height: 100, flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 0.25,justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome5 name="home" size={50}/>
                    <Text>Beranda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ScreenDaftar')}>
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

const styles = StyleSheet.create({
    borderTempBeranda: {
        // borderWidth: 1, 
        height: 80, 
        marginTop: 10
    }
})

export default ScreenBeranda;