import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Dimensions } from 'react-native';
import { Content, Container, Thumbnail, Header, Left, Right, Body, Button } from 'native-base';
import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';


var img = [
    require('../../assets/dog.jpg'),
    require('../../assets/plane.jpg'),
    require('../../assets/puffin.jpg'),
    require('../../assets/Stories/fireworks.jpg'),
    require('../../assets/Stories/ocean.jpg'),
    require('../../assets/Stories/obama.jpg'),
    require('../../assets/Stories/trump.jpg'),
    require('../../assets/Stories/will.jpg'),
    require('../../assets/Stories/ronaldo.jpg'),
    require('../../assets/Stories/dicap.jpg'),
]

var img1 = [
  require('../../assets/Stories/will.jpg'),
  require('../../assets/Stories/ronaldo.jpg'),
  require('../../assets/Stories/dicap.jpg'),
]

var {width,height} = Dimensions.get('window');

class ProfileTab extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon:({tintColor}) =><Ionicons name="md-person" size={32} color={tintColor} />   
    })

    constructor(props)
    {
      super(props)
      this.state={
          activeIndex:0
      }
    }

    segmentClicked = (index) => {
        this.setState({
          activeIndex:index
        })

    }

    SectionOne = () => {
      return img.map((imgs,index) => {
          return (
            <View key={index} style={[{width:(width)/3},{height:(width)/3},{marginBottom:2}, index%3!==0 ? {paddingLeft:2}:{paddingLeft:0}]}>
              <Image style={{flex:1, width: undefined, height: undefined}}
              source={imgs}/>
            </View>
          )
      }
      )
    }

    SectionTwo = () => {
      return img1.map((imgs,index) => {
        return (
          <View key={index} style={[{width:(width)/3},{height:(width)/3},{marginBottom:2}, index%3!==0 ? {paddingLeft:2}:{paddingLeft:0}]}>
            <Image style={{flex:1, width: undefined, height: undefined}}
            source={imgs}/>
          </View>
        )
    }
    )
    }

    ProfileSection = () => {
      if(this.state.activeIndex==0)
      {
        return(
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {this.SectionOne()}
          </View>

        )
      }

      else if(this.state.activeIndex==1)
      {
          return(
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              {this.SectionTwo()}
            </View>
          )
      }
    }

    render() {
        return (
          <Container style={{backgroundColor:'#fff', flex:1}}>
            <Header style={{backgroundColor:'#fff'}}>
              <Left><Text style={{fontSize:18,fontWeight:'200'}}>ashwin.416</Text></Left>
              <Right><Octicons name="three-bars" size={32}/></Right>
            </Header>
            <Content>
              <View>
                <View style={{flexDirection:"row",paddingTop:5, paddingLeft:5}}>
                  <View style={{flex:1,}}>
                    <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}
                      style={{width:75, height:75, borderRadius:37.5,}} 
                    />
                  </View>
                  <View style={{flex:3}}>
                    <View style={{flexDirection:"row", justifyContent:'space-around', marginTop:12}}>
                      <View style={{alignItems:'center'}}>
                      <Text style={{fontSize:15}}>10</Text>
                      <Text style={{fontSize:15,color:'grey'}}>Posts</Text>
                      </View>
                      
                      <View style={{alignItems:'center'}}>
                      <Text style={{fontSize:15}}>350</Text>
                      <Text style={{fontSize:15,color:'grey'}}>Followers</Text>
                      </View>
                      
                      <View style={{alignItems:'center'}}>
                      <Text style={{fontSize:15}}>503</Text>
                      <Text style={{fontSize:15 ,color:'grey'}}>Following</Text>
                      </View>
                    </View>

                  </View>
                  
                </View>
                <View style={{paddingTop:5, paddingLeft:5}}>
                  <Text style={{fontWeight:'bold'}}>Ashwin Guptha</Text>
                  <Text>VITCC</Text>
                  <Text>Red Devils</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:30}}>
                  <Button bordered dark
                  style={{flex:3,marginLeft:10,marginRight:10,justifyContent:'center', height:30}}>
                    <Text>Edit Profile</Text>
                  </Button>
                </View>
              </View>

              <View>
                <View style={{flexDirection:'row', justifyContent:'space-around', borderTopWidth: 1, borderTopColor: '#d1cece',
              marginTop:10}}>
                <Button transparent
                onPress={()=>this.segmentClicked(0)}
                active={this.state.activeIndex==0}>
                  <Ionicons name="md-apps" size={32}
                  style={[this.state.activeIndex==0 ? {} : {color:'#d1cece'}]}/>
                </Button>
                <Button transparent
                onPress={()=>this.segmentClicked(1)}
                active={this.state.activeIndex==1}>
                  <Ionicons name="md-people" size={32}
                  style={[this.state.activeIndex==1 ? {} : {color:'#d1cece'}]}/>
                </Button>
                </View>
                
                {this.ProfileSection()}
              </View>

            </Content>
          
          </Container>
        );
    }
}


export default ProfileTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  