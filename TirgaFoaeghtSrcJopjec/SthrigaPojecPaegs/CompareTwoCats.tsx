import React, { useState } from 'react';
import {
    Image,



    Dimensions,
    ImageBackground, Share, Text,
    View,
} from 'react-native';
import cats from '../AfotraThearPorjecAsetsJatri/cats';
const { width, height } = Dimensions.get('window');
import TirgRowShort from '../TifagroEtharCompents/TirgRowShort';
import { ScrollView } from 'react-native-gesture-handler';
import { RaidilGrandintPinripl } from '../TifagroEtharCompents/RaidilGrandintPinripl';
import ResiublBiutnJectifo from '../TifagroEtharCompents/ResiublBiutnJectifo';

export default function CompareTwoCats({ isOpend, setIsOpend }: { isOpend: boolean, setIsOpend: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [selectedCats, setSelectedCats] = useState<any[]>([]);

    const CatCompareInfo = ({ cat }: { cat: any }) => (
        <View style={{
            flex: 1,
            alignItems: 'center',
            width: width * 0.44,
            alignSelf: 'center',
        }}>
            <View  style={{
                margin: width * 0.01,
                height: height * 0.28,
                borderRadius: width * 0.05,
                width: '93%',
                    position: 'relative', borderColor: '#fff', overflow: 'hidden',    borderWidth: width * 0.008,
                    alignItems: 'center',
                }}
            >
                <RaidilGrandintPinripl />
                <View style={{
                    paddingHorizontal: width * 0.014,
                    paddingVertical: height * 0.01,
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        zIndex: 2,
                        alignItems: 'center',
                    }}>
                        <Image   source={cat.foto} style={{
                            height: width * 0.14,
                            borderRadius: width * 0.035,
                            width: width * 0.14,
                            }}  resizeMode="contain"
                        />
                        <View style={{
                            justifyContent: 'center',
                            height: '70%',
                            flex: 1,
                            alignItems: 'center',
                            marginLeft: width * 0.03,
                        }}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: width * 0.04,
                                fontWeight: '700',
                            }} numberOfLines={1} adjustsFontSizeToFit>
                                {cat.name} {cat.emoji}
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: height * 0.012, width: '100%' }}>
                        <Text style={{
                            fontWeight: '400',
                            textAlign: 'left',
                            color: 'white',
                            fontSize: width * 0.033,
                        }}>
                            Weight: {cat.weightKg} kg
                        </Text>
                        <Text style={{
                            color: 'white',
                            textAlign: 'left',
                            fontWeight: '400',
                            fontSize: width * 0.033,
                        }}>
                            Top Speed: {cat.topSpeedKmh} km/h
                        </Text>
                        <Text style={{
                            fontWeight: '400',
                            textAlign: 'left',
                            fontSize: width * 0.033,
                            color: 'white',
                        }}>
                            Diet: {cat.diet.join(', ')}
                        </Text>
                        <Text style={{
                            color: 'white',
                            textAlign: 'left',
                            fontWeight: '400',
                            fontSize: width * 0.033,
                        }}>
                            Danger: {cat.dangerLevel}
                        </Text>
                        <Text style={{
                            color: 'white',
                            textAlign: 'left',
                            fontWeight: '400',
                            fontSize: width * 0.033,
                        }}>
                            Size: {cat.sizeCategory}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );

    const renderComparison = () => {
        return (
            <View style={{ marginTop: height * 0.03, alignItems: 'flex-start', backgroundColor: 'transparent',
                paddingHorizontal: width * 0.014,
                flexDirection: 'row',
            }}>
                <CatCompareInfo cat={selectedCats[0]} />
                <CatCompareInfo cat={selectedCats[1]} />
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: 'transparent', flex: 1, alignItems: 'center',
        }}>
            <ImageBackground resizeMode='stretch' source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/rulfull.png')} style={{
                justifyContent: 'center',
                height: height * 0.23,
                overflow: 'hidden',
                borderRadius: width * 0.04,
                alignItems: 'center',
                width: width * 0.92,
                }}
                
            >
                <View style={{
                    alignItems: 'center',
                    marginTop: height * 0.04,
                    marginBottom: height * 0.02,
                    backgroundColor: 'rgba(255,255,255,0.0)',
                    justifyContent: 'center',
                    width: width * 0.8,
                    minHeight: height * 0.13,
                }}>
                    <Text style={{
                        paddingHorizontal: width * 0.05,
                        fontSize: width * 0.043,
                        fontWeight: '500',
                        color: '#642319',
                        textAlign: 'center',
                    }}>
                        Choose two types to compare:
                    </Text>
                </View>
            </ImageBackground>

            {isOpend && selectedCats.length === 2 ? renderComparison() : (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingBottom: height * 0.28,}}>
                    <View style={{
                        flexDirection: 'row',
                        width: width * 0.92,
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                        {cats.map((cat, idx) => (
                            <TirgRowShort
                            cat={cat}
                            onPress={() => {
                                if (selectedCats.includes(cat)) {
                                    setSelectedCats(selectedCats.filter(c => c !== cat));
                                } else if (selectedCats.length < 2) {
                                    setSelectedCats([...selectedCats, cat]);
                                }
                            }}
                            key={idx}
                                isSelected={selectedCats.includes(cat)}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}

            <ResiublBiutnJectifo
                onPress={() => {
                    if (!isOpend && selectedCats.length === 2) {
                        setIsOpend(true);
                    } else {
                        Share.share({
                            message: `${selectedCats[0].name} vs ${selectedCats[1].name}\n\n` +
                                `${selectedCats[0].name}:\n` +
                                `Weight: ${selectedCats[0].weightKg} kg\n` +
                                `Top Speed: ${selectedCats[0].topSpeedKmh} km/h\n` +
                                `Diet: ${selectedCats[0].diet.join(', ')}\n` +
                                `Danger: ${selectedCats[0].dangerLevel}\n` +
                                `Size: ${selectedCats[0].sizeCategory}\n\n` +
                                `${selectedCats[1].name}:\n` +
                                `Weight: ${selectedCats[1].weightKg} kg\n` +
                                `Top Speed: ${selectedCats[1].topSpeedKmh} km/h\n` +
                                `Diet: ${selectedCats[1].diet.join(', ')}\n` +
                                `Danger: ${selectedCats[1].dangerLevel}\n` +
                                `Size: ${selectedCats[1].sizeCategory}`,
                        })
                    }
                }}
                disabled={!isOpend && selectedCats.length !== 2}
                dodatkoviStyliThaer={{
                    bottom: height * 0.04,
                    alignSelf: 'center',
                    opacity: !isOpend && selectedCats.length !== 2 ? 0.5 : 1,
                    position: 'absolute',
                    zIndex: 3,
                }}
                isShare={isOpend}
                fontSize={width * 0.055}
                pofirathTexPeredavaymyi={isOpend ? 'Share' : 'Compare'}
            />
        </View>
    );
}
