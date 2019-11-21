// This is the home page of the app
// It appears when the app is opened Contains welcome information
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.bannerContainer}>
          <Image
            source={
                require('../assets/images/hdap-logo.png')
            }
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitleText}>TOGETHER WE CAN DO{"\n"}WHAT WE CANNOT DO ALONE.</Text>
            <View style={styles.welcomeBox}>
              <View style={styles.welcomeSubBox}>
                <Text style={styles.welcomeSubtitleText}>Providing intensive outpatient treatment, intervention and prevention education.</Text>
              </View>
            </View>
        </View>
        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

// This function directs to an external when the learn more button is pressed
function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

// This function directs to an external link when the help button is pressed
function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://www.hdap.org/'
  );
}

// Set up a Cascading Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Text when in development mode
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)', // White, opacity 40%
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    backgroundColor: '#8990cc',
    height: 400,
    padding: 5,
    justifyContent: 'space-between',
  },
  welcomeTitleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 45,
    marginTop: '3%',
    justifyContent: 'flex-start',
    //marginTop: '50%',
    //marginBottom: '50%',
  },
  welcomeSubtitleText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
  },
  welcomeBox: {
    alignItems: 'center',
    height: 165,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  welcomeSubBox: {
    position: 'absolute',
    backgroundColor: '#a1a7d7',
    margin: 7,
    paddingLeft: 35, 
    paddingRight: 35, 
    paddingTop: 15, 
    paddingBottom: 15, 
  },
  bannerContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: Colors.primary,
  },
  bannerImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginTop: 1,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
});
