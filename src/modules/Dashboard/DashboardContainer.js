import {View, Text} from 'react-native';
import React from 'react';
import DashboardComponent from './DashboardComponent';
import shirt from '../../assets/images/shirt.svg';
import Tshirt from '../../assets/images/Tshirt.svg';
import Product1 from '../../assets/images/product1.svg';

const DashboardContainer = () => {
  const Product = [
    {
      title: 'Man Shirt',
      Image: shirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'Man Shirt',
      Image: Tshirt,
    },
    {
      title: 'T-Shirt',
      Image: Tshirt,
    },
  ];
  const flashShaleProduct = [
    {
      img: Product1,
      title: 'FS - Nike Air Max 270 React...',
      price: '$299,43',
      priceOri: '$534,33',
      discount: 24
    },
    {
      img: Product1,
      title: 'FS - Nike Air Max 270 React...',
      price: '$299,43',
      priceOri: '$534,33',
      discount: 24
    },
    {
      img: Product1,
      title: 'FS - Nike Air Max 270 React...',
      price: '$299,43',
      priceOri: '$534,33',
      discount: 24
    }
  ]
  return <DashboardComponent dataProduct={Product} flashShaleProduct={flashShaleProduct} />;
};

export default DashboardContainer;
