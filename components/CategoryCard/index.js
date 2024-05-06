import styles from "./CategoryCard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({
    category,
    link,
    graphic,
    top,
    left
}) {

    return(
        <div className={styles.CategoryCardContainer}>
            <Link href={link} style={{textDecoration: 'none'}}>
                <h1>{category}</h1>
                <div className={styles.mascot} style={{top: top, left: left}}>
                    <Image src={graphic} width="75" height="75"/>
                </div>
            </Link>
        </div>
    )
}