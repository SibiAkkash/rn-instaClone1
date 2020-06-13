import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class MediaTab extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon:({tintColor}) =><Ionicons name="ios-add-circle" size={32} color={tintColor} />   
    })

    render() {
        return (
          <View style={styles.container}>
            <Text>Media Tab</Text>
          </View>
        );
    }
}


export default MediaTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  