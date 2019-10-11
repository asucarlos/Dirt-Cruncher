import React, { Component } from "react";
import { Modal, Text, View, Alert, StyleSheet } from "react-native";
import { Button, Form, Item, Input, Textarea } from "native-base";
import { AntDesign } from "@expo/vector-icons";

class AddListScreen extends Component {
  state = {
    modalVisible: false,
    iconSize: 30
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <Button
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={styles.closeButton}
            >
              <AntDesign name="close" size={this.state.iconSize} />
            </Button>
            <View>
              <Form>
                <Text h1 style={styles.formHeader}>
                  Add Your Listing
                </Text>
                <Item rounded>
                  <Input placeholder="Your Name" />
                </Item>
                <Item rounded>
                  <Input placeholder="Contact" />
                </Item>
                <Item rounded>
                  <Input placeholder="Where is the dump?" />
                </Item>
                <Item rounded>
                  <Input placeholder="Soil Type" />
                </Item>
                <Item rounded>
                  <Input placeholder="Weight In Tons" />
                </Item>
                <Item rounded>
                  <Input placeholder="Enter Price" />
                </Item>
                <Item rounded>
                  <Textarea rowSpan={5} bordered placeholder="Additional Notes" />
                </Item>
                <Button>
                  <Text>Submit</Text>
                </Button>
              </Form>
            </View>
          </View>
        </Modal>

        <Button
          round
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.addListButton}
        >
          <AntDesign name="plus" size={this.state.iconSize} style={styles.iconInButton} />
        </Button>
      </View>
    );
  }
}

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
    justifyContent: "center"
  }
});
export default AddListScreen;
