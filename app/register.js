// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// const Register = () => {
//     const [username, setusername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();

//     const handleRegister = () => {
//         if (!email || !password) {
//             alert('Please fill in all fields');
//             return;
//         }
//         alert('Registration successful');
//         router.push('/login');
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Register</Text>

//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 keyboardType="email-address"
//                 value={email}
//                 onChangeText={setEmail}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 secureTextEntry
//                 value={password}
//                 onChangeText={setPassword}
//             />
//             <Button title="Register" onPress={handleRegister} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: 'center', padding: 20 },
//     title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//     input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
// });

// export default Register;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Link } from "expo-router";
import CustomAlert from "./customAlert";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState({ username: false, email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (!username || !email || !password) {
      setAlertMessage("Please fill  all the  fields");
      setAlertVisible(true);
      return;
    }
    setIsLoading(true);
    // Simulate API call or delay
    setTimeout(() => {
      setIsLoading(false);
      setAlertMessage("Registration successful");
      setAlertVisible(true);
      // Navigate to login page after a short delay
      setTimeout(() => {
        router.push("/login");
      }, 1500); // Delay before navigating
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
          <Text style={styles.title}>Register to ZVid</Text>

          {/* Username Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.textBaseGray}>Username</Text>
            <View
              style={[
                styles.textview,
                isFocused.username
                  ? styles.focusedBorder
                  : styles.unfocusedBorder,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#a238d0"
                value={username}
                onChangeText={setUsername}
                onFocus={() => setIsFocused({ ...isFocused, username: true })}
                onBlur={() => setIsFocused({ ...isFocused, username: false })}
              />
            </View>
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.textBaseGray}>Email</Text>
            <View
              style={[
                styles.textview,
                isFocused.email
                  ? styles.focusedBorder
                  : styles.unfocusedBorder,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#a238d0"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsFocused({ ...isFocused, email: true })}
                onBlur={() => setIsFocused({ ...isFocused, email: false })}
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.textBaseGray}>Password</Text>
            <View
              style={[
                styles.textview,
                isFocused.password
                  ? styles.focusedBorder
                  : styles.unfocusedBorder,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#a238d0"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsFocused({ ...isFocused, password: true })}
                onBlur={() => setIsFocused({ ...isFocused, password: false })}
              />
            </View>
          </View>

          {/* Register Button */}
          <TouchableOpacity
            style={[styles.button, isLoading && { opacity: 0.5 }]} // Apply opacity when loading
            onPress={handleRegister}
            activeOpacity={0.7}
            disabled={isLoading} // Disable button while loading
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Registering..." : "Register"}
            </Text>
          </TouchableOpacity>
          <CustomAlert
            message={alertMessage}
            isVisible={alertVisible}
            onClose={() => setAlertVisible(false)}
          />

          <View style={styles.smalltextview}>
            <Text style={styles.smalltext}>Already have an account?</Text>
            <Link href="login" style={styles.signuptext}>
              Login
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
    backgroundColor: "#f5f5f5",
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
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#a238d0",
  },
  inputContainer: {
    flexDirection: "column",
    gap: 8,
    marginBottom: 20, // Added spacing between inputs
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
    borderColor: "#a238d0",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
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
    display: "flex",
    justifyContent: "center",
    paddingTop: 20,
    flexDirection: "row",
    gap: 8,
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

export default Register;
