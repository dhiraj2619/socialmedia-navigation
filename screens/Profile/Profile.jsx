import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      <View>
        <Text style={{color: 'purple'}} onPress={() => navigation.goBack()}>
          Go Back
        </Text>
        <Text>Welcome to my profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
