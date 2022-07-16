
import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native"
import { Button } from "../components/Button"
import { SkillCard } from "../components/SkillCard"


export function Home() {
  const [newSkills, setNewSkills] = useState("")
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')
  function handleNewSkill() {
    setMySkills(oldSkills => [...oldSkills, newSkills])
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreeting("Good morning")
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon")
    }
    else {
      setGreeting("Good Evening")
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Lucas</Text>
      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkills}
      />
      <Button onPress={handleNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>


      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS == 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: "#fff",
  }

})