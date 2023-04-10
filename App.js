import { StyleSheet, View } from "react-native";
import Header from "./src/components/header";
import styles from "./src/components/style";
import InputCard from "./src/components/inputCard";
import { Divider, Flex } from "@react-native-material/core";
import { useState } from "react";
import Card from "./src/components/card";

export default function App() {
  const [cards, setCards] = useState([]);

  const addCard = (title, description) =>
    setCards((prev) =>
      prev.concat({
        title: title,
        description: description,
      })
    );

  const removeCard = (index) => 
    setCards((prev) => prev.filter((_, idx) => idx !== index));

  return (
    <View style={localStyle.body}>
      <Header />
      <Divider />
      <InputCard onAdd={addCard} />
      {cards.map((card, i) => (
        <Card
          title={card.title}
          description={card.description}
          index={i}
          key={i}
          removeCardAction={removeCard}
        />
      ))}
    </View>
  );
}

const localStyle = StyleSheet.create({
  body: {
    paddingTop: "8%",
    display: "flex",
    flexDirection: "column",
  },
});
