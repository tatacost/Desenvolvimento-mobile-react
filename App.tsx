import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, StatusBar } from "react-native";
import { styles } from "./styles";
import CircleIcon from "./assets/CircleIcon.png";

interface skillProps {
  id: string;
  name: string;
}
//type fred = string | number;
// type fred ={
//   id: string;
//   name: string;
// }



const App = () => {
  const [skills, setSkills] = useState<String[]>([]);
  const [newSkill, setNewSkill] = useState<String>('');

  // const [skills, setSkills] = useState<Array<String>>(['']);

  // function exemplo(texto: string) {
  //   const fred = texto + '1'
  //   setNewSkill(texto);
  // }

  function setNewSkillList() {
    const skill: skillProps = {
      name: newSkill,
      id: String(new Date().getTime()),
    }
    setSkills(oldSkills => [...oldSkills, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo,Thais
      </Text>
      <TextInput

        style={styles.input}
        onChangeText={setNewSkillList}
      // onChangeText={text => {
      //   setNewSkill(text);
      />
      <TouchableOpacity
        style={styles.button}
        onPress={setNewSkillList}

      >
        <Text style={styles.buttonText}>
          Adiciona Skill
        </Text>
      </TouchableOpacity>
      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        // horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.buttonSkill}>
              <Image source={CircleIcon} style={styles.image} />
              <Text style={styles.textSkill}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}

      />
    </View>
  );
};

export default App;