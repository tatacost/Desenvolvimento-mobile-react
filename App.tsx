import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import CircleIcon from "./assets/CircleIcon.png";

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>
          Bem vindo,Thais
        </Text>
        <Image source={CircleIcon} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

export default App;