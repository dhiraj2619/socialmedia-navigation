import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import ProfileTabs from '../components/ProfileTabs/ProfileTabs';

const Stack = createStackNavigator();
const profileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>this is tab 1</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>this is tab 2</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>this is tab 3</Text>
    </View>
  );
};
export const ProfileTabNavigation = () => {
  return (
    <profileTabs.Navigator screenOptions={{tabBarIndicatorStyle:{
      backgroundColor:'transparent'
    }}}>
      <Stack.Screen
        name={'Tab1'}
        component={Tab1}
        options={{tabBarLabel: ({focused}) => <ProfileTabs title={'photos'} isFocused={focused}/>}}
      />
      <Stack.Screen
        name={'Tab2'}
        component={Tab2}
        options={{tabBarLabel: ({focused}) => <ProfileTabs title={'videos'} isFocused={focused}/>}}
      />
      <Stack.Screen
        name={'Tab3'}
        component={Tab3}
        options={{tabBarLabel: ({focused}) => <ProfileTabs title={'posts'} isFocused={focused}/>}}
      />
    </profileTabs.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
