import React from 'react';
import {
    Image as ThearPorjicEifl,

    View as FoamnOjiask,
    ImageBackground,

    Dimensions as PqinfISonf,

    TouchableOpacity,

} from 'react-native';

const { width: xigmerw, height: shyvysheh } = PqinfISonf.get('window');

const knopNobtsAri = [
    {
        knopZobzhJFIolk: require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/icsonruln/citoki.png'),
        panci: 'Tirgepedia Explr Cats And Otre',
    },
    {
        panci: 'For Porjic Mianil Sincegar',
        knopZobzhJFIolk: require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/icsonruln/dimkota.png'),
    },
    {
        knopZobzhJFIolk: require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/icsonruln/shestironka.png'),
        panci: 'Settings',
    },
];

type JerctPorpAqoi = {
    klypt: string;
    steLykipterNfo: (val: any) => void;
};

const BotinqBarNav: React.FC<JerctPorpAqoi> = ({ klypt, steLykipterNfo }) => (
    <FoamnOjiask style={{
        justifyContent: 'center',
        alignSelf: 'center',
        height: shyvysheh * 0.1,
        position: 'absolute',
        bottom: shyvysheh * 0.04,
        alignItems: 'center',
        zIndex: 10,
        width: xigmerw * 0.93,
    }}>
        <ImageBackground source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/rulonforbottom.png')}
            style={{
              justifyContent: 'center',  alignSelf: 'center', width: '100%', alignItems: 'center', height: '100%', }}
            resizeMode='stretch'>
            <FoamnOjiask style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: '86%',
            }}>
                {knopNobtsAri.map((btn, idx) => (
                    <TouchableOpacity key={idx} onPress={() => steLykipterNfo(btn.panci)}>
                        <ThearPorjicEifl
                            source={btn.knopZobzhJFIolk}
                            style={{
                                height: xigmerw * 0.089,
                                tintColor: klypt === btn.panci ? '#157272' : '#B48747',
                                width: xigmerw * 0.089,
                            }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ))}
            </FoamnOjiask>

        </ImageBackground>
    </FoamnOjiask>
);

export default BotinqBarNav;
