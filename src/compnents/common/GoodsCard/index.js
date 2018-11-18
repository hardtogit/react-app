import React from 'react'
import StarBar from '../../StarBar'
import styles from  './index.module.scss'
export default ({img,title,rate,distance})=>{
    return(
       <div className={styles.card}>
           <img className={styles.img} src={img} alt=""/>
           <div className={styles.title}>{title}</div>
           <div className={styles.footer}>
               <div className={styles.left}>
                   <StarBar starNum={rate}/>
               </div>
               <div className={styles.right}>
                   {distance}
               </div>
           </div>
       </div>

    )
}