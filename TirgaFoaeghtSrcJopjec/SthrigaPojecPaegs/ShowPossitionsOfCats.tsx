import MapView, { Marker } from 'react-native-maps';
const { width, height } = Dimensions.get('window');
import cats from '../AfotraThearPorjecAsetsJatri/cats';
import CatShowInfo from '../TifagroEtharCompents/CatShowInfo';
import {
    Dimensions,
    View,
} from 'react-native';
import AnimatedExpandFadeView from '../TifagroEtharCompents/AnimatedExpandFadeView';
import ResiublBiutnJectifo from '../TifagroEtharCompents/ResiublBiutnJectifo';
import React, { useState} from 'react';

export default function ShowPossitionsOfCats({ isOpend, setIsOpend }: { isOpend: boolean, setIsOpend: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [slected, setSelected] = useState(null);
    const detailMaxHeight = height * 0.38;

    // Animated detail view
    const renderDetail = () => (
        <AnimatedExpandFadeView
            visible={isOpend && slected !== null}
            maxHeight={detailMaxHeight}
            style={{
                width: width * 0.93,
                margin: width * 0.02,
                borderRadius: width * 0.05,
                alignItems: 'center',
                position: 'relative',
                alignSelf: 'center',
            }}
        >
            {slected && <CatShowInfo cat={slected} />}
        </AnimatedExpandFadeView>
    );

    return (
        <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'transparent',}}>
            {renderDetail()}
            {!isOpend && (
                <MapView style={{ width: width, height: height * 1.2, zIndex: 0,top: -height * 0.16,
                    position: 'absolute', }} initialRegion={{
                        longitudeDelta: 0.0421,
                        latitude: cats[0].location.lat,
                        latitudeDelta: 0.0922,
                        longitude: cats[0].location.lng,
                    }}
                >
                    {cats.map((cat, index) => (
                        <Marker key={index}
                        pinColor='#157272'
                            coordinate={{ latitude: cat.location.lat, longitude: cat.location.lng }}
                            onPress={() => {
                                setSelected(cat);
                                setIsOpend(true);
                            }}
                        />
                    ))}
                </MapView>
            )}

            {!isOpend && (
                <ResiublBiutnJectifo
                    onPress={() => {
                        const randomCat = cats[Math.floor(Math.random() * cats.length)];
                        setSelected(randomCat);
                        setIsOpend(true);
                    }} pofirathTexPeredavaymyi='Open random' dodatkoviStyliThaer={{
                        bottom: height * 0.05,
                        zIndex: 3,
                        position: 'absolute',
                        alignSelf: 'center',
                    }}  fontSize={width * 0.055}
                />
            )}
        </View>
    );
}
