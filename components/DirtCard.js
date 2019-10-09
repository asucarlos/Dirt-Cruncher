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

export default DirtCard = ({ data, navigate }) => {
  console.log("dirt card", data);
  const iconSize = 60;
  return (
    <Card>
      <CardItem cardBody>
        <Image source={require("../assets/images/map.png")} style={styles.mapImage} />
      </CardItem>
      <CardItem>
        <Left>
          <FontAwesome name="map-marker" size={iconSize} style={styles.mapMarker} />
          <Body>
            <Text>{data.pick_up_point}</Text>
            <Text note>{data.company}</Text>
            <Text></Text>
          </Body>
        </Left>
        <Right>
          <Body>
            <Text>Price: ${data.quote}</Text>
            <Text>Soil : {data.soil_type}</Text>
            <Text>Quantity: {data.quantity} Tons</Text>
          </Body>
        </Right>
      </CardItem>
      <CardItem>
        <Body style={styles.buyButtonContainer}>
          <Button
            style={styles.buyButton}
            onPress={() => {
              navigate("Details", {
                id: data.id,
                params: "something"
              });
            }}
          >
            <Text style={styles.buyButtonText}>Buy</Text>
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  mapImage: {
    height: 150,
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
