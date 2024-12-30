import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Link } from "expo-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!username) {
      alert("Please enter your username");
      return;
    }
    setIsLoading(true);
    // Simulate API call or delay
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to the home page with the username
      router.push({ pathname: "/home", params: { username } });
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}

          />
          <Text style={styles.title}>Login to ZVid</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.textBaseGray}>Username</Text>
            <View
              style={[
                styles.textview,
                isFocused ? styles.focusedBorder : styles.unfocusedBorder,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#a238d0"
                value={username}
                onChangeText={setUsername}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textBaseGray}>Password</Text>
            <View
              style={[
                styles.textview,
                isFocused ? styles.focusedBorder : styles.unfocusedBorder,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#a238d0"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              
            </View>
          </View>
          <TouchableOpacity
            style={[styles.button, isLoading && { opacity: 0.5 }]}
            onPress={handleLogin}
            activeOpacity={0.7}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Logining in..." : "Login"}
            </Text>
          </TouchableOpacity>
          <View style={styles.smalltextview}>
            <Text style={styles.smalltext}>Don't have an account?</Text>
            <Link href="register" style={styles.signuptext}>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4e6fa",
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
    width: 250, 
    height: 250, 
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#a238d0",
  },
  inputContainer: {
    flexDirection: "column",
    gap: 15,
  },
  textBaseGray: {
    fontSize: 16,
    color: "#a238d0",
    fontFamily: "pmedium",
  },
  textview: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  unfocusedBorder: {
    borderColor: "#333333",
  },
  focusedBorder: {
    borderColor: "#a238d0", // New primary color for focus
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#00000",
    fontFamily: "psemibold",
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
  smalltextview: {
    display: "flex", // Enables flexbox
    justifyContent: "center", // Centers content along the main axis
    paddingTop: 20, // Padding-top of 20px
    flexDirection: "row", // Aligns children in a row
    gap: 8, // Gap of 8px between child elements (requires React Native >= 0.71)
  },
  smalltext: {
    fontSize: 18,
    fontFamily: "pregular",
  },
  signuptext: {
    fontSize: 18,
    fontFamily: "psemibold",
    color: "#a238d0",
  },
});

export default Login;
