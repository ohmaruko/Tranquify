// import SettingButton from "@/components/SettingButton"
// import styles from "@/styles/Setting.module.css"

// export default function Setting() {
//   return (
//     <div className={styles.main}>
//       <h1>More Settings</h1>

//       <SettingButton />
//       <SettingButton />
//       <SettingButton />



//     </div>
//   )
// }

// import React, { useState } from "react";

import styles from "@/styles/Setting.module.css";
import SettingButton from '@/components/SettingButton';
import Link from "next/link";


export default function Setting() {
  return (
    <>
      <div className={styles.popupWrapper}>

        <div className={styles.popupContainer}> 

        {/* add top bar */}

        <h1 className={styles.moreSettings}>More Settings</h1>

        <div className={styles.buttonContainer}>

          <SettingButton title="Account Settings">

            {/* children prop - displays dropdown content */}
            <div className={styles.dropdownContent}>
              <p>Change Password</p>
              <p>Change Email</p>
              <p>Change Username</p>
            </div>
          </SettingButton>

          <SettingButton title="Favourites">
            <div className={styles.dropdownContent}>
              {/* Dropdown content */}
            </div>
          </SettingButton>

          <SettingButton title="Language">
            <div className={styles.dropdownContent}>
              <p>English</p>
              <p>French</p>
            </div>
          </SettingButton>

          <SettingButton title="Font Size">
            <div className={styles.dropdownContent}>
              <p>Regular</p>
              <p>Large</p>
              <p>Larger</p>

            </div>
          </SettingButton>

          <SettingButton title="Sound">
            <div className={styles.dropdownContent}>

            </div>
          </SettingButton>

          <SettingButton title="Dark Mode">
            <div className={styles.dropdownContent}>

            </div>
          </SettingButton>

          <SettingButton title="Help & Support">
            <div className={styles.dropdownContent}>

            </div>
          </SettingButton>

          <SettingButton title="About">
            <div className={styles.dropdownContent}>

            </div>
          </SettingButton>


        </div>


      </div>
      </div >
    </>
  );
};
