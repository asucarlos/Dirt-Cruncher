import React, { useState, useEffect } from "react";
import { Modal, Text, View, Alert, StyleSheet } from "react-native";
import { Button, Form, Item, Input, Textarea, Container, Content } from "native-base";
import { AntDesign } from "@expo/vector-icons";

AddListScreen = ({ addListHandler, inputHandler }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [iconSize, setIconSize] = useState(30);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{ marginTop: 22 }}>
          <Form
            model="newList"
            onSubmit={list => {
              return console.log("this is list", list);
            }}
          >
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={styles.closeButton}
            >
              <AntDesign name="close" size={iconSize} />
            </Button>
            <Button style={styles.submitButton} onPress={addListHandler}>
              <Text>Submit</Text>
            </Button>
            <Text h1 style={styles.formHeader}>
              Add Your Listing
            </Text>
            <Item rounded style={styles.Input}>
              <Input placeholder="Your Name" onChangeText={inputHandler} />
            </Item>
            <Item rounded>
              <Input placeholder="Contact Number" keyboardType="numeric" />
            </Item>
            <Item rounded>
              <Input placeholder="Where is the dump?" />
            </Item>
            <Item rounded style={styles.Input}>
              <Input placeholder="Soil Type" />
            </Item>
            <Item rounded style={styles.Input}>
              <Input placeholder="Weight In Tons" keyboardType="numeric" />
            </Item>
            <Item rounded>
              <Input placeholder="Enter Price" keyboardType="numeric" />
            </Item>
            <Textarea rowSpan={5} bordered placeholder="Additional Notes" />
          </Form>
        </View>
      </Modal>

      <Button
        round
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.addListButton}
      >
        <AntDesign name="plus" size={iconSize} style={styles.iconInButton} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  formHeader: {
    fontSize: 20
  },
  addListButton: {
    height: 60,
    width: 60,
    position: "absolute",
    bottom: 30,
    right: 10,
    borderRadius: 50,
    justifyContent: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.3
  },
  Input: {
    width: 150
  },
  nameInput: {},
  contactInput: {},
  submitButton: {
    justifyContent: "center",
    width: 100,
    position: "absolute",
    right: 10,
    top: 0
  }
});
export default AddListScreen;
