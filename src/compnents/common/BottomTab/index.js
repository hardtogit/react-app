import React from 'react'
import {Link,IndexLink} from 'react-router'
import classNames from 'classnames'
import styles from './index.module.scss'
export default ({children})=>{
    return(
        <div>
            {children}
        <div className={styles.tabs}>
            <IndexLink className={classNames([styles.tab,styles.tabOne])} to='/home' activeClassName={styles.active}>
                <div className={styles.img}></div>
                <div className={styles.text}>抢购</div>
            </IndexLink>
            <Link className={classNames([styles.tab,styles.tabTwo])} to='/home/near' activeClassName={styles.active}>
                <div className={styles.img}></div>
                <div className={styles.text}>附近</div>
            </Link>
            <Link className={classNames([styles.tab,styles.tabTree])} to='/home/circle' activeClassName={styles.active}>
                <div className={styles.img}></div>
                <div className={styles.text}>素材</div>
            </Link>
            <Link className={classNames([styles.tab,styles.tabFour])} to='/home/me' activeClassName={styles.active}>
                <div className={styles.img}></div>
                <div className={styles.text}>我的</div>
            </Link>
        </div>
        </div>
        )
}