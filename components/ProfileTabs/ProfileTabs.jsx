import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {profileTabStyle} from './Style';

const ProfileTabs = props => {
  return (
    <Text
      style={[
        profileTabStyle.title,
        !props.isFocused && profileTabStyle.titlenotfocused,
      ]}>
      {props.title}
    </Text>
  );
};

ProfileTabs.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabs;
