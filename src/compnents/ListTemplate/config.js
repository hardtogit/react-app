import React from 'react';
import Loaders from '../../exclude/halogen';
import styles from './index.module.scss';
import nullIcon from '../../assets/img/empty.png';
class ScrollConfig {
   static loadingInitDom(){
        const Loading=Loaders['BeatLoader'];
        return(<div className={styles.loading}>
        <Loading color="#f3344a" size="20px" />
        <p className={styles.loadingText}>加载中...</p>
        </div>);
    }
    static loadingDom(){
       const Loading=Loaders['ClipLoader'];
         return(<div className={styles.loadingList}>
           <Loading style={{backgroundColor:'#000'}} color="#f3344a" size="20px" />
                <div className={styles.loadingText}>加载中...</div>
        </div>);
    }
     static loadingEndDom(){
        return(
            <div className={styles.loadingEnd}>
            <span className={styles.loadingEndB}>没有更多了</span>
            </div>
        );
    }
    static nullDom(){
         return(<div className={styles.nullIcon}><img src={nullIcon}/></div>);
    }
}
export default ScrollConfig;