"use client"
import React, { useState } from 'react'
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
    moodMessage?: string;
}

export default function Card({ setMood, mood, moodMessage }: Props) {
    const [buttonState, setButtonState] = useState(true)

    const handleMoodSet = (moodType: MoodType) => {
        setMood(moodType);
    };

    return (
        <div className='card'>
            <div className='card__top'>
                <Image src={CAT} alt="Cat" width={94} height={79} />
                <h2 className='card__title'>What is your cat&apos;s current mood?</h2>
            </div>
            <div className={``}>
                <div className='card__icons'>
                    {
                        Object.keys(CAT_MOODS).map((moodKey) => (
                            <div
                                key={moodKey}
                                className={`card__icon ${mood === moodKey ? 'card__icon--selected' : ''}`}
                                onClick={() => {
                                    handleMoodSet(moodKey as MoodType)
                                    setButtonState(false)
                                }}
                            >
                                {React.createElement(CAT_MOODS[moodKey as keyof typeof CAT_MOODS], { size: 40 })}
                            </div>
                        ))
                    }
                </div>
                {mood !== "none" && <p className={`card__msg ${mood}`}>{moodMessage}</p>}
            </div>
            <div className=''>


                <button
                    className="button"
                    disabled={buttonState}
                    onClick={() => {
                        handleMoodSet(mood)
                        setButtonState(false)
                    }}
                >
                    Save mood
                </button>
            </div>
        </div>
    )
}