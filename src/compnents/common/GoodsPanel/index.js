import React from 'react'
import styles from  './index.module.scss'
export default ({img,deadline,title,currentPrice,originalPrice,award,copies,style})=>{
    return(
        <div className={styles.panel} style={style}>
            <div className={styles.img}>
                <img src={img} alt=""/>
                <div className={styles.deadline}>
                    <div className={styles.left}>限时抢购</div>
                    <div className={styles.right}>{deadline}</div>
                </div>
            </div>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.price}>
                <div className={styles.left}>
                    <span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>{currentPrice}</span>
                    <span className={styles.twoUnit}>¥</span><span className={styles.originalPrice}>{originalPrice}</span>
                    {
                        award&& <div className={styles.commission}>
                            <div className={styles.left}>佣金</div>
                            <div className={styles.right}>
                                <span className={styles.treeUnit}>¥</span>
                                <span className={styles.num}>{award}</span>
                            </div>
                        </div>
                    }
                </div>
                <div className={styles.right}>已售{copies}份</div>

            </div>

        </div>

    )
}