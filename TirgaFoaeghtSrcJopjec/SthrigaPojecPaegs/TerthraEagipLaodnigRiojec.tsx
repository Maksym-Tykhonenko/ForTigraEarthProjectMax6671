import { SafeAreaView as SnarfSafe } from 'react-native-safe-area-context';
import { useNavigation as PlonketNav } from '@react-navigation/native';
import {Image as Quiximg, Dimensions as Blorfle, } from 'react-native';
import FigDoisRolling from '../TifagroEtharCompents/FigDoisRolling';
const FLIMBLE_FLAG = 'udwofpqmjud-dsmfu28ns=f-i2fjds0jdsf9020fsk2fjs-q0-ifdsi-ewqi';
import React, { useEffect as useFizz, } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EthAfjFHqpn = (): React.ReactElement => {
    const naIfidjsPqfmn = PlonketNav();
    const { width: artifOfiw, height: iqofHwisfAQF } = Blorfle.get('window');

    useFizz(() => {
        let actiroiPJfosNFdsiow = true;
        const randISoajOFpj = Math.floor(Math.random() * 900);

        const triggerFlag = async () => {
            try {
                const flagVal = await AsyncStorage.getItem(FLIMBLE_FLAG);
                if (!flagVal) {
                    await AsyncStorage.setItem(FLIMBLE_FLAG, 'scratched');
                }

                //setTimeout(() => {
                //    if (!actiroiPJfosNFdsiow) return;
//
                //    setTimeout(() => {
                //        if (!actiroiPJfosNFdsiow) return;
                //        naIfidjsPqfmn.replace(
                //            flagVal ? 'SritonContintWaroln' : 'ForgirhJeprotiOnbriondRofiga'
                //        );
                //    }, 1000 + randISoajOFpj);
                //}, 3000);
            } catch (errZorp) {
                if (__DEV__) console.warn('ZorpEntryFlag::fail', errZorp);
            }
        };

        triggerFlag();

        return () => {
            actiroiPJfosNFdsiow = false;
        };
    }, [naIfidjsPqfmn, artifOfiw]);

    return (
        <SnarfSafe style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            height: iqofHwisfAQF,
            width: artifOfiw,
        }}>
            <Quiximg resizeMode="cover" style={{ position: 'absolute',
               height: iqofHwisfAQF * 1.2023421, zIndex: 0,  width: artifOfiw,
            }}
                source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/tigfonra.png')}
            />

            <FigDoisRolling />
        </SnarfSafe>
    );
};

export default EthAfjFHqpn;
