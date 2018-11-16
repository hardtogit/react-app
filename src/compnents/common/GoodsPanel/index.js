import React from 'react'
import styles from  './index.module.scss'
export default ({img,deadline,title,currentPrice,originalPrice,award,copies})=>{
    return(
        <div className={styles.panel}>
            <div className={styles.img}>
                <img src={img} alt=""/>
                <div className={styles.deadline}>{deadline}</div>
            </div>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.price}>
                <div className={styles.left}>¥{currentPrice}¥{originalPrice}</div>
                <div className={styles.right}>已售{copies}份</div>

            </div>

        </div>

    )
}