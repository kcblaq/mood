import React from 'react'
import "../../styles/rendercard.scss";
import CATFACE from "../../../public/catface.png";
import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';


interface Props {
    icon: React.ReactNode;
    mood: string;
    timestamp: string;
    moodMessage: string;
}
export default function RenderCard({ icon, mood, timestamp , moodMessage}: Props) {
    return (
        <div className={`rendercard ${mood}`}
            style={{
                backgroundImage: `url(${CATFACE.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
            }}>

            <div className={`rendercard__icon ${mood}`}>
                {icon}
            </div>
            <div className={`rendercard__info ${mood}`}>
                <span className={` ${mood}`}>{moodMessage}</span>
                <span>{timestamp}</span>

            </div>
        </div>
    )
}
