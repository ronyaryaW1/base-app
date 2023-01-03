// // You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// // react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardContainer from '../../modules/Dashboard/DashboardContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StatusBar} from 'react-native';
import Icons from '../../components/Icons';
import {COLORS} from '../styles/Colors';

function ExploreScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ExploreScreen!</Text>
    </View>
  );
}
function CartScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function OfferScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let type;

          switch (route.name) {
            default:
              iconName = 'home';
              type = "Feather";
              break;
            case 'Home':
              iconName = 'home';
              type = "Feather";
              break;
            case 'Explore':
              iconName = 'search';
              type = "Ionicons";
              break;
            case 'Cart':
              iconName = 'shopping-cart';
              type = "Feather";
              break;
            case 'Offer':
              iconName = 'local-offer';
              type = "MaterialIcons";
              break;
            case 'Profile':
              iconName = 'user';
              type = "Feather";
              break;
          }

          // You can return any component that you like here!
          return (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icons
                  name={iconName}
                  size={24}
                  color={color}
                  type={type}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            </View>
          );
        },
        tabBarActiveTintColor: COLORS.PRIMARY_BLUE,
        tabBarInactiveTintColor: COLORS.NEUTRAL_GREY,
      })}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={DashboardContainer}
      />
      <Tab.Screen
        name="Explore"
        options={{headerShown: false}}
        component={ExploreScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{headerShown: false}}
        component={CartScreen}
      />
      <Tab.Screen
        name="Offer"
        options={{headerShown: false}}
        component={OfferScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{headerShown: false}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigation;
