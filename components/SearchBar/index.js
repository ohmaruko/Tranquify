import styles from "./SearchBar.module.css";
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
              <Image src='/images/closeButton.svg' alt="Close Button" width={20} height={20} 
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className={styles.meditationCardsOuterContainer}>
                <div className={styles.meditationCardsInnerContainer}>
                {
                  meditationData.meditations.map( (item, index) => {
                  return(
                    searchInput.length > 0 && item.title.toLocaleLowerCase().includes(searchInput)? 
                        <div className={styles.searchResultSingle}>
                          <MeditationCardMedium meditation={index} title={item.title} time={item.duration} source={item.source} thumbnail={item.thumbnail}/>
                        </div>
                      :<></>
                  )
                  })
                }
              </div>
            </div>
          </div>
          :<></>
      }
    </div>
  );
}
