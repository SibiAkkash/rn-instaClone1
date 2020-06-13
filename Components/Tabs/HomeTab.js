import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Content, Container, Thumbnail, Header, Left, Right, Body } from 'native-base';
import { MaterialCommunityIcons, Ionicons, EvilIcons } from '@expo/vector-icons';
import CardComp from '../CardComp';

class HomeTab extends React.Component {
    
    static navigationOptions = ({ navigation }) => ({
        tabBarIcon:({tintColor}) => <MaterialCommunityIcons name="home" size={32} color={tintColor}/> ,
                    
    })
    render() {
        return (
          <Container styles={styles.container}>
            <Header style={{backgroundColor:'#fff',textAlign:'center'}}>
              <Left><Ionicons name="md-camera" size={32} style={{paddingLeft:7}} /></Left>
              <Body><Text style={{color:'#101010',fontSize:20,}}>Instagram</Text></Body>
              <Right><EvilIcons name="sc-telegram" size={34} style={{paddingRight:7}} /></Right>
            </Header>
            
            <Content>
                <View style={{flex:3, height:60,marginTop:10}}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={{paddingStart:5,
                      paddingEnd:5}}
                    >
                      <Thumbnail source={require('../../assets/Stories/obama.jpg')}
                      style={{marginHorizontal:5,borderColor:'#10ed0c',borderWidth:2,}}/> 

                      <Thumbnail source={require('../../assets/Stories/trump.jpg')}
                      style={{marginHorizontal:5,borderColor:'#10ed0c',borderWidth:2,}}/> 

                      <Thumbnail source={require('../../assets/Stories/dicap.jpg')}
                      style={{marginHorizontal:5,borderColor:'#10ed0c',borderWidth:2,}}/> 

                      <Thumbnail source={require('../../assets/Stories/ocean.jpg')}
                      style={{marginHorizontal:5,borderColor:'red',borderWidth:2,}}/> 
                      
                      <Thumbnail source={require('../../assets/Stories/ronaldo.jpg')}
                      style={{marginHorizontal:5,borderColor:'red',borderWidth:2,}}/> 

                      <Thumbnail source={require('../../assets/Stories/fireworks.jpg')}
                      style={{marginHorizontal:5,borderColor:'red',borderWidth:2,}}/> 

                      <Thumbnail source={require('../../assets/Stories/will.jpg')}
                      style={{marginHorizontal:5,borderColor:'red',borderWidth:2,}}/> 
                    </ScrollView>

                </View>
                <CardComp imgsrc="1" likes="230 likes"/>
                <CardComp imgsrc="2" likes="127 likes"/>
                <CardComp imgsrc="3" likes="333 likes"/>
            </Content>
          </Container>
        );
    }
}


export default HomeTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#173',
    },
  });
  