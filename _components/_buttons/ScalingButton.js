import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring,
} from "react-native-reanimated";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import { Button } from "./Button";

export const ScalingButton = ({
                         children,
                         onPress = () => {},
                         activeScale = 0.9,
                         springConfig = {
                             damping: 10,
                             mass: 1,
                             stiffness: 200,
                         },
                         contentContainerStyle,
                         handlerProps,
                     }) => {
    const scale = useSharedValue(1);
    const sz = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withSpring(scale.value, springConfig),
                },
            ],
        };
    });

    const gestureHandler = useAnimatedGestureHandler({
        onStart: () => {
            scale.value = activeScale;
        },
        onCancel: () => {
            scale.value = 1;
        },
        onEnd: () => {
            scale.value = 1;
        },
    });

    return (
        <LongPressGestureHandler
            minDurationMs={0.5}
            maxDist={10}
            {...handlerProps}
            onGestureEvent={gestureHandler}
        >
            <Animated.View style={[sz, contentContainerStyle]}>
                {children ? children :
                    <Button text="Login" isLoading={false} />
                }
            </Animated.View>
        </LongPressGestureHandler>
    );
};

const buttonStyles = StyleSheet.create({
    loadingBtn: {
        width: '50%',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#489b32',
    },

    loginText: {
        fontFamily: 'Visby-Bold',
        color: 'white',
        fontSize: 22,
        marginTop: 20,
        marginBottom: 20,
    },
});