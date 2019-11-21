// This is the resources page of the app
// It appears when the user presses the rescources button

import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import Colors from '../constants/Colors';

// Renders the screen on the device
export default function ResourcesScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                Resources Hunterdon Drug Awareness Program
            </Text>
        </View>
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>
                We are a progressive, science based nonprofit outpatient (OP) and intensive outpatient (IOP) treatment program
            </Text>
        </View>
    </ScrollView>
  );
}

// Picks and displays the title at the top of the screen (Over purple box)
ResourcesScreen.navigationOptions = {
  title: 'Resources',
};
// Create cascading style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
// Container of the title (Purple box)
  titleContainer: {
    padding: 15,
    margin: 15,
    fontSize: 20,
    backgroundColor: Colors.primary,
    lineHeight: 24,
    textAlign: 'center',
  },
  // Text of the title
  titleText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
  },
  // Container of the body
  bodyContainer: {
    padding: 15,
    margin: 15,
    fontSize: 15,
    lineHeight: 24,
  },
  // Text of the body
  bodyText: {

  },
});
