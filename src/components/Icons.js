import { StyleProp, TextStyle, ViewStyle, TouchableOpacity  } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export interface Props {
    type:
      | 'FontAwesome5'
      | 'Entypo'
      | 'EvilIcons'
      | 'Feather'
      | 'FontAwesome'
      | 'Foundation'
      | 'Ionicons'
      | 'MaterialCommunityIcons'
      | 'MaterialIcons'
      | 'Octicons'
      | 'SimpleLineIcons'
      | 'Zocial'
      | 'AntDesign';
    size: number;
    color: string;
    name: string;
    style: StyleProp<TextStyle>;
    containerStyle: StyleProp<ViewStyle>;
  }

  export default class Icons extends React.PureComponent<Props> {
    static defaultProps = {
      type: this.TYPE_ENTYPO,
      size: 30,
      color: '#666',
      name: 'email',
      style: {},
    };
  
    static TYPE_ENTYPO = 'Entypo';
  
    static TYPE_EVILICONS = 'EvilIcons';
  
    static TYPE_FEATHER = 'Feather';
  
    static TYPE_FONTAWESOME = 'FontAwesome';
  
    static TYPE_FONTAWESOME5 = 'FontAwesome5';
  
    static TYPE_ANTDESIGN = 'AntDesign';
  
    static TYPE_FOUNDATION = 'Foundation';
  
    static TYPE_IONICONS = 'Ionicons';
  
    static TYPE_MATERIALCOMMUNITYICONS = 'MaterialCommunityIcons';
  
    static TYPE_MATERIALICONS = 'MaterialIcons';
  
    static TYPE_OCTICONS = 'Octicons';
  
    static TYPE_ZOCIAL = 'Zocial';
  
    static TYPE_SIMPLELINEICONS = 'SimpleLineIcons';
    
    render() {
      const {
        name,
        size,
        color,
        style,
        onPress,
        type,
        containerStyle,
      } = this.props;
    
      switch (type) {
        default:
          this.icon = (
            <Entypo
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_EVILICONS:
          this.icon = (
            <EvilIcons
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_FEATHER:
          this.icon = (
            <Feather
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_FONTAWESOME:
          this.icon = (
            <FontAwesome
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_FOUNDATION:
          this.icon = (
            <Foundation
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_IONICONS:
          this.icon = (
            <Ionicons
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_MATERIALCOMMUNITYICONS:
          this.icon = (
            <MaterialCommunityIcons
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_MATERIALICONS:
          this.icon = (
            <MaterialIcons
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_OCTICONS:
          this.icon = (
            <Octicons
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_ZOCIAL:
          this.icon = (
            <Zocial
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_SIMPLELINEICONS:
          this.icon = (
            <SimpleLineIcons
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_ANTDESIGN:
          this.icon = (
            <AntDesign
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
        case Icons.TYPE_FONTAWESOME5:
          this.icon = (
            <FontAwesome5
              name={name}
              size={size}
              color={color}
              style={style}
            />
          );
          break;
      }
      if (onPress == null) {
        return this.icon;
      }
      return (
        <TouchableOpacity
          {...this.props}
          onPress={onPress}
          activeOpacity={0.6}
          style={style}
        >
          {this.icon}
        </TouchableOpacity>
      );
    }
  }