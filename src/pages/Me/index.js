import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack,push} from 'react-router-redux';
import * as actionType from '../../actions/actionTypes';
import order from '../../assets/img/order.png';
import qrcode from '../../assets/img/qrcode.png';
import store from '../../assets/img/store.png';
import collaborate from '../../assets/img/collaborate.png';
import inform from '../../assets/img/inform.png';
import teach from '../../assets/img/teach.png';
import team from '../../assets/img/team.png';
import client from '../../assets/img/client.png';
import introduce from '../../assets/img/introduce.png';
import arrowRight from '../../assets/img/arrowRight.png';
import styles from './index.module.scss';

class Index extends Component {
    componentDidMount(){
        const {getUserInfo}=this.props;
        getUserInfo();
    }
    render() {
        const {push,userInfo}=this.props;
        console.log(userInfo);
        return (
            <div className={styles.me}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <div className={styles.left}>
                            <img className={styles.img} src={userInfo.headimgurl} alt=""/>
                        </div>
                        <div className={styles.center}>
                            <div className={styles.userName}>{userInfo.nickname}</div>
                            <div className={styles.vip}>vip{userInfo.grade}</div>
                        </div>
                        <div className={styles.right}>
                            <img src={arrowRight} alt=""/>
                        </div>
                    </div>
                    <div className={styles.text}>总资产（元）</div>
                    <div className={styles.property}>{userInfo.account&&userInfo.account.totalrevenue}</div>
                    <div className={styles.withdraw} onClick={()=>push('/withdraw')}>提现</div>
                    <div className={styles.box}>
                        <div className={styles.inner} />
                    </div>
                </div>
                <div className={styles.amount}>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.text}>可提现金额（元）</div>
                            <div className={styles.num}>{userInfo.account&&userInfo.account.balance}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.text}>直销奖励（元）</div>
                            <div className={styles.num}>{userInfo.account&&userInfo.account.revenue}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.text}>待入奖金（元）</div>
                            <div className={styles.num}>{userInfo.account&&userInfo.account.revenue2}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.grid}>
                <div className={styles.nav}>
                    <div className={styles.title}>其他服务</div>
                    <div className={styles.row}>
                         <div className={styles.item} onClick={()=>push('/order')}>
                             <img className={styles.img} src={order} alt=""/>
                             <div className={styles.text}>全部订单</div>
                         </div>
                        <div className={styles.item} onClick={()=>push('/team')}>
                            <img className={styles.img} src={team} alt=""/>
                            <div className={styles.text}>我的团队</div>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={client} alt=""/>
                            <div className={styles.text}>客户列表</div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <img className={styles.img} src={qrcode} alt=""/>
                            <div className={styles.text}>推广二维码</div>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={store} alt=""/>
                            <div className={styles.text}>推荐商户</div>
                        </div>
                        <div className={styles.item} onClick={()=>push('/collaborate')}>
                            <img className={styles.img} src={collaborate} alt=""/>
                            <div className={styles.text}>加盟合作</div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.item} onClick={()=>push('/inform')}>
                            <img className={styles.img} src={inform} alt=""/>
                            <div className={styles.text}>通知开关</div>
                        </div>
                        <div className={styles.item} onClick={()=>push('/teach')}>
                            <img className={styles.img} src={teach} alt=""/>
                            <div className={styles.text}>推广教程</div>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={introduce} alt=""/>
                            <div className={styles.text}>平台介绍</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo:state.infoData.getIn([actionType.USER_INFO,'data']).data||{}
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    push(url){
        dispatch(push(url));
    },
    getUserInfo(){
        dispatch({
            type:'USER_INFO'
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);