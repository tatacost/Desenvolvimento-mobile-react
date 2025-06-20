import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  onPress: () => void,
  text: string
}


export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};