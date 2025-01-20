import React from 'react'
import "../../styles/card.scss";
import CAT from "../../../public/cat.png";
import Image from "next/image";
import { PiSmileyAngry } from "react-icons/pi";
import { MdMoodBad } from "react-icons/md";
import { BiHappy } from "react-icons/bi";
import { IconType } from 'react-icons';


export const CAT_MOODS: { [key: string]: IconType } = {
    angry: PiSmileyAngry,
    sad: MdMoodBad,
    happy: BiHappy,
};

export type MoodType = 'angry' | 'sad' | 'happy' | "none";

interface Props {
 setMood: (mood: MoodType) => void;
 mood: MoodType;
}
export default function Card({setMood, mood}: Props) {

    const handleMoodSet = (mood: MoodType) => {
        setMood(mood); 
    };

    return (
        <div className='card'>
            <div className='card__top'>

                <Image src={CAT} alt="Cat" width={94} height={79} />
                <h2 className='card__title'>What is your cat’s current mood?</h2>
            </div>
            <div className='card__icons'>
                {
                    Object.keys(CAT_MOODS).map((mood) => (
                        <div key={mood} className='card__icon' 
                        onClick={() => handleMoodSet(mood as MoodType)}
                        >
                            {React.createElement(CAT_MOODS[mood as keyof typeof CAT_MOODS], { size: 40 })}
                        </div>
                    ))
                }
            </div>
            <div className=''>
                <button className="button" disabled={mood === "none"}>
                    Save mood
                </button>
            </div>
        </div>
    )
}
