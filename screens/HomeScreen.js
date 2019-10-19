import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import { Container, Content, Button, Input } from "native-base";
import { MonoText } from "../components/StyledText";
import { useNavigation } from "react-navigation-hooks";
import { SQLite } from "expo-sqlite";

//components
import DirtCard from "../components/DirtCard";
import AddListScreen from "./AddListScreen";

const db = SQLite.openDatabase("db.db");

export default function HomeScreen() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [dirtList, setDirtList] = useState(null);
  const [lists, setLists] = useState(null);
  const [inputType, setInputType] = useState(null);
  const { navigate } = useNavigation();

  getList = () => {
    fetch("http://192.168.0.108:8080/quotes")
      .then(res => res.json())
      .then(data => {
        setDirtList(data);
        console.log("Event list from db", data);
      })
      .catch(err => console.log("MyError:", err));
  };
  useEffect(() => {
    getList();
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, company text, soil_type text, quote integer, quantity integer, pick_up_point text, phone integer);"
      );
    });
  }, []);

  const addListHandler = (name, number, location, type, weight, price, note) => {
    console.log(name, number, location, type, weight, price, note);
  };

  const add = text => {
    db.transaction(
      tx => {
        tx.executeSql("insert into items (value) values (0, ?)", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      this.update
    );
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Content>
          {dirtList &&
            dirtList.map(data => <DirtCard data={data} key={data.id} navigate={navigate} />)}
        </Content>
      </ScrollView>
      <AddListScreen addListHandler={addListHandler} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Home"
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync("https://docs.expo.io/versions/latest/workflow/development-mode/");
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
