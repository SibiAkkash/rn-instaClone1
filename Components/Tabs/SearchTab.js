import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SearchTab extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon:({tintColor}) =><Ionicons name="md-search" size={32} color={tintColor} />   
    })

    render() {
        return (
          <View style={styles.container}>
            <Text>Search Tab</Text>
          </View>
        );
    }
}


export default SearchTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  