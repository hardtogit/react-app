import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import BaseText from '../../compnents/BaseText'
import order from '../../assets/img/order.png'
import qrcode from '../../assets/img/qrcode.png'
import store from '../../assets/img/store.png'
import collaborate from '../../assets/img/collaborate.png'
import inform from '../../assets/img/inform.png'
import teach from '../../assets/img/teach.png'
import introduce from '../../assets/img/introduce.png'
import styles from './index.module.scss'

class Index extends Component {
    render() {
        return (
            <div className={styles.me}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <div className={styles.left}>
                            <img className={styles.img} src={introduce} alt=""/>
                        </div>
                        <div className={styles.center}></div>
                        <div className={styles.right}></div>

                    </div>

                </div>
                <div className={styles.nav}>
                    <BaseText label={<span className={styles.label}>
                    <img className={styles.img} src={order} alt=""/>
                    <span>全部订单</span></span> }
                        borderType='four'
                    />
                    <BaseText label={<span className={styles.label}>
                    <img className={styles.img} src={qrcode} alt=""/>
                    <span>推广二维码</span></span> }
                     borderType='four'
                    />
                    <BaseText label={<span className={styles.label}>
                    <img className={styles.img} src={store} alt=""/>
                    <span>推荐商户</span></span> }
                              borderType='four'
                    />
                    <BaseText label={<span className={styles.label}>
                    <img className={styles.img} src={collaborate} alt=""/>
                    <span>加盟合作</span></span> }
                              borderType='four'
                    />
                    <BaseText label={<span className={styles.label}>
                    <img className={styles.img} src={inform} alt=""/>
                    <span>通知开关</span></span> }
                              borderType='four'
                    />
                    <BaseText label={<span className={styles.label}>
                    <img className={styles.img} src={teach} alt=""/>
                    <span>推广教程</span></span> }
                              borderType='four'
                    />
                    <BaseText label={<span className={styles.label}>
                    <img className={styles.img} src={introduce} alt=""/>
                    <span>平台介绍</span></span> }
                              borderType='four'
                    />
                </div>
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