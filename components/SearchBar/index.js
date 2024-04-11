import styles from "./SarchBar.module.css";
import { meditationData } from "@/data/meditation";
import { useState, useEffect } from "react";
import Image from 'next/image'
import MeditationCardMedium from "../MeditationCardMedium";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
    if(searchInput == "") {
      setIsOpen(false);
    } else {
      setIsOpen(true);           
    }
  }, [searchInput]);

  return (
    <div className={styles.searchContainer}>
      <input type="search" 
          placeholder="Search" 
          className={styles.inputBox}
          onChange={ e => {
            setSearchInput(e.target.value);
          }}
          />
      {
        isOpen?
          <div className={styles.searchResult}>
            <div className={styles.heading}>
              <h2>Search Results</h2>
              <Image src='/images/closeButton.svg' alt="Close Button" width={32} height={32} 
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className={styles.meditaions}>
              {
                meditationData.meditations.map( x => {
                return(
                  searchInput.length > 0 && x.title.toLocaleLowerCase().includes(searchInput)? 
                      <div className={styles.searchResultSingle}>
                        <MeditationCardMedium title={x.title} time={x.duration} source={x.source} thumbnail={x.thumbnail}/>
                      </div>
                    :<></>
                )
                })
              }
            </div>
          </div>
          :<></>
      }
    </div>
  );
}
