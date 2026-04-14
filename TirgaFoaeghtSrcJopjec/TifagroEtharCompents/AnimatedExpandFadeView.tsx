import { Animated, ViewStyle } from 'react-native';
import React, { useEffect, useRef } from 'react';

type AnimatedExpandFadeViewProps = {
    maxHeight: number;
    style?: ViewStyle;
    children: React.ReactNode;
    visible: boolean;
};

export default function AnimatedExpandFadeView({
    visible,
    maxHeight,
    children,
    style,
}: AnimatedExpandFadeViewProps) {
    const animHeight = useRef(new Animated.Value(0)).current;
    const animOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(animHeight, {
                    toValue: maxHeight,
                    duration: 350,
                    useNativeDriver: false,
                }),
                Animated.timing(animOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(animHeight, {
                    toValue: 0,
                    duration: 350,
                    useNativeDriver: false,
                }),
                Animated.timing(animOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start();
        }
    }, [visible, maxHeight]);

    return (
        <Animated.View
            style={[
                {
                    height: animHeight,
                    opacity: animOpacity,
                    overflow: 'hidden',
                },
                style,
            ]}
        >
            <Animated.View style={{ opacity: animOpacity }}>
                {children}
            </Animated.View>
        </Animated.View>
    );
}
