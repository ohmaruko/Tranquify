import styles from "./SarchBar.module.css";
import { meditationData } from "@/data/meditation";
import { useState } from "react";
import FavouriteCardMedium from "../MeditationCardMedium";

export default function SearchBar() {
  const [text, setText] = useState(null);

  return (
    <>
      <div>
        <div className={styles.inputBoxContainer}>
            <input type="search" 
                placeholder="Search" 
                className={styles.inputBox}
                onChange={ e => setText(e.target.value)}
                />
        </div>
        <div className={styles.searchResult}>
        {
            meditationData.meditations.map( x => {
            return(
                x.title.includes(text)? 
                <div className={styles.searchResultSingle}><FavouriteCardMedium title={x.title} time='${x.duration}min' source="#" thumbnail="/images/placeholder.png"/></div>
                :<></>
            )
            })
        }
        </div>
      </div>
    </>
  );
}
