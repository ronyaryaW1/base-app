import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../../components/Icons';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';
import Form from '../../components/smallComponent/Form';
import {windowWidth} from '../../utils/Dimensions';
import PromImg from '../../assets/images/Promotion.svg';
import PromImg2 from '../../assets/images/promImg2.svg';
import ProductCircle from '../../components/ProductCircle';
import CardProduct from '../../components/CardProduct';

const TitleMore = ({title, onPress, more}) => (
  <View style={styles.categoryTitle}>
    <Text style={styles.categoryText(false)}>{title}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.categoryText(true)}>{more}</Text>
    </TouchableOpacity>
  </View>
);

const ScrollProduct = ({ data}) => {
  const [paddingHorizontal, setPaddingHorizontal] = React.useState(16);
  return (
    <ScrollView
      onScroll={event => {
        const scrolling = event.nativeEvent.contentOffset.x;
        if (scrolling < 2) {
          setPaddingHorizontal(16);
        } else {
          setPaddingHorizontal(0);
        }
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View
        style={{flexDirection: 'row', paddingHorizontal: paddingHorizontal}}>
        {data.map((x, i) => (
          <CardProduct
            key={i.toString()}
            ProductImage={x.img}
            title={x.title}
            price={x.price}
            priceOri={x.priceOri}
            discount={x.discount}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const DashboardComponent = props => {
  const {dataProduct, flashShaleProduct} = props;
  const [value, setValue] = useState(null);
  const time = [{hour: '08'}, {hour: '34'}, {hour: '00'}];
  return (
    <ScrollView style={styles.conatiner}>
      <View style={{paddingHorizontal: 16}}>
        {/* header content */}
        <View style={styles.header}>
          <Form
            iconName="search"
            title="Search Product"
            typeIcon="FontAwesome"
            value={value}
            iconSize={20}
            customStyles={styles.searchBar}
            onChangeValue={setValue}
            customIconColor={COLORS.PRIMARY_BLUE}
          />
          <TouchableOpacity>
            <Icons
              name="hearto"
              type="AntDesign"
              size={24}
              color={COLORS.NEUTRAL_GREY}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons
              name="ios-notifications-outline"
              type="Ionicons"
              size={24}
              color={COLORS.NEUTRAL_GREY}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stroke} />
      {/* body */}
      <View style={styles.body}>
        {/* promo slider */}
        <View style={{paddingHorizontal: 16}}>
          <PromImg
            style={styles.promImg}
            width="100%"
            height={windowWidth * 0.58}
          />
          <Text style={styles.promTxt}>{`Super Flash Sale \n50% Off`}</Text>
          <View style={styles.promTimeContainer}>
            {time.map((times, i) => (
              <View key={i.toString()} style={styles.promCardContainer}>
                <View style={styles.promTime}>
                  <Text style={styles.promTimeTxt}>{times.hour}</Text>
                </View>
                {i !== 2 && <Text style={styles.sparator}>:</Text>}
              </View>
            ))}
          </View>
        </View>
        {/* category */}
        <TitleMore title="Category" more="More Category" />
        <View>
          <ProductCircle data={dataProduct} />
          <TitleMore title="Flash Sale" more="See More" />
          <ScrollProduct
            data={flashShaleProduct}
          />
          <TitleMore title="Mega Sale" more="See More" />
          <ScrollProduct
            data={flashShaleProduct}
          />
        <PromImg2 style={styles.promImg}
            width="100%"
            height={windowWidth * 0.58}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    marginBottom: 20,
  },
  categoryTitle: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryText: isMore => ({
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 14,
    color: isMore ? COLORS.PRIMARY_BLUE : COLORS.NEUTRAL_DARK,
    marginHorizontal: 16,
  }),
  conatiner: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    marginTop: 30,
  },
  header: {
    marginTop: 16,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promCardContainer: {flexDirection: 'row', alignItems: 'center'},
  promImg: {marginTop: windowWidth * 0.05},
  promTime: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderRadius: 5,
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promTimeContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 40,
    left: 24,
  },
  promTimeTxt: {
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.NEUTRAL_DARK,
    fontSize: 16,
  },
  promTxt: {
    position: 'absolute',
    top: 45,
    left: 24,
    color: COLORS.BACKGROUND_COLOR,
    fontSize: 24,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  searchBar: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: COLORS.NEUTRAL_LIGHT,
    borderRadius: 5,
    width: windowWidth * 0.7,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sparator: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 14,
    color: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: 2,
  },
  stroke: {
    width: '100%',
    backgroundColor: COLORS.NEUTRAL_LIGHT,
    height: 1.5,
    marginTop: 16,
  },
});

export default DashboardComponent;
