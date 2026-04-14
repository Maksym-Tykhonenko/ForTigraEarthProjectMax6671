import { RaidilGrandintPinripl as ZiqifGirtantPorgj } from '../TifagroEtharCompents/RaidilGrandintPinripl';
import ResiublBiutnJectifo from '../TifagroEtharCompents/ResiublBiutnJectifo';
const { width: wisinta, height: heaitial } = QidosjFImIEofn.get('window');
import faktyonthemain from '../AfotraThearPorjecAsetsJatri/faktyonthemain';
import React, { useState as usejFoqjf } from 'react';
import {
    Text as TirqaRojecrTtex,
    Dimensions as QidosjFImIEofn,
    ImageBackground as IgrOSjfnq,
    Share,
    Image as FiragAmigJou,
    TouchableOpacity as TaqichJioLas,
    View as Vidqodmd,
} from 'react-native';
import { Platform } from 'react-native';

const fitubns = [
    // Додаємо Cat Map лише якщо не Android
    ...(!Platform.OS || Platform.OS !== 'android' ? [{
        icon: require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/ourEart.png'),
        title: 'Cat Map',
        key: 'catmap',
    }] : []),
    {
        key: 'catquiz',
        title: 'Cat Quiz',
        icon: require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/catQiuz.png'),
    },
    {
        icon: require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/widlSotries.png'),
        key: 'wildstories',
        title: 'Wild Stories',
    },
    {
        key: 'catmatch',
        icon: require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/tacMacht.png'),
        title: 'Cat Match',
    },
];

export default function ZorpGallery({ steLykipterNfo }: { steLykipterNfo: React.Dispatch<React.SetStateAction<string>> }) {
    const [factIdx] = usejFoqjf(Math.floor(Math.random() * faktyonthemain.length));

    return (
        <Vidqodmd style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center',}}>
            <IgrOSjfnq
                source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/rulfull.png')}
                style={{
                    alignItems: 'center',
                    width: wisinta * 0.92,
                    overflow: 'hidden',
                    justifyContent: 'center',  marginTop: heaitial * 0.04, borderRadius: wisinta * 0.04,
                    height: heaitial * 0.28,
                }}
                resizeMode='stretch'
            >
                <Vidqodmd style={{
                    alignItems: 'center',
                    marginBottom: heaitial * 0.02,
                    minHeight: heaitial * 0.13,
                    width: wisinta * 0.8,
                    backgroundColor: 'rgba(255,255,255,0.0)',
                    justifyContent: 'center',
                    marginTop: heaitial * 0.04,
                }}>
                    <TirqaRojecrTtex style={{
                        textAlign: 'center',
                        color: '#642319',
                        fontSize: wisinta * 0.043,
                        fontWeight: '500',
                    }}>
                        {faktyonthemain[factIdx]}
                    </TirqaRojecrTtex>
                </Vidqodmd>
                <ResiublBiutnJectifo isShare={true}
                    fontSize={wisinta * 0.055}   onPress={() => {
                        Share.share({
                            message: `${faktyonthemain[factIdx]}!`
                        })
                    }}
                    pofirathTexPeredavaymyi='Share'
                    dodatkoviStyliThaer={{
                        marginTop: heaitial * 0.01,
                        zIndex: 3,
                        width: wisinta * 0.7,
                        alignSelf: 'center',
                        height: heaitial * 0.07,
                    }}
                    
                />
            </IgrOSjfnq>
            <Vidqodmd style={{
                marginTop: heaitial * 0.04,


                
                flexDirection: 'row',


                
                width: wisinta * 0.92,


                
                justifyContent: 'center',


                
                flexWrap: 'wrap',


                
            }}>
                {fitubns.map((btn, idx) => (
                    <TaqichJioLas
                    key={btn.key}
                        onPress={() => {
                            steLykipterNfo(btn.title)
                        }}
                        style={{
                            overflow: 'hidden',
                            width: wisinta * 0.39,
                            height: heaitial * 0.16,
                            justifyContent: 'center',
                            borderRadius: wisinta * 0.05,
                            alignItems: 'center',
                            borderColor: '#F5BE26',
                            position: 'relative',
                            borderWidth: wisinta * 0.008,
                            margin: wisinta * 0.02,
                        }}
                        activeOpacity={0.7}
                    >
                        <ZiqifGirtantPorgj
                            style={{
                                width: '100%',
                                borderRadius: wisinta * 0.03, position: 'absolute', top: 0, left: 0,
                                height: '100%',
                            }}
                        />
                        <Vidqodmd style={{
                            zIndex: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                        }}>
                            <TirqaRojecrTtex style={{
                                fontSize: wisinta * 0.045,
                                color: '#FDC002',
                                fontWeight: '700',
                                textAlign: 'center',
                            }}>
                                {btn.title}
                            </TirqaRojecrTtex>

                            <Vidqodmd style={{
                                width: wisinta * 0.3,
                                height: heaitial * 0.0021,
                                marginVertical: heaitial * 0.01,
                                backgroundColor: '#F5BE26',
                                borderRadius: wisinta * 0.01,
                            }} />

                            <FiragAmigJou
                                source={btn.icon}
                                style={{  width: wisinta * 0.13,
                                    
                                    
                                    
                                    height: wisinta * 0.13,
                                }}
                                resizeMode="contain"
                            />

                        </Vidqodmd>
                    </TaqichJioLas>
                ))}
            </Vidqodmd>
        </Vidqodmd>
    );
}
