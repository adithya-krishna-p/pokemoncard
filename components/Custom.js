import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    ScrollView,
    TouchableNativeFeedback,
    TouchableHighlight,
    Button,
    Alert,
    Platform,
  } from "react-native";
import { StatusBar } from "expo-status-bar";
import Pokemoncard from "./Pokemoncard";
  
  export default function Custom() {
    const handlepress = () => console.log("text pressed");
    return (
      
  <ScrollView>
  <StatusBar style="light" />
  <SafeAreaView style={styles.container}>
        <Pokemoncard />
        <Text>hi adhi</Text>
    </SafeAreaView>

   <View style={styles.container}>
  <Text numberOfLines={3} onPress={handlepress}>
    hello, You should always try to avoid long sentences. Below are two
    examples, as well as some facts about long sentences in general. In
    2005, Halton Borough Council put up a notice to tell the public about
    its plans to move a path from one place to another. Quite astonishingly,
    the notice was a 630 word sentence, which picked up one of our Golden
    Bull awards that year. Here is it in full.{" "}
  </Text>
  
  <TouchableHighlight onPress={() => console.log("image tapped")}>
    <Image
      blurRadius={5}
      source={{
        width: 400,
        height: 300,
        uri: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?s=1024x1024&w=is&k=20&c=MB1-O5fjps0hVPd97fMIiEaisPMEn4XqVvQoJFKLRrQ=",
      }}
    />
  </TouchableHighlight>
  
  <TouchableNativeFeedback onPress={() => console.log("image tapped2")}>
    <Image source={require("./assets/1.png")}></Image>
  </TouchableNativeFeedback>
  
  <Button
    color="orange"
    title="click me"
    onPress={() =>  Alert.alert("my title", "", [
        { text: "yes", onPress: () => console.log("yes") },
        { text: "no", onPress: () => console.log("no") },
      ])
    }
  />
  
  <Button
    title="click me"
    onPress={() =>
      Alert.prompt("my title", "my message", (text) => console.log(text))
    }
  />
  
  </View>    
  </ScrollView>
  
    );
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "plum",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: Platform.OS === "android" ? 25 : 0,
      paddingBottom: Platform.OS === "ios" ? 250 : 0,
    },
  });