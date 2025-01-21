
"use client"
import React from 'react';
import "../../styles/card.scss"
import CAT from "../../../public/cat.png";
import Image from "next/image";
import RenderCard from './RenderCard';
import CAT_MOODS, { MoodType } from "./Card"
// import { Moods } from "../components/data/moods";
// import { BiHappy } from 'react-icons/bi';
import { PiSmileyAngry } from "react-icons/pi";
import { MdMoodBad } from "react-icons/md";
import { BiHappy } from "react-icons/bi";
import EmptyMood from './EmptyMood';


const Moods = {
  angry: <PiSmileyAngry size={40} />,
  sad: <MdMoodBad size={40} />,
  happy: <BiHappy size={40} />,
  none: ""
}
export const MoodMessage = {
  happy: "Cat was super excited!",
  sad: "Cat was indifferent",
  angry: "Cat wasn’t having it",
  none: ""
}

interface Props {
  mood: MoodType;
  moodHistory: MoodType[];
}
    
export default function RenderComponent({mood, moodHistory} : Props) {
  // const [mood, setMood] = React.useState<keyof typeof Moods>("none");

  // const moodHistory = [];
  return (
    <div className='render'>
      <div className="render__top">
       <div className="render__title">
       <Image src={CAT} alt="Cat" width={49} height={41} />
       <h6 className=""> Cat mood tracker™</h6>
       </div>

        <p className="render__history">
          MOOD HISTORY
        </p>
      </div>
      {
        mood === "none" ? 
        <EmptyMood />
        :
        

      // <RenderCard icon={Moods[mood] } moodMessage={MoodMessage[mood]} mood={mood} timestamp={new Date().toLocaleString()} />
      <div className="render__cards">

        {( moodHistory.slice().reverse().map((mood: MoodType, index: number) => {
        
           return <RenderCard key={index} icon={Moods[mood]} mood={mood} timestamp={new Date().toLocaleString()} moodMessage={MoodMessage[mood]} />
         }))}
        </div>
      
      }
    </div>
  )
}
