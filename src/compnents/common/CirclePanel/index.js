import React from 'react'
import styles from  './index.module.scss'
export default ({headImg,title,imgs=[],content})=>{
    return(
        <div className={styles.panel}>
            <div className={styles.left}>
                <img className={styles.headImg} src={headImg} alt=""/>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{content}</div>
                <div className={styles.imgContainer}>
                    {imgs.map((img,i)=>{
                        return <img className={styles.img} key={i} src={img} alt=""/>
                    })}
                </div>
                <div className={styles.btns}>
                    <div className={styles.btn}>
                        复制文案
                    </div>
                    <div className={styles.btn}>
                        保存图片
                    </div>
                    <div className={styles.btn}>
                        商品分享
                    </div>
                </div>
            </div>
        </div>
    )
}