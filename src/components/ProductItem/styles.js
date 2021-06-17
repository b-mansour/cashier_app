import {StyleSheet} from 'react-native';
import {colors} from '../../assets/Colors';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    // borderWidth: 2,
    // borderColor: '#12b520',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal:5
  },
  image: {
    flex: 2,
    height: 150,
    width: 180,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 17,
    color:colors.primary, 
    left:'50%', 
    fontWeight:'bold'
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default styles;
