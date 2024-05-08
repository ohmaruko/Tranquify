import React, { useState } from "react";
import styles from "./SettingButton02.module.css";

const SettingButton02 = ({ title, icon, link, toggle }) => {

    return (
        <div>
            <a href={link} className={styles.button}    tabIndex="-1">
                <div className={styles.iconAndTitle}>
                     <div className={styles.icon}>
                        {icon}
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                </div>  

                <div className={styles.toggle}>
                     {toggle}
                </div>
            </a>
        </div>
    );
};

export default SettingButton02;
