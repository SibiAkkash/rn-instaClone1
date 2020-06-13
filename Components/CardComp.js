import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Dimensions } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { Ionicons, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

class CardComp extends React.Component {
    
    render() {
        
        const img = {
          "1":require('../assets/dog.jpg'),
          "2":require('../assets/puffin.jpg'),
          "3":require('../assets/plane.jpg'),
        }

        return (
          <Card>
              <CardItem>
                  <Left>
                      <Thumbnail source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                      <Body>
                          <Text>Name</Text>
                          <Text note>31 Oct, 2019</Text>
                      </Body>
                  </Left>
              </CardItem>
              <CardItem cardBody>
                  <Image
                  style={{width:'100%', height:350,}}
                  source={img[this.props.imgsrc]} 
                />
              </CardItem>
              <CardItem style={{height:40}}>
                <Left>
                    <Button transparent>
                      <Ionicons name='md-heart-empty' size={25} color={'black'}/>
                    </Button>
                    <Button transparent>
                      <MaterialIcons name='chat-bubble-outline' size={25} color={'black'}/>
                    </Button>
                    <Button transparent>
                      <Feather name='send' size={25} color={'black'}/>
                    </Button>
                </Left>
              </CardItem>
              <CardItem style={{height:20}}>
                  <Text>{this.props.likes}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                  <Text style={{fontWeight:'900'}}>InstaHandle</Text>
                  Caption 
                  </Text>
                </Body>
              </CardItem>
          </Card>
        );
    }
}


export default CardComp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  