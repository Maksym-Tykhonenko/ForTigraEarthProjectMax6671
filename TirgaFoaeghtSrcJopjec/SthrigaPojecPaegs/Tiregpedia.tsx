import CatShowInfo from '../TifagroEtharCompents/CatShowInfo';
const { width, height } = Dimensions.get('window');
import ResiublBiutnJectifo from '../TifagroEtharCompents/ResiublBiutnJectifo';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions,
    View,
} from 'react-native';
import cats from '../AfotraThearPorjecAsetsJatri/cats';
import AnimatedExpandFadeView from '../TifagroEtharCompents/AnimatedExpandFadeView';
import TirgRowShort from '../TifagroEtharCompents/TirgRowShort';
import React, { useState } from 'react';

export default function Tiregpedia({ isOpend, setIsOpend }: { isOpend: boolean, setIsOpend: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [slected, setSelected] = useState(null);
    const detailMaxHeight = height * 0.38;

    // Animated detail view
    const renderDetail = () => (
        <AnimatedExpandFadeView
        maxHeight={detailMaxHeight}
            visible={isOpend && slected !== null}
            style={{
                alignSelf: 'center',
                position: 'relative',
                width: width * 0.93,
                borderRadius: width * 0.05,
                alignItems: 'center',
                margin: width * 0.02,
            }}
        >
            {slected && <CatShowInfo cat={slected} />}
        </AnimatedExpandFadeView>
    );

    return (
        <View style={{ backgroundColor: 'transparent',
            flex: 1,




            alignItems: 'center',
        }}>
            {renderDetail()}
            {!isOpend || slected === null ? (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: height * 0.28, alignItems: 'center',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: width * 0.92,
                        justifyContent: 'center',
                    }}>
                        {cats.map((cat, idx) => (
                            <TirgRowShort
                                key={idx}
                                cat={cat}
                                onPress={() => {
                                    setSelected(cat);
                                    setIsOpend(true);
                                }}
                            />
                        ))}
                    </View>
                </ScrollView>
            ) : null}

            {!isOpend && (
                <ResiublBiutnJectifo pofirathTexPeredavaymyi='Open random'
                    onPress={() => {
                        const randomCat = cats[Math.floor(Math.random() * cats.length)];
                        setSelected(randomCat);
                        setIsOpend(true);
                    }}
                    dodatkoviStyliThaer={{
                        zIndex: 3,
                        position: 'absolute',
                        bottom: height * 0.17,
                        alignSelf: 'center',
                    }}
                    fontSize={width * 0.055}
                />
            )}
        </View>
    );
}
