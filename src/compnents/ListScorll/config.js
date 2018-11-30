import React from 'react'
import Loaders from 'halogen'
import styles from './index.css'
import nullIcon from '../../assets/images/record.png'
class ScrollConfig {
   static loadingInitDom(){
        const Loading=Loaders['BeatLoader'];
        return(<div className={styles.loading}>
        <Loading color="#00a6e2" size='20px' />
        <p className={styles.loadingText}>加载中...</p>
        </div>)
    }
    static loadingDom(){
       const Loading=Loaders['ClipLoader'];
         return(<div className={styles.loadingList}>
        <Loading color="#00a6e2" size='20px' />
        <p className={styles.loadingText}>加载中...</p>
        </div>)  
    }
     static loadingEndDom(){
        return(
            <div className={styles.loadingEnd}>
            <span className={styles.loadingEndB}>没有更多了</span>
            </div>
        ) 
    }
    static nullDom(){
         return(<div className={styles.nullIcon}><img src={nullIcon}/></div>)
    }
}
export default ScrollConfig