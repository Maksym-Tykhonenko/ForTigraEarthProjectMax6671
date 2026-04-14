import React from 'react';
import { RaidilGrandintPinripl } from './RaidilGrandintPinripl';
import { View, Dimensions,  Image,TouchableOpacity, Text, } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function TirgRowShort({ cat, onPress, isSelected }: { cat: any, onPress: () => void, isSelected?: boolean }) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{
                position: 'relative',
                borderWidth: width * 0.008,
                margin: width * 0.02,
                height: height * 0.1,
                width: '100%',
                borderRadius: width * 0.05,
                overflow: 'hidden',
                borderColor: isSelected ? '#fff' : '#F5BE26',
                alignItems: 'center',
            }}
        >
            <RaidilGrandintPinripl  style={{ height: '100%', width: '100%', left: 0, position: 'absolute',
                top: 0,borderRadius: width * 0.03,
                }}
            />
            <View style={{
                justifyContent: 'space-between',
                zIndex: 2,
                flex: 1,
                width: '93%',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {cat.foto &&
                    <Image  source={cat.foto} style={{
                        borderRadius: width * 0.035,
                        width: height * 0.07,
                        height: height * 0.07,
                        }} resizeMode="contain"
                    />
                }

                <View style={{ height: '70%', flex: 1, marginLeft: !cat.foto ? 0 : width * 0.05, justifyContent: 'space-between',
                }}>
                    <Text style={{
                        fontSize: width * 0.044,
                        fontWeight: '700',
                        textAlign: 'left',
                        color: 'white',
                    }}>
                        {cat.name}
                    </Text>

                    <Text style={{
                        fontSize: width * 0.035,
                        color: 'white',
                        fontWeight: '400',
                        textAlign: 'left',
                    }} numberOfLines={2} ellipsizeMode='tail'>
                        {cat.range}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
