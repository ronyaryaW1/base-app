import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../config/styles/Colors';
import {FONTS} from '../config/styles/Fonts';
import { windowWidth } from '../utils/Dimensions';

const CardProduct = props => {
  const {ProductImage, title, price, priceOri, discount, key} = props;
  return (
    <View key={key}
      style={{
        width: windowWidth * 0.4,
        minHeight: windowWidth * 0.65,
        borderColor: COLORS.NEUTRAL_LIGHT,
        borderWidth: 1,
        marginRight: 8,
        padding: 8,
      }}>
      <ProductImage width="100%" height={windowWidth * 0.35} />
      <View style={{marginTop: 8, width: 110, marginBottom: 8}}>
        <Text
          style={{
            color: COLORS.NEUTRAL_DARK,
            fontFamily: FONTS.POPPINS_BOLD,
            fontSize: 13,
          }}>
          {title}
        </Text>
        <Text
          style={{
            paddingVertical: 8,
            color: COLORS.PRIMARY_BLUE,
            fontFamily: FONTS.POPPINS_BOLD,
          }}>
          {price}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: COLORS.NEUTRAL_GREY,
              fontSize: 10,
              fontFamily: FONTS.POPPINS_REGULAR,
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}>
            {priceOri}
          </Text>
          <Text
            style={{
              color: COLORS.PRIMARY_RED,
              fontSize: 10,
              fontFamily: FONTS.POPPINS_BOLD,
            }}>
            {discount}% Off
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardProduct;
