import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";


export default function App() {   
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.view}>
        <Text style={styles.heading}> Welcome to  ZVid!</Text>

           <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.pic}
          /> 
          {/* <Video
        source={images.animatelogo} // Replace with your video URL or local file path
        resizeMode="contain" // Adjusts video scaling
        style={styles.logo}
        controls // Adds playback controls
        paused={false} // Automatically starts playing
        repeat // Loops the video
      /> */}
          
          <View style={styles.description}>
            <Text style={styles.descriptiontext}>
              Discover Endless Possibility with {""}
              <Text style={styles.logotext}>ZVid</Text>
            </Text>
          </View>
          <Text style={styles.descriptiontext2}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with ZVid
          </Text>
          <TouchableOpacity
            style={styles.button} 
            onPress={() => router.push("/login")}
            activeOpacity={0.7}

          >
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#a238d0" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4e6fa", 
    height: "100%", // Full height of the parent
  },
  view: {
    width: "100%", // Full width of the parent
    height: "100%", // Full height of the parent
    display: "flex", // Enables flexbox layout
    justifyContent: "flex-start", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    paddingHorizontal: 16, // Equivalent to `px-4` (4 * 4px = 16px)
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "#a238d0",
    fontFamily: "psemibold",
  },
  logo: {
    width: 130,
    height: 84,
  },
  pic: {
    maxWidth: 380, // Maximum width of 380px
    width: "100%", // Full width of the parent
    height: 298, // Fixed height of 298px
    //add border and borderradius
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#a238d0",
    marginTop: 50, // Top margin of 50px
  },
  description: {
    position: "relative", // Matches Tailwind's `relative`
    marginTop: 20, // Tailwind's `mt-5` (5 * 4px = 20px)
  },
  descriptiontext: {
    fontSize: 30,
    color: "#490368",
    fontWeight: "bold",
    textAlign: "center",
  },
  logotext: {
    color: "#a238d0", 
  },
  // line: {
  //   width: 120, // Width of 136px
  //   height: 15, // Height of 15px
  //   position: "absolute", // Position absolute
  //   bottom: -5, // Bottom position with a 2px negative offset (Tailwind's `-bottom-2`)
  //   right: 22, // Right position with an 8px negative offset (Tailwind's `-right-8`)
  // },
  descriptiontext2: {
    fontSize: 14, // Equivalent to Tailwind's `text-sm` (14px)
    fontFamily: "pregular", // Assuming `font-pregular` maps to a custom font family
    color: "#490368", // Equivalent to
    marginTop: 28, // Equivalent to Tailwind's `mt-7` (7 * 4px = 28px)
    textAlign: "center", // Tailwind's `text-center`
  },
  button: {
    backgroundColor: "#a238d0",
    borderRadius: 20,
    height: 64,
    width: "100%",
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 18,
  },
});
