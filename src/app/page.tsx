"use client"
import React, {useState}  from "react";
import Card, { MoodType } from "./components/Card";
import "../styles/main.scss"
import RenderComponent from "./components/RenderComponent";
// import MoodMessage from "./components/RenderComponent";

export default function Home() {
  const [mood, setMood] = useState<MoodType>("none");
  const [moodHistory, setMoodHistory] = useState<MoodType[]>([]);

  function historyUpdate(){
    setMoodHistory([...moodHistory, mood])
    setMood("none")
  }
  const MoodMessage = {
    happy: "Cat was super excited!",
    sad: "Cat was indifferent",
    angry: "Cat wasn’t having it",
    none: ""
  }

  return (
    <main className={`main`}>
      <Card setMood={setMood} mood={mood} moodMessage={MoodMessage[mood]}/>
      {/* <RenderCard/> */}
      <RenderComponent  mood={mood} moodHistory={moodHistory} />

    </main>
  );
}
