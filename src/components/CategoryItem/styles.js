import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical:5,
    marginHorizontal:5,
    height: 100,
    width: 100

  },
  image: {
    
    height: 98,
    width: 98,
    borderRadius:10,
    resizeMode: 'cover',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
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
