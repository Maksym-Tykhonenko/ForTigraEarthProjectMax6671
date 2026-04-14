const { width, height } = Dimensions.get('window');
import { RaidilGrandintPinripl } from './RaidilGrandintPinripl';
import React from 'react';
import { View, Dimensions, Text, Image, } from 'react-native';


export default function CatShowInfo({ cat }: { cat: any }) {
    if (!cat) {
        return null;
    }

    return (
        <View style={{  width: width * 0.92,
            alignSelf: 'center', position: 'relative',   alignItems: 'center',
        }}>
            <View style={{  borderRadius: width * 0.05, borderColor: '#F5BE26', overflow: 'hidden',
                    margin: width * 0.02,
                    alignItems: 'center',
                    position: 'relative',
                    width: '100%',
                    borderWidth: width * 0.008,
                }}
            >
                <RaidilGrandintPinripl />
                <View style={{
                    padding: width * 0.03,
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        zIndex: 2,
                    }}>
                        <Image  source={cat.foto} style={{
                                height: width * 0.3,
                                borderRadius: width * 0.035,
                                width: width * 0.3,
                            }}
                            resizeMode="contain"
                        />

                        <View style={{ flex: 1,    marginLeft: width * 0.05, height: '70%',
                        }}>
                            <Text style={{ fontSize: width * 0.044, fontWeight: '700', textAlign: 'left',
                                color: 'white',
                            }}>
                                {cat.name}
                            </Text>

                            <Text style={{
                                textAlign: 'left',
                                fontSize: width * 0.035,
                                marginTop: height * 0.019,
                                fontWeight: '400',
                                color: 'white',
                            }}>
                                Range: {cat.range}
                            </Text>
                        </View>
                    </View>

                    <Text style={{
                        marginTop: height * 0.019,
                        fontSize: width * 0.035,
                        color: 'white',
                        fontWeight: '400',
                        textAlign: 'left',
                    }}>
                        {cat.description}
                    </Text>
                </View>
            </View>
        </View>
    );
}
