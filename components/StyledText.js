import React from 'react';
import { Text } from 'react-native';
import Colors from '../constants/Colors';

export function MonoText(props) {
  return (
    <Text 
      {...props} 
      style={[props.style, { fontFamily: 'space-mono' }]} 
      color={Colors.tabTextDefault}
      
    />
  );
}
