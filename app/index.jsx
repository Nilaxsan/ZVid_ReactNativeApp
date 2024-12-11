import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect,router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { CustomButton } from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.view}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            style={styles.pic}
          />
          <View style={styles.description}>
            <Text style={styles.descriptiontext}>
              Discover Endless Possibility with {""}
              <Text style={styles.logotext}>Aora</Text>
              {/* <Image
                source={images.path}
                style={styles.line}
                resizeMode="contain"
              /> */}
            </Text>
          </View>
          <Text style={styles.descriptiontext2}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton title="Continue with Email"
          handlePress={() => router.push('login')}
           />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#a238d0' style='light'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white", // Replace 'primary' with the actual color code or theme variable
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
  logo: {
    width: 130, 
    height: 84, 
  },
  pic: {
    maxWidth: 380, // Maximum width of 380px
    width: "100%", // Full width of the parent
    height: 298, // Fixed height of 298px
  },
  description: {
    position: "relative", // Matches Tailwind's `relative`
    marginTop: 20, // Tailwind's `mt-5` (5 * 4px = 20px)
  },
  descriptiontext: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logotext: {
    color: "rgba(255, 142, 1, 1)",
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
    color: "#f5f5f5", // Tailwind's `text-gray-100` (light gray)
    marginTop: 28, // Equivalent to Tailwind's `mt-7` (7 * 4px = 28px)
    textAlign: "center", // Tailwind's `text-center`
  },
 
});
