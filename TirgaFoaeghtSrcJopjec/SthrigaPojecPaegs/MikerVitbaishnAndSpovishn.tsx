import React, { useEffect, useState,  } from 'react';
import { Share, ImageBackground, Dimensions, Text,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
import ResiublBiutnJectifo from '../TifagroEtharCompents/ResiublBiutnJectifo';
const settingsList = [
    {
        title: 'Vibration',
        key: 'vibration',
    },
    {  key: 'notification',   title: 'Notification',},
];

const falseImg = require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/whiteon.png');
const trueImg = require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/browndis.png');

export default function MikerVitbaishnAndSpovishn() {
    const [settings, setSettings] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        // Load settings from AsyncStorage
        (async () => {
            let loaded: { [key: string]: boolean } = {};
            for (const item of settingsList) {
                const val = await AsyncStorage.getItem(item.key);
                loaded[item.key] = val === null ? true : val === 'true';
            }
            setSettings(loaded);
        })();
    }, []);

    const toggleSetting = async (key: string) => {
        const newValue = !settings[key];
        setSettings(prev => ({ ...prev, [key]: newValue }));
        await AsyncStorage.setItem(key, newValue ? 'true' : 'false');
    };

    return (
        <View style={{ alignItems: 'center', backgroundColor: 'transparent', flex: 1, }}>
            <ImageBackground
                source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/rulfull.png')}
                style={{
                    justifyContent: 'center',
                    overflow: 'hidden',
                    height: height * 0.28,
                    alignItems: 'center',
                    borderRadius: width * 0.04,
                    width: width * 0.92,
                }}
                resizeMode='stretch'
            >
                {/* Settings list */}
                <View style={{
                    backgroundColor: 'transparent',
                    width: '75%',
                    marginTop: height * 0.03,
                }}>
                    {settingsList.map((item, idx) => (
                        <View key={item.key} style={{
                            borderBottomWidth: idx === 0 ? 1 : 0,
                            flexDirection: 'row',
                            borderBottomColor: '#642319',
                            alignItems: 'center',
                            paddingVertical: height * 0.025,
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{ fontSize: width * 0.053, color: '#642319', fontWeight: '700',
                            }}> {item.title}</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => toggleSetting(item.key)}
                            >
                                <Image source={settings[item.key] ? trueImg : falseImg} style={{
                                        borderRadius: width * 0.035,
                                        height: width * 0.08,
                                        width: width * 0.131,
                                    }}
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ImageBackground>



            <ResiublBiutnJectifo
                    fontSize={width * 0.055}
                onPress={() => {
                    Share.share({
                        message: 'Explore wild felines with For Tigra Earth Project! Discover lions, leopards, caracals, and more. Learn, play, and help protect nature.'
                    })
                }}
                dodatkoviStyliThaer={{
                    position: 'absolute',
                    zIndex: 3,
                    bottom: height * 0.17,
                    alignSelf: 'center',
                }}
                isShare={true}
                pofirathTexPeredavaymyi='Share'
            />
        </View>
    );
}
