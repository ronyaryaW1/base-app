import {View, Text} from 'react-native';
import LogoImage from '../assets/images/Blue.svg';
import React from 'react';
import { windowWidth } from '../utils/Dimensions';

const Logo = () => {
  return (
    <LogoImage
      style={{marginTop: windowWidth * 0.25}}
      width={windowWidth * 0.2}
      height={windowWidth * 0.2}
    />
  );
};

export default Logo;
