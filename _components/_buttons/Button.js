import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { DotIndicator } from 'react-native-indicators';
export const Button = ({
  styles,
  textStyles,
  text = 'Login',
  indicatorColor,
  indicatorCount,
  indicatorSize,
  isLoading = false,
}) => {

  return (
    <>
      <Animated.View>
        <TouchableOpacity
          style={buttonStyles.loadingBtn}
          activeOpacity={1}
        >
          {isLoading ? (
            <DotIndicator
              color={indicatorColor}
              count={indicatorCount}
              size={indicatorSize}
            />
          ) : (
            <Text style={textStyles ? textStyles : buttonStyles.loginText}>
              {text}
            </Text>
          )}
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const buttonStyles = StyleSheet.create({
  loadingBtn: {
    width: '100%',
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
