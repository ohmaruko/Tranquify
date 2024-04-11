import styles from "./CategoryCard.module.css";
import Link from "next/link";

export default function CategoryCard({
    category,
    link
}) {

    return(
        <div 
            style={{width: '100%', height: '100%'}} 
            className={styles.CategoryCardContainer}
            >
            <Link href={link} style={{textDecoration: 'none'}}><h1>{category}</h1></Link>
        </div>
    )
}