import React, { useState } from 'react';

import { Text, Dimensions, Share, View,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import AnimatedExpandFadeView from '../TifagroEtharCompents/AnimatedExpandFadeView';

import sotrisliwdred from '../AfotraThearPorjecAsetsJatri/sotrisliwdred';
import TirgRowShort from '../TifagroEtharCompents/TirgRowShort';
import { RaidilGrandintPinripl } from '../TifagroEtharCompents/RaidilGrandintPinripl';
import ResiublBiutnJectifo from '../TifagroEtharCompents/ResiublBiutnJectifo';

const { width, height } = Dimensions.get('window');

export default function GirtWildStories({ isOpend, setIsOpend }: { isOpend: boolean, setIsOpend: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [slected, setSelected] = useState(null);
    const detailMaxHeight = height * 0.38;

    const rendrdetl = () => (
        <AnimatedExpandFadeView
            visible={isOpend && slected !== null}
            // maxHeight={detailMaxHeight} // прибираємо maxHeight
            style={{
                borderColor: '#F5BE26',
                margin: width * 0.02,
                width: width * 0.93,
                position: 'relative',
                borderRadius: width * 0.05,
                borderWidth: width * 0.008,
                alignItems: 'center',
                alignSelf: 'center',
            }}
        >
            <RaidilGrandintPinripl />
            <View
                style={{
                    alignItems: 'center',
                    width: '100%',
                    padding: width * 0.03,
                    // maxHeight: detailMaxHeight, // якщо треба обмежити дуже довгі історії, розкоментуйте цей рядок
                }}
            >
                <Text style={{
                    fontWeight: '700',
                    color: 'white', textAlign: 'left', fontSize: width * 0.044,
                    alignSelf: 'flex-start',
                }}>
                    {slected?.name}
                </Text>
                <Text style={{
                    fontSize: width * 0.035,
                    color: 'white', fontWeight: '400', textAlign: 'left',
                    marginTop: height * 0.019,
                }}>
                    {slected?.range}
                </Text>
            </View>
        </AnimatedExpandFadeView>
    );

    return (
        <View style={{
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'transparent',
        }}>
            {/* Рендеримо деталь тільки коли потрібно */}
            {(isOpend && slected !== null) && rendrdetl()}
            {/* Hide list when detail is fully open */}
            {!(isOpend && slected !== null) && (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    alignItems: 'center',
                    paddingBottom: height * 0.28,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        width: width * 0.92,
                        flexDirection: 'row',
                    }}>
                        {sotrisliwdred.map((cat, idx) => (
                            <TirgRowShort cat={cat} key={idx} onPress={() => {
                                    setSelected(cat);
                                    setIsOpend(true);
                                }}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}

            <ResiublBiutnJectifo
                onPress={() => {
                    if (isOpend && slected !== null) {
                        Share.share({
                            message: `${slected.name} - ${slected.range}\n`
                        })
                    } else {
                        const randomCat = sotrisliwdred[Math.floor(Math.random() * sotrisliwdred.length)];
                        setSelected(randomCat);
                        setIsOpend(true);
                    }
                }}
                pofirathTexPeredavaymyi={isOpend && slected !== null ? 'Share' : 'Open random'}  dodatkoviStyliThaer={{ bottom: height * 0.04, zIndex: 3, position: 'absolute', alignSelf: 'center',
                }}
                fontSize={width * 0.055}
                isShare={isOpend && slected !== null}
            />
        </View>
    );
}
