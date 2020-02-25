import { StyleSheet, Dimensions } from 'react-native';
// import { colors, constants } from 'path/to/colors'

const screen = Dimensions.get('window')
const screenWidth = screen.width
const screenHeight = screen.height

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.6,
    backgroundColor: 'white',
    borderWidth: 1
  },
  horizontalContainer: {
    // flex: 1,
    // height: 80,
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  modalHeader: {
    // flex: 1,
    height: 80,
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  leftHorizontal: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    height: '100%',
    overflow: 'hidden',
  },
  rightHorizontal: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: '100%',
    overflow: 'hidden',
  },
  topSide: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%'
  },
  bottomSide: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    width: '100%'
  },
  leftSide: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    height: '100%',
    // width: '100%'
  },
  rightSide: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    // width: '100%'
  }
});

export default styles;