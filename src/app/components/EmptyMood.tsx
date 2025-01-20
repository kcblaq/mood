import React from 'react'
import "../../styles/mood.scss";
import CAT from "../../../public/emptycat.png";
import Image from "next/image";

export default function EmptyMood() {
  return (
    <div className={`
    emptymood
    `}>
        <Image src={CAT} width={72} height={61} alt="Empty cat" />
        <h2 className='emptymood__description'>No mood history to show yet</h2>
    </div>
  )
}
