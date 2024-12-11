import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export const CustomButton = ({ title, handlePress,textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isLoading && { opacity: 0.5 }]} // Apply opacity based on isLoading
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading} // Disable the button when loading
    >
      <Text
        style={[
          styles.textPrimary,
          styles.fontPsemibold,
          { fontSize: 18 },
          textStyles,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 156, 1, 1)", // Equivalent to `bg-secondary`
    borderRadius: 20, // Equivalent to `rounded-xl` (approx. 20px border radius)
    height: 64, // Equivalent to `min-h-[62px]`
    width: "100%",
    marginTop:28,
    flexDirection: "row", // Equivalent to `flex flex-row`
    justifyContent: "center", // Equivalent to `justify-center`
    alignItems: "center", // Equivalent to `items-center`
  },
  textPrimary: {
    color: "#000000", // Primary color
  },
  fontPsemibold: {
    fontWeight: "600", // Equivalent to 'font-psemibold'
  },
});
