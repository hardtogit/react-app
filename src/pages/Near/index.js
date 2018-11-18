import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {goBack} from 'react-router-redux'
import GoodsCard  from '../../compnents/common/GoodsCard'
import Scorll from '../../compnents/Scorll'
import search from '../../assets/img/search.png'
import styles from './index.module.scss'

class Index extends Component {
    onScrollStart=()=> {
        console.log("iScroll starts scrolling")
    }
    render() {
        return (
            <div  className={styles.content}>
            <Scorll>
                <div>
                <div className={styles.search}>
                    <div className={styles.input} data-role="vehicleSearch">
                        <img className={styles.img} src={search} alt=""/>
                        输入关商户名称
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={classNames([styles.tab,styles.active])}>
                        <div className={styles.text}>推荐</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>酒店</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>餐饮</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>旅游</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>休闲</div>
                    </div>
                </div>
                <div className={classNames(['clearfix',styles.recommend])}>
                    {(()=>{
                        let arr=[]
                        for(let i=0;i<20;i++){
                        arr.push(
                            <div className={styles.store} key={i}>
                                <GoodsCard
                                    key={i}
                                    img='https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0'
                                    title='大通冰室'
                                    startNum={4}
                                    distance='500m'
                                />
                            </div>
                        )}
                        return arr
                    })()

                    }
                </div>
                </div>
            </Scorll>
            </div>
        )
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)