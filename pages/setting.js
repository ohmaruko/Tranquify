import styles from "@/styles/Setting.module.css";
import SettingButton from '@/components/SettingButton';
import Link from "next/link";
import Image from "next/image";
import ToggleButton from "@/components/ToggleButton";
import RadioButton from "@/components/RadioButton";

export default function Setting() {
  const link = "/";
  const backButton = true;

  return (
    <>
      <div className={styles.popupWrapper}>

        <div className={styles.popupContainer}>

          {/* adding back button */}
          <Link href={link} style={{ display: backButton === true ? 'block' : 'none' }}>
            <Image src='/images/back-button.svg' width={21} height={19} className={styles.closeButton}/>
          </Link>

          <h1 className={styles.moreSettings}>More Settings</h1>

          <div className={styles.buttonContainer}>

          <SettingButton 
                                icon={(
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z" fill="black"/>
                                    </svg>
                                )}
                                title="Account Settings"
                                chevron={(
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none"
                                    className={styles.chevron}>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.420877 0.983286C0.50506 0.89889 0.605066 0.831931 0.715166 0.786245C0.825267 0.740558 0.943299 0.717041 1.0625 0.717041C1.18171 0.717041 1.29974 0.740558 1.40984 0.786245C1.51994 0.831931 1.61994 0.89889 1.70413 0.983286L12.5791 11.8583C12.6635 11.9425 12.7305 12.0425 12.7762 12.1526C12.8219 12.2627 12.8454 12.3807 12.8454 12.4999C12.8454 12.6191 12.8219 12.7371 12.7762 12.8472C12.7305 12.9573 12.6635 13.0574 12.5791 13.1415L1.70413 24.0165C1.53396 24.1867 1.30316 24.2823 1.0625 24.2823C0.821846 24.2823 0.591047 24.1867 0.420877 24.0165C0.250708 23.8464 0.155107 23.6156 0.155107 23.3749C0.155107 23.1343 0.250708 22.9035 0.420877 22.7333L10.6561 12.4999L0.420877 2.26654C0.336481 2.18235 0.269522 2.08235 0.223835 1.97225C0.178149 1.86215 0.154633 1.74411 0.154633 1.62491C0.154633 1.50571 0.178149 1.38768 0.223835 1.27758C0.269522 1.16747 0.336481 1.06747 0.420877 0.983286Z" fill="black"/>
                                    </svg>
                                )}
                            >
                                {/* children prop - displays dropdown content */}
                                <div className={styles.dropdownContent}>
                                <Link href="./logIn"><p>Log In</p></Link>
                                <Link href="./signUp"><p>Sign Up</p></Link>
                                </div>
                            </SettingButton>

                            <SettingButton
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M7.59704 14.7498L6.55823 13.7748C5.35226 12.6373 4.35525 11.6561 3.56719 10.8311C2.77913 10.0061 2.15226 9.26543 1.68659 8.60918C1.22092 7.95293 0.895548 7.3498 0.710473 6.7998C0.525399 6.2498 0.432861 5.6873 0.432861 5.1123C0.432861 3.9373 0.808981 2.95605 1.56122 2.16855C2.31346 1.38105 3.25077 0.987305 4.37316 0.987305C4.99406 0.987305 5.5851 1.1248 6.14629 1.3998C6.70749 1.6748 7.19107 2.0623 7.59704 2.5623C8.00301 2.0623 8.48659 1.6748 9.04779 1.3998C9.60898 1.1248 10.2 0.987305 10.8209 0.987305C11.9433 0.987305 12.8806 1.38105 13.6329 2.16855C14.3851 2.95605 14.7612 3.9373 14.7612 5.1123C14.7612 5.6873 14.6687 6.2498 14.4836 6.7998C14.2985 7.3498 13.9732 7.95293 13.5075 8.60918C13.0418 9.26543 12.415 10.0061 11.6269 10.8311C10.8388 11.6561 9.84182 12.6373 8.63585 13.7748L7.59704 14.7498Z" fill="#1C1B1F"/>
                              </svg>
                            )}
                            title="Favourites" 
                            chevron={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none"
                                className={styles.chevron}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.420877 0.983286C0.50506 0.89889 0.605066 0.831931 0.715166 0.786245C0.825267 0.740558 0.943299 0.717041 1.0625 0.717041C1.18171 0.717041 1.29974 0.740558 1.40984 0.786245C1.51994 0.831931 1.61994 0.89889 1.70413 0.983286L12.5791 11.8583C12.6635 11.9425 12.7305 12.0425 12.7762 12.1526C12.8219 12.2627 12.8454 12.3807 12.8454 12.4999C12.8454 12.6191 12.8219 12.7371 12.7762 12.8472C12.7305 12.9573 12.6635 13.0574 12.5791 13.1415L1.70413 24.0165C1.53396 24.1867 1.30316 24.2823 1.0625 24.2823C0.821846 24.2823 0.591047 24.1867 0.420877 24.0165C0.250708 23.8464 0.155107 23.6156 0.155107 23.3749C0.155107 23.1343 0.250708 22.9035 0.420877 22.7333L10.6561 12.4999L0.420877 2.26654C0.336481 2.18235 0.269522 2.08235 0.223835 1.97225C0.178149 1.86215 0.154633 1.74411 0.154633 1.62491C0.154633 1.50571 0.178149 1.38768 0.223835 1.27758C0.269522 1.16747 0.336481 1.06747 0.420877 0.983286Z" fill="black"/>
                                </svg>
                            )}
                            >
                                <div className={styles.dropdownContent}>
                                   <Link href="./meditationFavourite"><p>Go to Favourites Page</p></Link>
                                </div>
                            </SettingButton> 

                            <SettingButton 
                             icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M1 8.5C1 12.6422 4.35775 16 8.5 16C12.6422 16 16 12.6422 16 8.5C16 4.35775 12.6422 1 8.5 1C4.35775 1 1 4.35775 1 8.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.2775 1.5C9.2775 1.5 11.5275 4.4625 11.5275 8.9625C11.5275 13.4625 9.2775 16.425 9.2775 16.425M7.7775 16.425C7.7775 16.425 5.5275 13.4625 5.5275 8.9625C5.5275 4.4625 7.7775 1.5 7.7775 1.5M1.5 11.5875H15.555M1.5 6.3375H15.555" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            )}
                            title="Language"
                            chevron={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none"
                                className={styles.chevron}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.420877 0.983286C0.50506 0.89889 0.605066 0.831931 0.715166 0.786245C0.825267 0.740558 0.943299 0.717041 1.0625 0.717041C1.18171 0.717041 1.29974 0.740558 1.40984 0.786245C1.51994 0.831931 1.61994 0.89889 1.70413 0.983286L12.5791 11.8583C12.6635 11.9425 12.7305 12.0425 12.7762 12.1526C12.8219 12.2627 12.8454 12.3807 12.8454 12.4999C12.8454 12.6191 12.8219 12.7371 12.7762 12.8472C12.7305 12.9573 12.6635 13.0574 12.5791 13.1415L1.70413 24.0165C1.53396 24.1867 1.30316 24.2823 1.0625 24.2823C0.821846 24.2823 0.591047 24.1867 0.420877 24.0165C0.250708 23.8464 0.155107 23.6156 0.155107 23.3749C0.155107 23.1343 0.250708 22.9035 0.420877 22.7333L10.6561 12.4999L0.420877 2.26654C0.336481 2.18235 0.269522 2.08235 0.223835 1.97225C0.178149 1.86215 0.154633 1.74411 0.154633 1.62491C0.154633 1.50571 0.178149 1.38768 0.223835 1.27758C0.269522 1.16747 0.336481 1.06747 0.420877 0.983286Z" fill="black"/>
                                </svg>
                            )}
                            >
                                <div className={styles.dropdownContent}>
                                    <p>English {<RadioButton/>}</p>
                                    <p>French {<RadioButton/>}</p>
                                </div>
                            </SettingButton>

                            <SettingButton
                                     icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                        <path d="M7 1H10M10 1H13M10 1V10M1 4.75H3.25M3.25 4.75H5.5M3.25 4.75V10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    )}
                            title="Font Size"
                            chevron={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.420877 0.983286C0.50506 0.89889 0.605066 0.831931 0.715166 0.786245C0.825267 0.740558 0.943299 0.717041 1.0625 0.717041C1.18171 0.717041 1.29974 0.740558 1.40984 0.786245C1.51994 0.831931 1.61994 0.89889 1.70413 0.983286L12.5791 11.8583C12.6635 11.9425 12.7305 12.0425 12.7762 12.1526C12.8219 12.2627 12.8454 12.3807 12.8454 12.4999C12.8454 12.6191 12.8219 12.7371 12.7762 12.8472C12.7305 12.9573 12.6635 13.0574 12.5791 13.1415L1.70413 24.0165C1.53396 24.1867 1.30316 24.2823 1.0625 24.2823C0.821846 24.2823 0.591047 24.1867 0.420877 24.0165C0.250708 23.8464 0.155107 23.6156 0.155107 23.3749C0.155107 23.1343 0.250708 22.9035 0.420877 22.7333L10.6561 12.4999L0.420877 2.26654C0.336481 2.18235 0.269522 2.08235 0.223835 1.97225C0.178149 1.86215 0.154633 1.74411 0.154633 1.62491C0.154633 1.50571 0.178149 1.38768 0.223835 1.27758C0.269522 1.16747 0.336481 1.06747 0.420877 0.983286Z" fill="black"
                                className={styles.chevron}/>
                                </svg>
                            )}
                            >
                                <div className={styles.dropdownContent}>
                                    <p>Regular {<RadioButton/>}</p>
                                    <p>Large {<RadioButton/>}</p>
                                    <p>Larger {<RadioButton/>}</p>
                                </div>
                            </SettingButton>

                            <SettingButton 
                                     icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                        <path d="M0.553618 11.293C0.191356 10.6002 0 9.80745 0 8.99958C0 8.1917 0.191356 7.399 0.553618 6.7062C0.665015 6.49292 0.814077 6.30874 0.991223 6.16549C1.16837 6.02224 1.36968 5.92309 1.58222 5.87441L3.33593 5.47158C3.44052 5.44782 3.53484 5.38365 3.60318 5.28977L5.74533 2.33928C6.96972 0.651926 7.58294 -0.190563 8.12884 0.0363975C8.67681 0.263359 8.67681 1.36133 8.67681 3.55726V14.4443C8.67681 16.639 8.67681 17.7358 8.12988 17.9639C7.58398 18.1897 6.97075 17.3472 5.74637 15.6611L3.60111 12.7094C3.53304 12.6157 3.43911 12.5516 3.33489 12.5276L1.58119 12.1247C1.36865 12.0761 1.16733 11.9769 0.990187 11.8337C0.813041 11.6904 0.665015 11.5062 0.553618 11.293Z" fill="black"/>
                                        <path d="M11.3037 4.79817C12.2702 5.90682 12.8155 7.40878 12.8208 8.97667C12.826 10.5446 12.2908 12.0513 11.3317 13.1684M15.5725 2.27783C17.1189 4.05153 17.9914 6.45449 17.9999 8.96301C18.0085 11.4715 17.1523 13.8822 15.6181 15.6697" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                    )}
                            title="Sound"
                            toggle = {<ToggleButton/>}
                            >
                            </SettingButton>

                            <SettingButton 
                                     icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M9.01816 18C6.49641 18 4.36312 17.1272 2.61827 15.3817C0.873425 13.6361 0.000668011 11.5028 0 8.98161C0 6.67691 0.751513 4.67683 2.25454 2.98138C3.75756 1.28592 5.6781 0.296569 8.01614 0.013325C8.23324 -0.0200764 8.42529 0.00931692 8.5923 0.101505C8.7593 0.193693 8.8929 0.314606 8.9931 0.464244C9.09331 0.614551 9.14775 0.789909 9.15643 0.990317C9.16512 1.19073 9.10232 1.38278 8.96805 1.56649C8.68415 2.00071 8.47105 2.45998 8.32877 2.9443C8.18648 3.42862 8.11567 3.93799 8.11634 4.47242C8.11634 5.97548 8.6424 7.25309 9.69452 8.30523C10.7466 9.35738 12.0242 9.88345 13.5272 9.88345C14.0449 9.88345 14.5586 9.8083 15.0683 9.65799C15.578 9.50768 16.0329 9.29892 16.4331 9.03171C16.6168 8.91481 16.8048 8.8607 16.9972 8.86938C17.1896 8.87807 17.3606 8.92383 17.5103 9.00666C17.6773 9.09017 17.8069 9.21542 17.899 9.38243C17.9912 9.54943 18.0203 9.74984 17.9862 9.98365C17.7524 12.2884 16.7714 14.2006 15.0433 15.7204C13.3151 17.2401 11.3068 18 9.01816 18Z" fill="black"/>
                                        </svg>
                                    )}
                            title="Dark Mode"
                            toggle = {<ToggleButton />}
                            >
                            </SettingButton>

            <SettingButton 
            icon={(
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.955 14.4C9.27 14.4 9.5364 14.2911 9.7542 14.0733C9.972 13.8555 10.0806 13.5894 10.08 13.275C10.08 12.96 9.9714 12.6936 9.7542 12.4758C9.537 12.258 9.2706 12.1494 8.955 12.15C8.64 12.15 8.3739 12.2589 8.1567 12.4767C7.9395 12.6945 7.8306 12.9606 7.83 13.275C7.83 13.59 7.9389 13.8564 8.1567 14.0742C8.3745 14.292 8.6406 14.4006 8.955 14.4ZM8.145 10.935H9.81C9.81 10.44 9.8664 10.05 9.9792 9.765C10.092 9.48 10.4106 9.09 10.935 8.595C11.325 8.205 11.6325 7.8336 11.8575 7.4808C12.0825 7.128 12.195 6.7044 12.195 6.21C12.195 5.37 11.8875 4.725 11.2725 4.275C10.6575 3.825 9.93 3.6 9.09 3.6C8.235 3.6 7.5414 3.825 7.0092 4.275C6.477 4.725 6.1056 5.265 5.895 5.895L7.38 6.48C7.455 6.21 7.6239 5.9175 7.8867 5.6025C8.1495 5.2875 8.5506 5.13 9.09 5.13C9.57 5.13 9.93 5.2614 10.17 5.5242C10.41 5.787 10.53 6.0756 10.53 6.39C10.53 6.69 10.44 6.9714 10.26 7.2342C10.08 7.497 9.855 7.7406 9.585 7.965C8.925 8.55 8.52 8.9925 8.37 9.2925C8.22 9.5925 8.145 10.14 8.145 10.935ZM9 18C7.755 18 6.585 17.7639 5.49 17.2917C4.395 16.8195 3.4425 16.1781 2.6325 15.3675C1.8225 14.5575 1.1814 13.605 0.7092 12.51C0.237 11.415 0.0006 10.245 0 9C0 7.755 0.2364 6.585 0.7092 5.49C1.182 4.395 1.8231 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.1814 5.49 0.7092C6.585 0.237 7.755 0.0006 9 0C10.245 0 11.415 0.2364 12.51 0.7092C13.605 1.182 14.5575 1.8231 15.3675 2.6325C16.1775 3.4425 16.8189 4.395 17.2917 5.49C17.7645 6.585 18.0006 7.755 18 9C18 10.245 17.7636 11.415 17.2908 12.51C16.818 13.605 16.1769 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8189 12.51 17.2917C11.415 17.7645 10.245 18.0006 9 18Z" fill="black"/>
                </svg>
          )}
            title="Help & Support">
              <div className={styles.dropdownContent}>

              </div>
            </SettingButton>

            <SettingButton 
            icon={(
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9.9 6.3H8.1V4.5H9.9M9.9 13.5H8.1V8.1H9.9M9 0C7.8181 0 6.64778 0.232792 5.55585 0.685084C4.46392 1.13738 3.47177 1.80031 2.63604 2.63604C0.948211 4.32387 0 6.61305 0 9C0 11.3869 0.948211 13.6761 2.63604 15.364C3.47177 16.1997 4.46392 16.8626 5.55585 17.3149C6.64778 17.7672 7.8181 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 0 9 0Z" fill="black"/>
                </svg>
          )}
            title="About">
              <div className={styles.dropdownContent}>

              </div>
            </SettingButton>

          </div>

        </div>
      </div >
    </>
  );
};
