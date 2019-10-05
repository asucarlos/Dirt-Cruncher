import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right
} from "native-base";

export default DirtCard = props => {
  console.log(props.state);

  return (
    <Container>
      <Content>
        <Card>
          <CardItem cardBody>
            <Image source={require("../assets/images/map.png")} style={styles.welcomeImage} />
          </CardItem>
          <CardItem>
            <Left>
              <FontAwesome name="map-marker" size="40" style={styles.mapMarker} />
              <Body>
                <Text>Eglinton</Text>
                <Text note>GeekyAnts</Text>
                <Text></Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Text>Price: </Text>
                <Text>Soil :</Text>
                <Text>Price:</Text>
              </Body>
            </Right>
          </CardItem>
          <CardItem>
            <Body style={styles.buyButtonContainer}>
              <Button style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  welcomeImage: {
    height: 200,
    width: null,
    flex: 1
  },
  buyButtonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buyButton: {
    width: 150,
    alignContent: "center"
  },
  buyButtonText: {
    marginRight: "auto",
    marginLeft: "auto"
  },
  mapMarker: {
    fontSize: 16
  }
});
