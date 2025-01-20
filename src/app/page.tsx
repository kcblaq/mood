"use client"
import React, {useState}  from "react";
import Card, { MoodType } from "./components/Card";
import "../styles/main.scss"
import RenderCard from "./components/RenderComponent";

export default function Home() {
  const [mood, setMood] = useState<MoodType>("none");
  console.log("@", mood)
  return (
    <main className={`main`}>
      <Card setMood={setMood} mood={mood}/>
      <RenderCard/>

    </main>
  );
}
