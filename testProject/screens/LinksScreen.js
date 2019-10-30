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
import WebBrowser from 'expo-web-browser';

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

LinksScreen.navigationOptions = {
  title: 'Links',
};

function handleMainLinksPress() {
  WebBrowser.openBrowserAsync(
    'https://hdap.org/'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  linkContainer: {
    paddingLeft: 20,
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  linkText: {
    paddingLeft: 20,
    fontSize: 22,
    color: 'rgba(96,100,109, 1)',
  },
  linkImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 1,
  },
  hairLine: {
    margin: 6,
    backgroundColor: '#575554',
    height: 3,
  },
});
