import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from "react-native";
import React, { useState } from "react";


import {icons} from '../constants'

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword,setshowPassword]=useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.textBaseGray}>{title}</Text>
      <View>
        <View
          style={[
            styles.textview,
            isFocused ? styles.focusedBorder : styles.unfocusedBorder,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {title === 'Password' && (
            <TouchableOpacity onPress={() => setshowPassword (!showPassword)}>
                  <Image
                  source={!showPassword ? icons.eye : icons.eyeHide}
                  resizeMode="contain"
                  style={styles.eye}/>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Ensures a vertical stack
    gap: 8, // Equivalent to `space-y-2` (8px spacing between children)
  },
  textBaseGray: {
    fontSize: 16, // Equivalent to `text-base`
    color: "black", // Equivalent to `text-gray-100`
    fontFamily: "pmedium",
  },
  textview: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "black", // Replace with actual black-100 value
    borderRadius: 16,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  unfocusedBorder: {
    borderColor: "#333333", // Replace with actual black-200 value
  },
  focusedBorder: {
    borderColor: "#ff9c01", // Replace with actual secondary color
  },
  input: {
    flex: 1,
    fontSize: 16,
    flex: 1,
    color: "#ffffff", // White color
    fontFamily: "psemibold", // Custom font family (ensure it's loaded)
  },
  eye: {
    width: 28, // Width of 24px
    height: 28, // Height of 24px
  },
});
