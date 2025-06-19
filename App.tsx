import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, StatusBar } from "react-native";
import { styles } from "./styles";
import CircleIcon from "./assets/CircleIcon.png";

const App = () => {
  const [skills, setSkills] = useState<String[]>([]);
  const [newSkill, setNewSkill] = useState<String>('');

  // const [skills, setSkills] = useState<Array<String>>(['']);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo,Thais
      </Text>
      <TextInput

        style={styles.input}
        onChangeText={text => {
          console.log(text)
          setNewSkill(text);
        }}
      />
      <TouchableOpacity style={styles.button}
        onPress={() => setSkills(oldSkills => [...oldSkills, newSkill])}

      >
        <Text style={styles.buttonText}>
          Adiciona Skill
        </Text>
      </TouchableOpacity>
      <FlatList
        data={skills}
        keyExtractor={(item, index) => index.toString()}
        // horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.buttonSkill}>
              <Image source={CircleIcon} style={styles.image} />
              <Text style={styles.textSkill}>{item}</Text>
            </TouchableOpacity>
          );
        }}

      />
    </View>
  );
};

export default App;