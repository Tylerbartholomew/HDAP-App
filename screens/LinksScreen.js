// This page contains all necessary external links
import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  View, 
  Text,
  Image,
  Line,
  TouchableOpacity
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';  // Imports the web browser so that the links can open in a web browser

// Renders the screen on the device
export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.hairLine} />
        <View style={styles.linkContainer}>
          <Image
            source={
                require('../assets/images/icon.png')
            }
            style={styles.linkImage}
          />
          <TouchableOpacity onPress={handleMainLinksPress}>
            <Text style={styles.linkText}>
              Main Website
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hairLine} />
    </ScrollView>
  );
}

// Sets the title of the page
LinksScreen.navigationOptions = {
  title: 'Links',
};

// When the main link is pressed, redirect here
function handleMainLinksPress() {
  WebBrowser.openBrowserAsync(
    'https://hdap.org/'
  );
}

// Create cascading style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',  // White
  },
  linkContainer: {
    paddingLeft: 20,
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  // The text on the links page
  linkText: {
    paddingLeft: 20,
    fontSize: 22,
    color: 'rgba(96,100,109, 1)',
  },
  // The image on the links page
  linkImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 1,
  },
  // Lines separating each 
  hairLine: {
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: '#3d3d3d',
    height: 2,
  },
});
