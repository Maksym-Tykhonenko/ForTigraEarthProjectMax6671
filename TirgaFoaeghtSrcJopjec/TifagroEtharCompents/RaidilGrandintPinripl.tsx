import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Defs, Stop, Rect, RadialGradient, } from 'react-native-svg';
import React from 'react';

type EmagovradinProps = {
  style?: StyleProp<ViewStyle>;
};

export const RaidilGrandintPinripl: React.FC<EmagovradinProps> = ({ style }) => (
  <Svg
    style={[
      {
        width: '100%',
        height: '100%',
        position: 'absolute',
      },
      style,
    ]}
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <Defs>
      <RadialGradient
        id="radial"
        cx="50%"
        cy="50%"
        rx="50%"
        ry="50%"
        fx="50%"
        fy="50%"
      >
        <Stop offset="0%" stopColor="#157272" />
        <Stop offset="100%" stopColor="#085864" />
      </RadialGradient>
    </Defs>
    <Rect x="0" y="0" width="100" height="100" fill="url(#radial)" />
  </Svg>
);
