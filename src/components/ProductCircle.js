import {ScrollView, View} from 'react-native';
import React from 'react';
import Circle from './smallComponent/Circle';
import {windowWidth} from '../utils/Dimensions';

const ProductCircle = props => {
  const {data} = props;
  const [paddingHorizontal, setPaddingHorizontal] = React.useState(16);
  return (
    <ScrollView
      horizontal
      onScroll={event => {
        const scrolling = event.nativeEvent.contentOffset.x;
        if (scrolling < 2) {
          setPaddingHorizontal(16);
        } else {
          setPaddingHorizontal(0);
        }
      }}
      showsHorizontalScrollIndicator={false}
      style={{paddingHorizontal: paddingHorizontal}}>
      {data.map((x, i) => (
        <Circle key={i.toString()} title={x.title} Image={x.Image} />
      ))}
    </ScrollView>
  );
};

export default ProductCircle;
