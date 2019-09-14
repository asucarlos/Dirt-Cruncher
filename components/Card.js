import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
// import { Icon } from "react-native-vector-icons";

export default class DirtCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={require("../assets/images/map.png")} style={styles.welcomeImage} />
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="map" />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                  <Text></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="map-marker-alt" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  welcomeImage: {
    height: 200,
    width: null,
    flex: 1
  }
});
