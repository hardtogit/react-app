import React from 'react'
import styles from  './index.module.scss'
export default ({orderNo,img,deadline,title,currentPrice,originalPrice,copies,btns,style,onClick})=>{
    return(
        <div className={styles.panel} style={style} onClick={()=>onClick&&onClick()}>
            <div className={styles.orderNo}>订单号：{orderNo}</div>
            <div className={styles.goodsInfo}>
                <div className={styles.left}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.right}>
                    <div className={styles.popTitle}>{title}</div>
                    <div>
                        <span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>{currentPrice}</span>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.left}><span className={styles.twoUnit}>¥</span><span className={styles.originalPrice}>{originalPrice}</span></div>
                        <div className={styles.right}>
                            ×{copies}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>有效期至：2018-12-31 18:59:59</div>
                <div className={styles.right}>
                    {btns.map((btn,i)=>(React.cloneElement(btn,{key:i}) ))}
                </div>
            </div>
        </div>

    )
}