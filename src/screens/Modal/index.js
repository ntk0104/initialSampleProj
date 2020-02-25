import _ from 'lodash';
import React from 'react';
import styles from './styles';
// import { colors, constants } from 'path/to/colors'

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Easing
} from 'react-native';

const screen = Dimensions.get('window')
const screenHeight = screen.height

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this._onScreenShowing()
  }

  componentWillReceiveProps(nextProps) {
  }

  closeModal = () => {
    this.props.navigation.goBack();
  }

  _onScreenShowing = () => {
    const transitionY = Animated.timing(
      this.state.animatedValue,
      {
        toValue: 1,
        duration: 600
      }
    ).start()
    // return transitionY
  }

  _onScreenHidding = () => {
    const transitionY = Animated.timing(
      this.state.animatedValue,
      {
        toValue: 0,
        duration: 800
      }
    ).start()
    // return transitionY
  }




  render() {
    // const {  } = this.state
    // const { } = this.props
    const screenInterpolation = {
      opacity: this.state.animatedValue.interpolate({
        inputRange:  [0, 0.1, 0.9, 1],
        outputRange: [0, 0,   0  , 1]
      })
      ,
      transform: [
        {
          translateY: this.state.animatedValue.interpolate({
            inputRange:  [0,            0.01, 1],
            outputRange: [screenHeight, 0,   0]
          })
        }
      ]
    }
    const modalInterpolation = {
      transform: [
        {
          translateY: this.state.animatedValue.interpolate({
            inputRange:  [0,             0.2,          0.4           , 1],
            outputRange: [screenHeight, screenHeight, screenHeight,   0]
          })
        }
      ]
    }
    return (
      <Animated.View style={[styles.container, screenInterpolation]}>
        <TouchableWithoutFeedback onPress={this.closeModal}>
          <View style={styles.topSide}>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.horizontalContainer}>

          <TouchableWithoutFeedback onPress={this.closeModal}>
            <View style={styles.leftSide}>
            </View>
          </TouchableWithoutFeedback>

          <Animated.View style={[styles.viewStyle, modalInterpolation]}>
            <View style={styles.modalHeader}>
              <Text style={styles.textStyle} numberOfLines={1}>Modal Header</Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.rightHorizontal} onPress={this.doSth}>
                <Text style={styles.btnTxt}>Close</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textStyle} numberOfLines={1}>Modal</Text>
          </Animated.View>

          <TouchableWithoutFeedback onPress={this.closeModal}>
            <View style={styles.rightSide}>
            </View>
          </TouchableWithoutFeedback>

        </View>

        <TouchableWithoutFeedback onPress={this.closeModal}>
          <View style={styles.bottomSide}>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

export default Modal
