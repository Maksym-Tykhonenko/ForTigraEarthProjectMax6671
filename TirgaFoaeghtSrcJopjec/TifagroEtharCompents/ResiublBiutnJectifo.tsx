import {
    ImageBackground, Dimensions, Text as JatherIgiarhaTeqor,
    TouchableOpacity as SigraTachicit,
    Image,
    GestureResponderEvent,
} from 'react-native';

const { width: strWiis, height: nurehi } = require('react-native').Dimensions.get('window');

import React from 'react';

interface EnusiUniqbuttnProps {
    style?: object;
    disabled?: boolean;
    content?: React.ReactNode;
    isShare?: boolean | undefined;
    onPress: (e: GestureResponderEvent) => void;
    pofirathTexPeredavaymyi?: string;
    fontSize?: number;
    dodatkoviStyliThaer?: object;
}

const { width: aeliw, height: fasyhie } = Dimensions.get('window');

const ResiublBiutnJectifo: React.FC<EnusiUniqbuttnProps> = ({
    onPress,
    fontSize,
    disabled = false,
    isShare = false,
    pofirathTexPeredavaymyi,
    dodatkoviStyliThaer = {},
}) => {

    return (
        <SigraTachicit  onPress={onPress} activeOpacity={0.8}
            style={[
                {
                    alignItems: 'center',
                    width: aeliw * 0.84,
                    overflow: 'hidden',
                    borderRadius: aeliw * 0.025,
                    justifyContent: 'center',
                    height: fasyhie * 0.073,
                },  dodatkoviStyliThaer,
            ]}  disabled={disabled !== null && disabled !== undefined ? disabled : false}
        >
            <ImageBackground source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/tarmairl.png')}
                style={{ width: '100%',  alignItems: 'center', height: '100%', justifyContent: 'center',flexDirection: 'row',}}
                resizeMode='stretch'>

                <JatherIgiarhaTeqor
                    style={[
                        {
                            textAlign: 'center',
                            marginBottom: nurehi * 0.005,
                            fontWeight: '800',
                            color: '#fff',
                            fontSize: fontSize ? fontSize * 1 : strWiis * 0.053,
                        },
                    ]}
                >
                    {pofirathTexPeredavaymyi}
                </JatherIgiarhaTeqor>

                {isShare && (
                    <Image source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/lineddots.png')}  style={{
                            height: aeliw * 0.059,
                            marginBottom: nurehi * 0.005,
                            marginLeft: aeliw * 0.03,
                            width: aeliw * 0.059,
                        }}
                        resizeMode='contain'
                    />
                )}
            </ImageBackground>
        </SigraTachicit>
    );
};

export default ResiublBiutnJectifo;