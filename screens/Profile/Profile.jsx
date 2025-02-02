import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import profileStyle from './Style';
import { ProfileTabNavigation } from '../../navigation/mainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      <ScrollView contentContainerStyle={globalStyles.flexgrow}>
        <View style={[globalStyles.flexCenter, globalStyles.mt20]}>
          <View style={[globalStyles.flexrow, profileStyle.imgBorder]}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={profileStyle.profileImage}
            />
          </View>
          <View style={globalStyles.mt20}>
            <Text style={profileStyle.profileText}>Dhiraj Bhirud</Text>
          </View>
        </View>
        <View style={profileStyle.profileContainer}>
          <View style={globalStyles.alignCenter}>
            <Text style={profileStyle.followCount}>21</Text>
            <Text style={globalStyles.small}>Following</Text>
          </View>
          <View style={profileStyle.statBorder} />
          <View style={globalStyles.alignCenter}>
            <Text style={profileStyle.followCount}>21</Text>
            <Text style={globalStyles.small}>Following</Text>
          </View>
          <View style={profileStyle.statBorder} />
          <View style={globalStyles.alignCenter}>
            <Text style={profileStyle.followCount}>21</Text>
            <Text style={globalStyles.small}>Following</Text>
          </View>
        </View>
        <View style={globalStyles.flex}>
            <ProfileTabNavigation/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
